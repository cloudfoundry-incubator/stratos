import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, combineLatest as observableCombineLatest, Observable, of as observableOf } from 'rxjs';
import { combineLatest, filter, first, map, publishReplay, refCount, switchMap } from 'rxjs/operators';

import {
  IService,
  IServiceBroker,
  IServiceExtra,
  IServiceInstance,
  IServicePlan,
  IServicePlanVisibility,
} from '../../../../core/src/core/cf-api-svc.types';
import { getIdFromRoute } from '../../../../core/src/core/utils.service';
import { EntityService } from '../../../../store/src/entity-service';
import { APIResource } from '../../../../store/src/types/api.types';
import { cfEntityCatalog } from '../../cf-entity-catalog';
import { serviceBrokerEntityType, servicePlanVisibilityEntityType } from '../../cf-entity-types';
import { createEntityRelationPaginationKey } from '../../entity-relations/entity-relations.types';
import { getCfService, getServiceInstancesInCf, getServiceName, getServicePlans } from './services-helper';


export interface ServicePlanAccessibility {
  spaceScoped?: boolean;
  hasVisibilities?: boolean;
  isPublic: boolean;
  guid?: string;
  spaceGuid?: string;
}

export interface SpaceScopedService {
  isSpaceScoped: boolean;
  spaceGuid?: string;
  orgGuid?: string;
}

@Injectable()
export class ServicesService {
  isSpaceScoped$: Observable<SpaceScopedService>;
  allServiceInstances$: Observable<APIResource<IServiceInstance>[]>;
  serviceInstances$: Observable<APIResource<IServiceInstance>[]>;
  serviceGuid: any;
  cfGuid: any;
  serviceBrokers$: Observable<APIResource<IServiceBroker>[]>;
  serviceBroker$: Observable<APIResource<IServiceBroker>>;
  servicePlanVisibilities$: Observable<APIResource<IServicePlanVisibility>[]>;
  servicePlans$: Observable<APIResource<IServicePlan>[]>;
  serviceExtraInfo$: Observable<IServiceExtra>;
  service$: Observable<APIResource<IService>>;
  serviceEntityService: EntityService<APIResource<IService>>;
  initialised$ = new BehaviorSubject(false);

  constructor(
    public activatedRoute: ActivatedRoute,
  ) {

    this.cfGuid = getIdFromRoute(activatedRoute, 'endpointId');
    this.serviceGuid = getIdFromRoute(activatedRoute, 'serviceId');

    if (!this.serviceGuid) {
      return;
    }

    this.serviceEntityService = getCfService(this.serviceGuid, this.cfGuid);
    this.service$ = this.serviceEntityService.waitForEntity$.pipe(
      filter(o => !!o && !!o.entity),
      map(o => o.entity),
      publishReplay(1),
      refCount()
    );

    this.initBaseObservables();
  }

  getServicePlanVisibilities = () => {
    const paginationKey = createEntityRelationPaginationKey(servicePlanVisibilityEntityType, this.cfGuid);
    return cfEntityCatalog.servicePlanVisibility.store.getPaginationService(this.cfGuid, paginationKey, {}).entities$
  }
  private getServiceInstances = () => {
    return getServiceInstancesInCf(this.cfGuid);
  }

  private getServiceBrokers = () => {
    const paginationKey = createEntityRelationPaginationKey(serviceBrokerEntityType, this.cfGuid);
    return cfEntityCatalog.serviceBroker.store.getPaginationService(this.cfGuid, paginationKey, {}).entities$
  }

  getServiceBrokerById = (guid: string): Observable<APIResource<IServiceBroker>> => this.serviceBrokers$
    .pipe(
      filter(p => !!p),
      map(brokers => brokers.filter(b => b.metadata.guid === guid)),
      filter(s => s && s.length === 1),
      map(s => s[0]),
      first()
    )

  getServiceName = () => {
    return this.service$
      .pipe(
        map(getServiceName)
      );
  }

  getServiceProviderName = () => {
    return observableCombineLatest(this.serviceExtraInfo$, this.service$)
      .pipe(
        map(([extraInfo]) => {
          if (extraInfo && extraInfo.providerDisplayName) {
            return extraInfo.providerDisplayName;
          } else {
            return '';
          }
        }));
  }

  getServiceDescription = () => {
    return observableCombineLatest(this.serviceExtraInfo$, this.service$)
      .pipe(
        map(([extraInfo, service]) => {
          if (extraInfo && extraInfo.longDescription) {
            return extraInfo.longDescription;
          } else {
            return service.entity.description;
          }
        }));
  }


  getDocumentationUrl = () => this.serviceExtraInfo$.pipe(
    map(p => p ? p.documentationUrl : null)
  )

  getSupportUrl = () => this.serviceExtraInfo$.pipe(
    map(p => p ? p.supportUrl : null)
  )

  hasSupportUrl = () => this.getSupportUrl().pipe(
    map(p => !!p)
  )

  hasDocumentationUrl = () => this.getDocumentationUrl().pipe(
    map(p => !!p)
  )

  getServiceTags = () => this.service$.pipe(
    first(),
    map(service =>
      service.entity.tags.map(t => ({
        value: t,
        hideClearButton$: observableOf(true)
      }))
    )
  )

  private initBaseObservables() {
    this.servicePlanVisibilities$ = this.getServicePlanVisibilities();
    this.serviceExtraInfo$ = this.service$.pipe(map(o => JSON.parse(o.entity.extra)));
    this.servicePlans$ = getServicePlans(this.service$, this.cfGuid);
    this.serviceBrokers$ = this.getServiceBrokers();
    this.serviceBroker$ = this.serviceBrokers$.pipe(
      filter(p => !!p && p.length > 0),
      combineLatest(this.service$),
      map(([brokers, service]) => brokers.filter(broker => broker.metadata.guid === service.entity.service_broker_guid)),
      map(o => (o.length === 0 ? null : o[0]))
    );
    this.isSpaceScoped$ = this.serviceBroker$.pipe(
      map(o => o ? o.entity.space_guid : null),
      switchMap(spaceGuid => {
        if (!spaceGuid) {
          // Its possible the user is unable to see service broker,
          // therefore, we can't know if this service is space-scoped or not.
          // We are assuming it's not, since we dont have any other means of determining that.
          return observableOf({
            isSpaceScoped: false
          });
        } else {
          return cfEntityCatalog.space.store.getEntityService(spaceGuid, this.cfGuid).waitForEntity$.pipe(
            filter(o => !!o && !!o.entity),
            map(o => ({
              isSpaceScoped: true,
              spaceGuid,
              orgGuid: o.entity.entity.organization_guid
            })),
          );
        }
      })
    );
    this.allServiceInstances$ = this.getServiceInstances();
    this.serviceInstances$ = this.allServiceInstances$.pipe(
      map(instances => instances.filter(instance => instance.entity.service_guid === this.serviceGuid))
    );
  }
}

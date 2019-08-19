import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, of, Subscription } from 'rxjs';
import { first, map } from 'rxjs/operators';

import { GetOrganization } from '../../../../../cloud-foundry/src/actions/organization.actions';
import { GetSpace } from '../../../../../cloud-foundry/src/actions/space.actions';
import { AppState } from '../../../../../store/src/app-state';
import { endpointEntitiesSelector } from '../../../../../store/src/selectors/endpoint.selectors';
import { APIResource } from '../../../../../store/src/types/api.types';
import { EndpointModel } from '../../../../../store/src/types/endpoint.types';
import { IOrganization, IOrgQuotaDefinition, ISpace, ISpaceQuotaDefinition } from '../../../core/cf-api.types';
import { EntityServiceFactory } from '../../../core/entity-service-factory.service';
import { IHeaderBreadcrumb } from '../../../shared/components/page-header/page-header.types';
import { ActiveRouteCfOrgSpace } from '../cf-page.types';
import { entityCatalogue } from '../../../core/entity-catalogue/entity-catalogue.service';
import { CF_ENDPOINT_TYPE } from '../../../../../cloud-foundry/cf-types';
import { organizationEntityType, domainEntityType } from '../../../../../cloud-foundry/src/cf-entity-factory';
import { state } from '@angular/animations';
import { createEntityRelationKey } from '../../../../../cloud-foundry/src/entity-relations/entity-relations.types';

export class QuotaDefinitionBaseComponent {
  breadcrumbs$: Observable<IHeaderBreadcrumb[]>;
  quotaDefinition$: Observable<APIResource<IOrgQuotaDefinition | ISpaceQuotaDefinition>>;
  org$: Observable<APIResource<IOrganization>>;
  space$: Observable<APIResource<ISpace>>;
  cfGuid: string;
  orgGuid: string;
  spaceGuid: string;
  quotaGuid: string;
  detailsLoading$: Observable<boolean>;
  orgSubscriber: Subscription;

  constructor(
    protected entityServiceFactory: EntityServiceFactory,
    protected store: Store<AppState>,
    protected activeRouteCfOrgSpace: ActiveRouteCfOrgSpace,
    protected activatedRoute: ActivatedRoute,
  ) {
    this.cfGuid = activeRouteCfOrgSpace.cfGuid || activatedRoute.snapshot.queryParams.cfGuid;
    this.orgGuid = activeRouteCfOrgSpace.orgGuid || activatedRoute.snapshot.queryParams.orgGuid;
    this.spaceGuid = activeRouteCfOrgSpace.spaceGuid || activatedRoute.snapshot.queryParams.spaceGuid;
    this.quotaGuid = activatedRoute.snapshot.params.quotaId || activatedRoute.snapshot.queryParams.quotaGuid;
    this.setupOrgObservable();
    this.setupSpaceObservable();
    this.setupBreadcrumbs();
  }

  setupOrgObservable() {
    if (this.orgGuid) {
      const orgEntity = entityCatalogue.getEntity(CF_ENDPOINT_TYPE, organizationEntityType);
      const getOrgActionBuilder = orgEntity.actionOrchestrator.getActionBuilder('get');
      const getOrgAction = getOrgActionBuilder(this.orgGuid, this.cfGuid);
      this.org$ = this.entityServiceFactory.create<APIResource<IOrganization>>(
        this.orgGuid,
        getOrgAction
      ).waitForEntity$.pipe(
        map(data => data.entity),
      );
    }
  }

  setupSpaceObservable() {
    if (this.spaceGuid) {
      this.space$ = this.entityServiceFactory.create<APIResource<ISpace>>(
        this.spaceGuid,
        new GetSpace(this.spaceGuid, this.cfGuid),
        true
      ).waitForEntity$.pipe(
        map(data => data.entity),
      );
    }
  }

  private setupBreadcrumbs() {
    const endpoints$ = this.store.select(endpointEntitiesSelector);
    const org$ = this.org$ ? this.org$ : of(null);
    const space$ = this.space$ ? this.space$ : of(null);
    this.breadcrumbs$ = combineLatest(endpoints$, org$, space$).pipe(
      map(([endpoints, org, space]) => this.getBreadcrumbs(endpoints[this.cfGuid], org, space)),
      first()
    );
  }

  protected setupQuotaDefinitionObservable() {
    throw new Error('Method not implemented.');
  }

  protected getBreadcrumbs(
    endpoint: EndpointModel,
    org: APIResource<IOrganization>,
    space: APIResource<ISpace>
  ) {
    throw new Error('Method not implemented.');
    return null;
  }
}

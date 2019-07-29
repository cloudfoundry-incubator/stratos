import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { appReducers } from '../../../../../../../../store/src/reducers.module';
import { getInitialTestStoreState } from '../../../../../../../test-framework/store-test-helper';
import { CoreModule } from '../../../../../../core/core.module';
import { MDAppModule } from '../../../../../../core/md.module';
import { ApplicationStateService } from '../../../../../../shared/components/application-state/application-state.service';
import { SharedModule } from '../../../../../../shared/shared.module';
import { ApplicationService } from '../../../../application.service';
import { ApplicationEnvVarsHelper } from '../build-tab/application-env-vars.service';
import { EventsTabComponent } from './events-tab.component';



describe('EventsTabComponent', () => {
  class ApplicationServiceMock {
    cfGuid = 'mockCfGuid';
    appGuid = 'mockAppGuid';
  }

  let component: EventsTabComponent;
  let fixture: ComponentFixture<EventsTabComponent>;
  const initialState = { ...getInitialTestStoreState() };
  initialState.pagination = {
    ...initialState.pagination,
    cfEvent: {
      ['app-events:mockCfGuidmockAppGuid']: {
        pageCount: 1,
        currentPage: 1,
        totalResults: 0,
        params: {
        },
        ids: {
        },
        pageRequests: {
        },
        clientPagination: {
          pageSize: 5,
          currentPage: 1,
          totalResults: 0,
          filter: {
            string: '',
            items: {}
          },
        }
      }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventsTabComponent],
      providers: [
        { provide: ApplicationService, useClass: ApplicationServiceMock },
        ApplicationStateService,
        ApplicationEnvVarsHelper,
      ],
      imports: [
        MDAppModule,
        SharedModule,
        CoreModule,
        StoreModule.forRoot(
          appReducers,
          {
            initialState
          }
        ),
        NoopAnimationsModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

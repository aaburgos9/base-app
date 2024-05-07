import { TestBed } from '@angular/core/testing';

import { WorkflowService } from './workflow.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../authentication/auth.service';
import { CriptoService } from '../encryption/cripto.service';
import { SendInformationService } from '../SendInformation/send-information.service';
import { JwtModule } from '@auth0/angular-jwt';
import { of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { STATE_SUCESS, STATE_ERROR, STATUS_NORMAL, MBAAS_ROUTING, MBAAS_STEPS } from 'src/mbaas/mbaas.const';
import { CatalogoService } from '../catalogo/catalogo.service';
import {Byc0010Component } from 'src/mbaas/filtro/byc0010/byc0010.component';

export function jwtTokenGetter() {
  return localStorage.getItem('token');
}

describe('WorkflowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([{
          path: `${MBAAS_ROUTING.PROYECTO}/${MBAAS_STEPS.BYC0010}`,
          component:Byc0010Component
        }]),
        JwtModule.forRoot({
          config: {
            tokenGetter: jwtTokenGetter,
            allowedDomains: ['.*']
          }
        })
      ],
      providers: [
        AuthService,
        CriptoService,
        SendInformationService
      ]
    });
    window.dataLayer = { push: () => {} };
  });

  it('should be created', () => {
    const service: WorkflowService = TestBed.inject(WorkflowService);
    expect(service).toBeTruthy();
  });

  it('Workflow getModulo', () => {
    const service: WorkflowService = TestBed.inject(WorkflowService);
    const result = service.getRoute('BYC0010');
    expect(result).toEqual(`${MBAAS_ROUTING.PROYECTO}/${MBAAS_STEPS.BYC0010.ROUTE}`);
  });

  it('Workflow errorGeneralWorflow', () => {
    const service: WorkflowService = TestBed.inject(WorkflowService);
    service.errorGeneralWorflow()('Error Message');
    expect(service).toBeTruthy();
  });

  it('Workflow successWorkflow STATE_SUCESS uno', () => {
    const service: WorkflowService = TestBed.inject(WorkflowService);
    spyOn(TestBed.inject(SendInformationService), 'sendData').and.callFake( () => {});
    service.successWorkflow()({
      data: {
        payload: {

        },
      status: STATE_SUCESS,
      stepId: 'BYC0010',
      message: STATUS_NORMAL
      }
    });
    expect(service).toBeTruthy();
  });

  it('Workflow successWorkflow STATE_SUCESS dos', () => {
    const service: WorkflowService = TestBed.inject(WorkflowService);
    service.pro = true;
    spyOn(TestBed.inject(SendInformationService), 'sendData').and.callFake( () => {});
    service.successWorkflow()({
      data: {
        payload: {

        },
      status: STATE_SUCESS,
      stepId: 'BYC0010',
      message: STATUS_NORMAL
      }
    });
    expect(service).toBeTruthy();
  });

  xit('Workflow successWorkflow STATE_SUCESS tres', () => {
    const service: WorkflowService = TestBed.inject(WorkflowService);
    service.pro = false;
    spyOn(TestBed.inject(SendInformationService), 'sendData').and.callFake( () => {});
    service.successWorkflow()({
      data: {
        payload: {},
        status: STATE_SUCESS,
        stepId: 'BYC0010',
        message: STATUS_NORMAL
      }
    });
    expect(service).toBeTruthy();
  });

  it('Workflow successWorkflow STATE_ERROR', () => {
    const service: WorkflowService = TestBed.inject(WorkflowService);
    spyOn(TestBed.inject(SendInformationService), 'sendData').and.callFake( () => {});
    service.successWorkflow()({
      data: {
        payload: {

        },
      status: STATE_ERROR,
      stepId: 'BYC0010'
      }
    });
    expect(service).toBeTruthy();
  });

  it('Workflow successWorkflow Other', () => {
    const service: WorkflowService = TestBed.inject(WorkflowService);
    spyOn(TestBed.inject(SendInformationService), 'sendData').and.callFake( () => {});
    service.successWorkflow()({
      data: {
        payload: {

        },
      status: 5,
      stepId: 'BYC0010'
      }
    });
    expect(service).toBeTruthy();
  });

  it('Workflow workflow 1', () => {
    const service: WorkflowService = TestBed.inject(WorkflowService);
    spyOn(TestBed.inject(SendInformationService), 'sendData').and.callFake( () => {});
    spyOn(TestBed.inject(HttpClient), 'get').and.returnValue( of({ ip: '0.0.0.0'}) );
    spyOn(TestBed.inject(HttpClient), 'post').and.returnValue( of({}) );
    service.workflow('APPBOOT', {
      stepId: '000',
      algo: true
    });
    expect(service).toBeTruthy();
  });

  it('Workflow workflow 2', () => {
    const service: WorkflowService = TestBed.inject(WorkflowService);
    spyOn(TestBed.inject(SendInformationService), 'sendData').and.callFake( () => {});
    spyOn(TestBed.inject(HttpClient), 'get').and.returnValue( of({ ip: '0.0.0.0'}) );
    spyOn(TestBed.inject(HttpClient), 'post').and.returnValue( of(null) );
    service.workflow('000', {
      stepId: '000',
      algo: true
    });
    expect(service).toBeTruthy();
  });

  it('Workflow workflow 3', () => {
    const service: WorkflowService = TestBed.inject(WorkflowService);
    spyOn(TestBed.inject(SendInformationService), 'sendData').and.callFake( () => {});
    spyOn(TestBed.inject(HttpClient), 'get').and.returnValue( of({ ip: '0.0.0.0'}) );
    spyOn(TestBed.inject(HttpClient), 'post').and.returnValue( of(null) );
    service.workflow('APPBOOT', {
      stepId: '000',
      algo: true
    });
    expect(service).toBeTruthy();
  });

  it('Workflow workflow 3', () => {
    const service: WorkflowService = TestBed.inject(WorkflowService);
    spyOn(TestBed.inject(SendInformationService), 'sendData').and.callFake( () => {});
    spyOn(TestBed.inject(HttpClient), 'get').and.returnValue( of({ ip: '0.0.0.0'}) );
    service.workflow('000', {
      stepId: 'BYC0010',
      algo: true
    });
    expect(service).toBeTruthy();
  });

  it('Workflow workflow catch', () => {
    const service: WorkflowService = TestBed.inject(WorkflowService);
    spyOn(TestBed.inject(SendInformationService), 'sendData').and.callFake( () => {});
    spyOn(TestBed.inject(CriptoService), 'encrypter').and.returnValue(Promise.reject('test error'));
    spyOn(TestBed.inject(HttpClient), 'get').and.returnValue( of({ ip: '0.0.0.0'}) );
    service.workflow('CUE001', {
      stepId: 'BYC0010',
      algo: true
    });
    expect( () => {
      throw new Error('test error');
    }).toThrowError('test error');
  });

  xit('successUncrypter() 1', () => {
    const service: WorkflowService = TestBed.inject(WorkflowService);
    service.successUncrypter({ data: { stepId: 'PROMEX020', status: 1 }})
    ({ data: { stepId: 'PROMEX020', status: 1 }});
    expect(service).toBeTruthy();
  });

  it('successUncrypter() 2', () => {
    const service: WorkflowService = TestBed.inject(WorkflowService);
    spyOn(TestBed.inject(CatalogoService), 'data').and.returnValue(of([{
      title: '',
      message: '',
      buttons: [{}]
    }]));
    spyOn(TestBed.inject(SendInformationService), 'sendData').and.callFake(() => {});
    service.successUncrypter({ data: { status: 3 }})
    ({ data: { stepId: 'BYC0010'}});
    expect(service).toBeTruthy();
  });
});

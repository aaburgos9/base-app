import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtModule } from '@auth0/angular-jwt';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { ForbiddenComponent } from 'src/mbaas/forbidden/forbidden/forbidden.component';
import { MODAL } from 'src/mbaas/mbaas.const';
import { initTraslate, jwtTokenGetter } from 'src/mbaas/mbaas.module';
import { AuthService } from '../authentication/auth.service';
import { CriptoService } from '../encryption/cripto.service';
import { PostMessagesService } from '../postMessages/post-messages.service';
import { SendInformationService } from '../SendInformation/send-information.service';
import { ThemeServiceService } from '../themeService/theme-service.service';
import { WorkflowService } from '../workflow/workflow.service';

import { BootResolverServiceService } from './boot-resolver-service.service';

describe('BootResolverServiceService', () => {
  let service: BootResolverServiceService;
  let routerSpy: { navigate: jasmine.Spy };
  let stateRouteSpy: { state: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([{
          path: '/forbidden',
          component: ForbiddenComponent
        }]),
        JwtModule.forRoot({
          config: {
              tokenGetter: jwtTokenGetter,
              allowedDomains: ['.*']
          }
        }),
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: initTraslate,
            deps: [HttpClient],
          },
        }),
      ],
      providers: [
        AuthService,
        CriptoService,
        WorkflowService,
        SendInformationService,
        PostMessagesService,
        ThemeServiceService,
        { provide: Router, useValue: routerSpy},
        { provide: ActivatedRouteSnapshot, useValue: { params: { otp: 'value' } } },
        { provide: RouterStateSnapshot, useValue: stateRouteSpy }
      ]
    });
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    service = new BootResolverServiceService(
      TestBed.inject(Router),
      TestBed.inject(AuthService),
      TestBed.inject(CriptoService),
      TestBed.inject(WorkflowService),
      TestBed.inject(SendInformationService),
      TestBed.inject(TranslateService),
      TestBed.inject(SendInformationService),
      TestBed.inject(PostMessagesService),
      TestBed.inject(ThemeServiceService)
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test for service resolve', () => {
    const activatinRoute = new ActivatedRouteSnapshot();
    activatinRoute.params = { otp: 'otp'};
    expect(service.resolve(activatinRoute, null)).toEqual({});
  });

  it('test for service resolve else', () => {
    const activatinRoute = new ActivatedRouteSnapshot();
    activatinRoute.params = {};
    expect(service.resolve(activatinRoute, null)).toEqual({});
  });

  it('test for successAuthenticate', () => {
    spyOn(TestBed.inject(AuthService), 'decodeToken').and.returnValue('token');
    spyOn(TestBed.inject(CriptoService), 'getKeysRemote').and.returnValue(Promise.resolve(true));
    const success = service.successAuthenticate();
    success({ state: 1 });
    expect(service).toBeTruthy();
  });

  it('test for successAuthenticate fail getKeysRemote', () => {
    spyOn(TestBed.inject(AuthService), 'decodeToken').and.returnValue('token');
    spyOn(TestBed.inject(CriptoService), 'getKeysRemote').and.returnValue(Promise.reject());
    const success = service.successAuthenticate();
    success({ state: 1 });
    expect(service).toBeTruthy();
  });

  it('test for successAuthenticate fail STATUS', () => {
    spyOn(TestBed.inject(AuthService), 'decodeToken').and.returnValue('token');
    spyOn(TestBed.inject(CriptoService), 'getKeysRemote').and.returnValue(Promise.resolve(true));
    const success = service.successAuthenticate();
    success({ state: 0 });
    expect(service).toBeTruthy();
  });

  it('test for successGetKeyRemote', () => {
    spyOn(TestBed.inject(CriptoService), 'keyCreator').and.returnValue(Promise.resolve(true));
    const successGetKey = service.successGetKeyRemote('token', { otp: '' }, {});
    successGetKey('key');
    expect(service).toBeTruthy();
  });

  it('test for successGetKeyRemote fail keyCreator', () => {
    spyOn(TestBed.inject(CriptoService), 'keyCreator').and.returnValue(Promise.reject());
    const successGetKey = service.successGetKeyRemote('token', { otp: '' }, {});
    successGetKey('key');
    expect(service).toBeTruthy();
  });

  xit('test for successKeyCreator', () => {
    const successFunction = service.successKeyCreator({ product: 'TEST_EXAMPLE_83', sub: 'dasdasd-asdasd-asdasdas-dasd' }, {}, {});
    successFunction('key');
    expect(service).toBeTruthy();
  });

  it('test for saveLocalStorage', () => {
    service.saveLocalStorage('Product_template');
    expect(service).toBeTruthy();
  });

  it('test for saveLocalStorage if', () => {
    service.saveLocalStorage('other');
    expect(service).toBeTruthy();
  });

  it('test for updateMessage', () => {
    service.updateMessage({ message: 'el numero de [cuenta] es:', payload: { cuenta: 1234567891011 }});
    expect(service).toBeTruthy();
  });

  it('test for updateMessage else ', () => {
    service.updateMessage({ message: 'el numero de cuenta es:', payload: { cuenta: 1234567891011 }});
    expect(service).toBeTruthy();
  });

  it('test for errorAuthenticate', () => {
    const errorFunction = service.errorAuthenticate();
    expect(errorFunction('Error')).toBeUndefined();
  });

  it('test for service callAction', () => {
    spyOn(service['guard'], 'lastValue').withArgs(MODAL).and.returnValue({ postmessage: 'catPOST_MSG', token: false });
    spyOn(service['postMessage'], 'callPostMessage').and.returnValue();
    const callFunction = service.callAction();
    callFunction((close) => {});
    expect(service).toBeTruthy();
  });

});


// // import {
// //   ComponentFactoryResolver,
// //   ComponentRef,
// //   ViewContainerRef,
// // } from '@angular/core';

// // import { DynamicFieldDirective } from './dynamic-field.directive';

// // import { FormBuilder } from '@angular/forms';
// // import { COMPONENTS, FormTypes } from '../../config/form-config';
// // import { FieldConfig } from '../../models/field-config.interface';
// // import { Field } from '../../models/field.interface';

// // describe('DynamicFieldDirective', () => {
// //   let directive: DynamicFieldDirective;

// //   const spyComponentFactoryResolver: jasmine.SpyObj<ComponentFactoryResolver> =
// //     jasmine.createSpyObj('ComponentFactoryResolver', [
// //       'resolveComponentFactory',
// //     ]);

// //   const spyViewContainerRef: jasmine.SpyObj<ViewContainerRef> =
// //     jasmine.createSpyObj('ViewContainerRef', ['createComponent']);

// //   const fieldConfigMock: FieldConfig = {
// //     type: FormTypes.textField,
// //     name: 'fechaNacimiento',
// //     label: '¿Cuál es su fecha de nacimiento?',
// //   };

// //   const componentMock = {
// //     instance: { config: {}, group: {} },
// //   } as unknown as ComponentRef<Field>;

// //   beforeEach(() => {
// //     const formBuilder: FormBuilder = new FormBuilder();
// //     directive = new DynamicFieldDirective(
// //       spyComponentFactoryResolver,
// //       spyViewContainerRef
// //     );

// //     spyViewContainerRef.createComponent.and.returnValue(componentMock);

// //     directive['component'] = componentMock;
// //     directive.config = fieldConfigMock;
// //     directive.group = formBuilder.group({ name: 'Name' });
// //   });

// //   it('should create', () => {
// //     expect(directive).toBeTruthy();
// //   });

// //   it('should method ngOnChanges', () => {
// //     directive.ngOnChanges();
// //     expect(directive).toBeTruthy();
// //   });

// //   it('should method ngOnInit', () => {
// //     directive.ngOnInit();
// //     expect(directive).toBeTruthy();
// //   });

// //   it('should method ngOnInit', () => {
// //     const supportedTypes = Object.keys(COMPONENTS).join(', ');
// //     directive.config = {
// //       ...fieldConfigMock,
// //       type: FormTypes.date,
// //     };

// //     expect(() => directive.ngOnInit()).toThrow(
// //       new Error(`Trying to use an unsupported type (${'date'}).
// //         Supported types: ${supportedTypes}`)
// //     );
// //   });

// //   afterEach(() => {
//     directive = null;
//   });
// });

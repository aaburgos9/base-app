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

// import { TestBed } from '@angular/core/testing';
// import { PostMessagesService } from './post-messages.service';
// import { SendInformationService } from '../SendInformation/send-information.service';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { JwtModule } from '@auth0/angular-jwt';
// import { jwtTokenGetter } from 'src/mbaas/mbaas.module';
// import { CatalogoService } from '../catalogo/catalogo.service';
// import { of, throwError } from 'rxjs';
// import { HttpErrorResponse } from '@angular/common/http';

// describe('PostMessagesService', () => {
//   beforeEach(() =>
//     TestBed.configureTestingModule({
//       imports: [
//         HttpClientTestingModule,
//         RouterTestingModule,
//         JwtModule.forRoot({
//           config: {
//             tokenGetter: jwtTokenGetter,
//             allowedDomains: ['.*'],
//           },
//         }),
//       ],
//       providers: [PostMessagesService, SendInformationService],
//     })
//   );

//   it('should be created', () => {
//     const service: PostMessagesService = TestBed.inject(PostMessagesService);
//     expect(service).toBeTruthy();
//   });

//   it('test addEventListener', () => {
//     const service: PostMessagesService = TestBed.inject(PostMessagesService);

//     service.addListener();
//     expect(service).toBeTruthy();
//   });

//   it('test getAndSendPostMessages', () => {
//     const service: PostMessagesService = TestBed.inject(PostMessagesService);
//     spyOn(TestBed.inject(CatalogoService), 'data').and.returnValue(
//       of([
//         {
//           fn: 'setTitle',
//           message: {
//             title: '',
//           },
//         },
//       ])
//     );
//     service.getAndSendPostMessages('catPOST_SETTITLE', {});
//     expect(service).toBeTruthy();
//   });

//   it('test getAndSendPostMessages branch', () => {
//     const service: PostMessagesService = TestBed.inject(PostMessagesService);
//     spyOn(TestBed.inject(SendInformationService), 'lastValue')
//       .withArgs('modulo')
//       .and.returnValue('MNUING')
//       .withArgs('pais')
//       .and.returnValue('CO')
//       .withArgs('lenguaje')
//       .and.returnValue('ES')
//       .withArgs('kind')
//       .and.returnValue('cuenta')
//       .withArgs('canal')
//       .and.returnValue('37')
//       .withArgs('postMessagesToken')
//       .and.returnValue('123123123');
//     spyOn(TestBed.inject(CatalogoService), 'data').and.returnValue(
//       of([
//         {
//           fn: 'setTitle',
//           message: {
//             title: '',
//           },
//         },
//       ])
//     );
//     service.getAndSendPostMessages('catPOST_SETTITLE', {});
//     expect(service).toBeTruthy();
//   });

//   it('test getAndSendPostMessages branch error', () => {
//     const service: PostMessagesService = TestBed.inject(PostMessagesService);
//     spyOn(TestBed.inject(SendInformationService), 'lastValue')
//       .withArgs('modulo')
//       .and.returnValue('MNUING')
//       .withArgs('pais')
//       .and.returnValue('CO')
//       .withArgs('lenguaje')
//       .and.returnValue('ES')
//       .withArgs('kind')
//       .and.returnValue('cuenta')
//       .withArgs('canal')
//       .and.returnValue('37')
//       .withArgs('postMessagesToken')
//       .and.returnValue('123123123');
//     service.getAndSendPostMessages('catPOST_SET', {});
//     expect(service).toBeTruthy();
//   });

//   it('test callPostMessage', () => {
//     const service: PostMessagesService = TestBed.inject(PostMessagesService);
//     service.callPostMessage({
//       fn: 'setTitle',
//       message: { toeken: '234567890' },
//     });
//     expect(service).toBeTruthy();
//   });

//   it('test service creation', () => {
//     const catalogo = TestBed.inject(CatalogoService);
//     const obser = TestBed.inject(SendInformationService);
//     const service = new PostMessagesService(obser, catalogo);
//     spyOn(service, 'addListener').and.callFake(() => {});
//     expect(service).toBeTruthy();
//   });

//   it('test service response catalo error', () => {
//     const errorResponse = new HttpErrorResponse({
//       error: { code: 404, message: 'es un error' },
//       status: 400,
//       statusText: 'Bad Request',
//     });
//     const catalogo = TestBed.inject(CatalogoService);
//     const obser = TestBed.inject(SendInformationService);
//     const service = new PostMessagesService(obser, catalogo);
//     spyOn(service['catalogo'], 'data').and.returnValue(
//       throwError(() => errorResponse)
//     );
//     expect(service).toBeTruthy();
//   });

//   it('test service.postMessageEmitter', () => {
//     const catalogo = TestBed.inject(CatalogoService);
//     const obser = TestBed.inject(SendInformationService);
//     const service = new PostMessagesService(obser, catalogo);
//     service.postMessageEmitter({
//       fn: 'setTitle',
//       message: { toeken: '234567890' },
//     });
//     expect(service).toBeTruthy();
//   });

//   it('test addListener send event message', () => {
//     const catalogo = TestBed.inject(CatalogoService);
//     const obser = TestBed.inject(SendInformationService);

//     spyOn(obser, 'sendData').and.callFake(() => {});
//     spyOn(window, 'addEventListener').and.callFake(
//       (_event: string, callback: any) => {
//         callback({
//           data: {
//             fnCallback: () => {},
//           },
//         });
//       }
//     );

//     const service = new PostMessagesService(obser, catalogo);
//     service.addListener();
//     expect(service).toBeTruthy();
//   });

//   it('test method direction', () => {
//     const catalogo = TestBed.inject(CatalogoService);
//     const obser = TestBed.inject(SendInformationService);
//     const service = new PostMessagesService(obser, catalogo);
//     spyOn(service, 'postMessageEmitter').and.callFake(() => {});

//     service.direction('http://example.com');

//     expect(service).toBeTruthy();
//   });
// });


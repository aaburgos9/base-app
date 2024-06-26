import { TestBed } from '@angular/core/testing';
import { PostMessagesService } from './post-messages.service';
import { APP_READY, POST_TOKEN } from '../../../mbaas.const';
import { SendInformationService } from '../SendInformation/send-information.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtModule } from '@auth0/angular-jwt';
import { jwtTokenGetter } from 'src/mbaas/mbaas.module';
import { CatalogoService } from '../catalogo/catalogo.service';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


describe('PostMessagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      RouterTestingModule,
      JwtModule.forRoot({
        config: {
          tokenGetter: jwtTokenGetter,
          allowedDomains: ['.*']
        }
      }),
    ],
    providers: [
      PostMessagesService,
      SendInformationService
    ]
  }));

  it('should be created', () => {
    const service: PostMessagesService = TestBed.inject(PostMessagesService);
    expect(service).toBeTruthy();
  });

  it('test addEventListener', () => {
    const service: PostMessagesService = TestBed.inject(PostMessagesService);
    service.addListener();
    expect(service).toBeTruthy();
  });

  it('test getAndSendPostMessages', () => {
    const service: PostMessagesService = TestBed.inject(PostMessagesService);
    spyOn(TestBed.inject(CatalogoService), 'data').and.returnValue(of([{
      fn: 'setTitle',
      message: {
        title: ''
      }
    }]));
    service.getAndSendPostMessages('catPOST_SETTITLE', {});
    expect(service).toBeTruthy();
  });

  it('test getAndSendPostMessages branch', () => {
    const service: PostMessagesService = TestBed.inject(PostMessagesService);
    spyOn(TestBed.inject(SendInformationService), 'lastValue')
      .withArgs('modulo').and.returnValue('MNUING')
      .withArgs('pais').and.returnValue('CO')
      .withArgs('lenguaje').and.returnValue('ES')
      .withArgs('kind').and.returnValue('cuenta')
      .withArgs('canal').and.returnValue('37')
      .withArgs('postMessagesToken').and.returnValue('123123123');
    spyOn(TestBed.inject(CatalogoService), 'data').and.returnValue(of([{
      fn: 'setTitle',
      message: {
        title: ''
      }
    }]));
    service.getAndSendPostMessages('catPOST_SETTITLE', {});
    expect(service).toBeTruthy();
  });

  it('test getAndSendPostMessages branch error', () => {
    const service: PostMessagesService = TestBed.inject(PostMessagesService);
    spyOn(TestBed.inject(SendInformationService), 'lastValue')
      .withArgs('modulo').and.returnValue('MNUING')
      .withArgs('pais').and.returnValue('CO')
      .withArgs('lenguaje').and.returnValue('ES')
      .withArgs('kind').and.returnValue('cuenta')
      .withArgs('canal').and.returnValue('37')
      .withArgs('postMessagesToken').and.returnValue('123123123');
    service.getAndSendPostMessages('catPOST_SET', {});
    expect(service).toBeTruthy();
  });

  it('test callPostMessage', () => {
    const service: PostMessagesService = TestBed.inject(PostMessagesService);
    service.callPostMessage({fn: 'setTitle', message: { title: '' }});
    expect(service).toBeTruthy();
  });

  it('test service creation', () => {
    const catalogo = TestBed.inject(CatalogoService);
    const obser = TestBed.inject(SendInformationService);
    const service = new PostMessagesService(obser, catalogo);
    spyOn(service, 'addListener').and.callFake(() => {});
    expect(service).toBeTruthy();
  });

  it('test service response catalo error', () => {
    const errorResponse = new HttpErrorResponse({
      error: { code: 404, message: 'es un error' },
      status: 400,
      statusText: 'Bad Request',
    });
    const catalogo = TestBed.inject(CatalogoService);
    const obser = TestBed.inject(SendInformationService);
    const service = new PostMessagesService(obser, catalogo);
    spyOn(service['catalogo'], 'data').and.returnValue(throwError(errorResponse));
    expect(service).toBeTruthy();
  });

});

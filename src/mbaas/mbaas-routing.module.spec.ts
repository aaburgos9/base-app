/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
import { Location } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, PreloadAllModules } from '@angular/router';
import { MbaasComponent } from './mbaas.component';
import { routes } from './mbaas-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoggerModule } from './logger/logger.index';
import { ModalModule } from './core/components/modal/modal.module';
import { HttpClient } from '@angular/common/http';
//import { DeviceDetectorModule } from 'ngx-device-detector';
import { JwtModule } from '@auth0/angular-jwt';
import { jwtTokenGetter, initTraslate } from './mbaas.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { SendInformationService } from './core/service/SendInformation/send-information.service';
import { CriptoService } from './core/service/encryption/cripto.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GUARD_PRODUCTO, STEP_ID } from './mbaas.const';
import { environment } from 'src/environments/environment';

describe('Router: Mbaas', () => {
  let location: Location;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MbaasComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes(routes, {
          useHash: environment.useHash,
          preloadingStrategy: PreloadAllModules
        }),
        LoggerModule,
        ModalModule,
        HttpClientTestingModule,
        //DeviceDetectorModule.forRoot(),
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
            deps: [HttpClient]
          }
        })
      ],
      providers: [
        SendInformationService,
        CriptoService
      ],
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    router.initialNavigation();
  });

  it('navigate to "forbbiden" redirects you to /forbbiden', (done) => {
    router.navigate(['/forbbiden']).then( () => {
      expect(location.path(environment.useHash)).toBe('/forbbiden');
      done();
    });
  });

  it('navigate to "solicitudInicial/otp" redirects you to /solicitudInicial/otp', (done) => {
    router.navigate(['/solicitudInicial/otp']).then( () => {
      expect(location.path(environment.useHash)).toBe('/solicitudInicial/otp');
      done();
    });
  });

  it('navigate to "BYC0010" redirects you to rotativo/beneficios', (done) => {
    const obser: SendInformationService<string|boolean> = TestBed.inject(SendInformationService);
    obser.sendData('BYC0010', STEP_ID);
    obser.sendData(true, GUARD_PRODUCTO);
    router.navigate(['rotativo/beneficios']).then( () => {
      expect(location.path(environment.useHash)).toBe('/rotativo/beneficios');
      done();
    });
  });



});

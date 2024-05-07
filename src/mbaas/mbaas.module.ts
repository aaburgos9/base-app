import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MbaasRoutingModule } from './mbaas-routing.module';
import { MbaasComponent } from './mbaas.component';
import { SendInformationService } from './core/service/SendInformation/send-information.service';
import { LoggerModule, LoggerComponent } from './logger/logger.index';
import { ACCESS_TOKEN, TRANSLATE } from './mbaas.const';
import { CriptoService } from './core/service/encryption/cripto.service';
import { AlertModalTMAComponent } from './core/components/modal/alert-modal-tma/alert-modal-tma.component';
import { ModalComponent } from './core/components/modal/modal.component';
import { ModalModule } from './core/components/modal/modal.module';
import { ReAuthenticateService } from './core/interceptors/reAuthenticate/re-authenticate.service';
import { AuthService } from './core/service/authentication/auth.service';
import { PostMessagesService } from './core/service/postMessages/post-messages.service';
import { Router } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from 'src/environments/environment';

@NgModule({
  entryComponents: [
    AlertModalTMAComponent
  ],
  declarations: [
    MbaasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MbaasRoutingModule,
    LoggerModule,
    ModalModule,
    HttpClientModule,
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
    { provide: APP_BASE_HREF, useValue: environment.base },
    SendInformationService,
    CriptoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ReAuthenticateService,
      deps: [
        AuthService,
        SendInformationService,
        PostMessagesService,
        Router
      ],
      multi: true
    }
  ],
  bootstrap: [
    MbaasComponent,
    LoggerComponent,
    ModalComponent
  ]
})
export class MbaasModule { }

export function jwtTokenGetter() {
  return localStorage.getItem(ACCESS_TOKEN);
}
export function initTraslate(http: HttpClient) {
  return new TranslateHttpLoader(http, TRANSLATE.URL, '.json');
}

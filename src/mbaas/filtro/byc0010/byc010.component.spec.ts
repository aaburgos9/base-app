import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChangeDetectorRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtModule } from '@auth0/angular-jwt';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject, of } from 'rxjs';
import { ButtonBackModule } from 'src/mbaas/core/components/button-back/button-back.module';
import { ButtonContinueModule } from 'src/mbaas/core/components/button-continue/button-continue.module';
import { HeaderEnterpriseComponent } from 'src/mbaas/core/components/header-enterprise/header-enterprise.component';
import { FilesPipe } from 'src/mbaas/core/pipes/filesPipe/files.pipe';
import { PipeModuleModule } from 'src/mbaas/core/pipes/pipe-module.module';
import { CatalogoService } from 'src/mbaas/core/service/catalogo/catalogo.service';
import { CriptoService } from 'src/mbaas/core/service/encryption/cripto.service';
import { GtmService } from 'src/mbaas/core/service/gtm/gtm.service';
import { PostMessagesService } from 'src/mbaas/core/service/postMessages/post-messages.service';
import { SendInformationService } from 'src/mbaas/core/service/SendInformation/send-information.service';
import { initTraslate, jwtTokenGetter } from 'src/mbaas/mbaas.module';

import {Byc0010Component } from './byc0010.component';

describe('Byc0010Component', () => {
  let component:Byc0010Component;
  let fixture: ComponentFixture<Byc0010Component>;

  const catProfil = [
    [
      {
        "header": {
          "title": "Apertura de producto",
          "atrasActivado": true
        },
        "banner": "astPROFIL_BK_PRINCIPAL",
        "mainTitle": "Información de la empresa",
        "labelRadio": "¿Los datos del Representante Legal son correctos?",
        "labelInput": "Si está recibiendo ayuda de un asesor del , ingrese el código del asesor. (opcional)",
        "labelCheck": "Autorizo a SmartJungle el tratamiento de datos personales, consulta y reporte en operadores de información.",
        "codigoAsesor": "Si está recibiendo ayuda de un asesor del , ingrese el código del asesor.",
        "tycAut:": " Autorizo a SmartJungle el tratamiento de datos personales, consulta y reporte en operadores de información.",
        "forms": [
          {
            "name": "datosRepLegal",
            "label": "¿Los datos del Representante Legal son correctos?",
            "isHidden": false
          },
          {
            "name": "codigoAsesor",
            "label": "Si está recibiendo ayuda de un asesor del , ingrese el código del asesor. (opcional)GCP",
            "placeholder": "Código"
          }
        ],
        "checkBox": {
          "initLabel": "Autorizo a SmartJungle el tratamiento de datos personales, consulta y reporte en operadores de información."
        },
        "results": [
          {
            "label": "Empresa"
          },
          {
            "label": "Representante legal"
          }
        ],
        "customColors": {
          "header1": "rgba(29, 29, 29, 1)",
          "header2": "rgba(87, 87, 87, 1)",
          "background": "#ebecf0",
          "buttonDisabled": "#d1d5e0",
          "buttonEnabled": "#E1111C",
          "pressColor": "#B70412"
        }
      }
    ],
    [
      {
        "typeDoc": [
          {
            "enable": true,
            "value": "00",
            "label": "SIN TIPO DOCUMENTO"
          },
          {
            "enable": true,
            "value": "01",
            "label": "CEDULA DE CIUDADANIA"
          },
          {
            "enable": true,
            "value": "02",
            "label": "CEDULA DE EXTRANJERIA"
          },
          {
            "enable": true,
            "value": "03",
            "label": "NIT"
          },
          {
            "enable": true,
            "value": "04",
            "label": "TARJETA DE IDENTIDAD"
          },
          {
            "enable": true,
            "value": "05",
            "label": "PASAPORTE"
          },
          {
            "enable": true,
            "value": "06",
            "label": "TARJETA DE SEGURIDAD SOCIAL"
          },
          {
            "enable": true,
            "value": "07",
            "label": "SOCIEDAD EXTRANJERA"
          },
          {
            "enable": true,
            "value": "08",
            "label": "FIDEICOMISO"
          },
          {
            "enable": true,
            "value": "09",
            "label": "NIT MENORES"
          },
          {
            "enable": true,
            "value": "10",
            "label": "RIF VENEZUELA"
          },
          {
            "enable": true,
            "value": "11",
            "label": "NIT EXTRANJERIA"
          },
          {
            "enable": true,
            "value": "12",
            "label": "NIT PERSONA NATURAL"
          },
          {
            "enable": true,
            "value": "13",
            "label": "REGISTRO CIVIL DE NACIMIENTO"
          },
          {
            "enable": true,
            "value": "14",
            "label": "NUIP"
          },
          {
            "enable": true,
            "value": "99",
            "label": "NIT DESASOCIADO"
          }
        ]
      }
    ]
  ];

  beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
         Byc0010Component,
          HeaderEnterpriseComponent,
          FilesPipe
        ],
        imports: [
          ButtonContinueModule,
          ButtonBackModule,
          RouterTestingModule,
          HttpClientTestingModule,
          PipeModuleModule,
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
          }),
        ],
        providers: [
          SendInformationService,
          CriptoService,
          CatalogoService,
          FilesPipe
        ]
      })
      .compileComponents();

    fixture = TestBed.createComponent(Byc0010Component);
    component = fixture.componentInstance;
    component.payload = {
      canal: "21",
      lenguaje: "ES",
      modulo: "PROFIL",
      pais: "CO",
      token: "XXXXXXXXXXXXXXXXXXXX",
      userId: "abcd-12345-fghij-12",
      empresa: {
        nombre: "Empresas ABC",
        tipoDocumento: "NIT",
        numeroDocumento: "8011052803"
      },
      representanteLegal: {
        nombre: "Ruben Blades",
        tipoDocumento: "CC",
        numeroDocumento: "801105280"
      }
    };
    component.obser = TestBed.inject(SendInformationService);
    spyOn(component.obser, 'unSubscribe').and.returnValue();
    component['cdr'] = fixture.debugElement.injector.get(ChangeDetectorRef);
    //
    spyOn(TestBed.inject(GtmService), 'createGtm').and.callFake(() => { });
    window.dataLayer = { push: () => { } };
    //
    component.catalogo = TestBed.inject(CatalogoService);
    const dt = new BehaviorSubject<any>(['payload']) as unknown;
    component.obser.data = dt as any;
    const params = { limit: -1, modulo: undefined, pais: undefined, lenguaje: undefined, canal: undefined, kind: undefined };
    spyOn(component.obser, 'sendData').and.callFake(() => { of(['abcd']); });
    spyOn(component.catalogo, 'data').and.returnValues(of(catProfil));
    // Forms eliminados toDo validar si son necesarios
    component.obser = TestBed.inject(SendInformationService);
    component.catalogo = TestBed.inject(CatalogoService);
    component.postMessageService = TestBed.inject(PostMessagesService);
    component.gtmService = TestBed.inject(GtmService);

    spyOn(component.postMessageService, 'getAndSendPostMessages').and.returnValue();
    spyOn(component.postMessageService, 'callPostMessage').and.returnValue();
    window.dataLayer = { push: () => {} };
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

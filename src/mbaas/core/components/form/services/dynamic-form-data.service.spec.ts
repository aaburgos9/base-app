import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DynamicFormDataService } from './dynamic-form-data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from 'src/mbaas/core/service/authentication/auth.service';

describe('DynamicFormDataService', () => {
  let sanitizer: DomSanitizer;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      RouterTestingModule,
      JwtModule.forRoot({
        config: {
            tokenGetter: () => {
              return localStorage.getItem('token');
            },
            allowedDomains: ['.*']
        }
      })
    ],
    providers: [DynamicFormDataService, {
      provide: DomSanitizer,
      useValue: {
        sanitize: () => 'safeString',
        bypassSecurityTrustUrl: () => 'safeString'
      }
    }, AuthService]
  }));

  beforeEach(() => {
    sanitizer = TestBed.inject(DomSanitizer);
  });

  it('should be created', () => {
    const service: DynamicFormDataService = TestBed.inject(DynamicFormDataService);
    expect(service).toBeTruthy();
  });
});

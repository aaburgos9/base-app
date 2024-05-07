import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FieldConfig } from './../../models/field-config.interface';
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';
import { FormRadioComponent } from './form-radio.component';
import { DirectiveModule } from '../../directives/directive.module';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtModule } from '@auth0/angular-jwt';
import { DirectivesModule } from 'src/mbaas/core/directives/directives.mudule';

describe('FormRadioComponent', () => {
  let component: FormRadioComponent;
  let fixture: ComponentFixture<FormRadioComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  const fieldConfig: FieldConfig = { name: 'name', seeMoreText: {more: '', less: ''} };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        DirectiveModule,
        HttpClientTestingModule,
        RouterTestingModule,
        DirectivesModule,
        JwtModule.forRoot({
          config: {
            tokenGetter: () => {
              return localStorage.getItem('token');
            },
            allowedDomains: ['.*']
          }
        })
      ],
      declarations: [ FormRadioComponent ],
      providers: [HttpClientTestingModule, {
        provide: FormBuilder,
        useValue: formBuilder
      }]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRadioComponent);
    component = fixture.componentInstance;
    component.group = formBuilder.group({ name: new FormControl('') });
    component.config = fieldConfig;
    component.ngOnInit();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('test formControl private defined', () => {
    let spyformcontrol = spyOn<any>(component, 'formControl');
    component.ngOnInit();
    expect(spyformcontrol).toBeDefined();
  });

  it('test for toogle text see more true', () => {
    component.seeMore = true;
    component.toogleText();
    expect(component).toBeTruthy();
  });

  it('test for toogle text see more false', () => {
    component.seeMore = false;
    component.toogleText();
    expect(component).toBeTruthy();
  })
});

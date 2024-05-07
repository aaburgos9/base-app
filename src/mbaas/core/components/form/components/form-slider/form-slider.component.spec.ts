import { FieldConfig } from './../../models/field-config.interface';
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormSliderComponent } from './form-slider.component';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';
import { style } from '@angular/animations';
import { DirectivesModule } from 'src/mbaas/core/directives/directives.mudule';

describe('FormSliderComponent', () => {
  let component: FormSliderComponent;
  let fixture: ComponentFixture<FormSliderComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  const fielConfig = {
    value: '1',
    name: 'name',
    functions: {
      setValue: '1-1-1-1'
    },
    setValue: () => { }
  } as unknown as FieldConfig;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        DirectivesModule
      ],
      declarations: [FormSliderComponent],
      providers: [{ provide: FormBuilder, useValue: formBuilder }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSliderComponent);
    component = fixture.componentInstance;
    component.group = formBuilder.group({ name: new FormControl('') });
    component.config = fielConfig;
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('test for ngOnInit value null ', () => {
    component.ngOnInit();
    component.config = {
      value: undefined,
      name: 'name',
      functions: {
        setValue: '1-1-1-1'
      },
      setValue: () => { }
    } as unknown as FieldConfig;
    expect(component).toBeTruthy();
  });

  it('test for rangeElement > 0', () => {
    component.range = 100;
    component.rangeElement = {
      nativeElement: {
        min: 10,
        max: 10,
        offsetWidth: 10
      }
    };
    component.bubble = {
      nativeElement: {
        style: {
          left: 20,
          marginLeft: 10
        }
      }
    };
    component.modifyOffset();
    expect(component).toBeTruthy();
  });

  it('test for rangeElement <= 0', () => {
    component.range = 0;
    component.rangeElement = {
      nativeElement: {
        min: 0,
        max: 0,
        offsetWidth: 0
      }
    };
    component.bubble = {
      nativeElement: {
        style: {
          left: 0,
          marginLeft: 0
        }
      }
    };
    component.modifyOffset();
    expect(component).toBeTruthy();
  });

  afterAll(() => {
    TestBed.resetTestingModule();
  });
});

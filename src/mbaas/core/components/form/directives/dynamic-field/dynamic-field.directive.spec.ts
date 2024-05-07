import { DynamicFieldDirective } from './dynamic-field.directive';

import { FormBuilder } from '@angular/forms';
import { FormTypes } from '../../config/form-config';


describe('DynamicFieldDirective', () => {

  it('should create an instance 1', () => {
    let directive: DynamicFieldDirective;
    const formBuilder: FormBuilder = new FormBuilder();
    directive = new DynamicFieldDirective(null, null);
    directive.config = {
      type: FormTypes.date,
      name: 'fechaNacimiento',
      label: '¿Cuál es su fecha de nacimiento?',
      children: [
        {
          placeholder: 'DD',
          name: 'dia'
        },
        {
          placeholder: 'MM',
          name: 'mes'
        },
        {
          placeholder: 'YY',
          name: 'anio'
        }
      ],
    };
    directive.group = formBuilder.group({ name: 'Name' });
    expect(directive).toBeTruthy();
  });

});

import { FormField } from '@core/types/form-builder.model';
import { Validators } from '@angular/forms';

export const folderFormConfig: FormField[] = [
  {
    key: 'name',
    label: 'NAME',
    componentType: 'textbox',
    inputType: 'text',
    validators: [Validators.required],
    placeholder: 'ENTER',
    maxLength: 500,
  },
  {
    key: 'description',
    label: 'DESCRIPTION',
    componentType: 'textbox',
    inputType: 'textarea',
    styleConfig: { height: '150px' },
    validators: [Validators.required],
    placeholder: 'ENTER',
    maxLength: 500,
  },
];

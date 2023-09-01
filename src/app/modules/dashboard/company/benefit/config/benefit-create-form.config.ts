import { FormField } from '@core/types/form-builder.model';
import { Validators } from '@angular/forms';

export const benefitCreateFormConfig: FormField[] = [
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
  {
    key: 'grade_category',
    label: 'GRADE_CATEGORY',
    componentType: 'dropdown',
    inputType: 'textarea',
    data: [
      { displayName: 'Some value', value: '  ' },
      { displayName: 'Looooooooooooooooooooooong text', value: '  ' },
      {
        displayName: 'Looooooooooooooooooooooong text too',
        value: '  ',
      },
    ],
    styleConfig: { height: '150px' },
    validators: [Validators.required],
    placeholder: 'SELECT',
    maxLength: 500,
  },
];

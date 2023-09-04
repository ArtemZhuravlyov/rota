import { FormFieldEntry } from '@shared/components/form/types/form-field-entryl.type';
import { FormFiledTypeName } from '@shared/components/form/types/form-filed-type-name';
import { CustomValidators } from '@shared/utils/custom-validators/custom-validators';
import { TranslateKey } from '../../../../../../assets/i18n/enums/translate-key.enum';

export const benefitCreateFormConfig: FormFieldEntry[] = [
  {
    type: FormFiledTypeName.INPUT,
    key: 'name',
    validators: [
      CustomValidators.required,
      CustomValidators.excludeSymbolsValidator({
        symbols: ['`'],
      }),
    ],
    config: {
      inputType: 'text',
      styleConfig: {
        width: '480px',
        height: '52px',
      },
      label: TranslateKey.NAME,
      maxLength: 100,
      placeholder: 'ENTER',
      value: '',
      readonly: false,
      excludeSymbols: ['`'],
    },
  },
  {
    type: FormFiledTypeName.TEXTAREA,
    key: 'description',
    validators: [
      CustomValidators.required,
      CustomValidators.excludeSymbolsValidator({
        symbols: ['`'],
      }),
    ],
    config: {
      styleConfig: {
        width: '480px',
        height: '100px',
      },
      label: TranslateKey.DESCRIPTION,
      maxLength: 500,
      placeholder: 'ENTER',
      value: '',
      readonly: false,
      excludeSymbols: ['`'],
    },
  },
  {
    type: FormFiledTypeName.DROPDOWN,
    key: 'gradeCategory',
    validators: [CustomValidators.required],
    config: {
      label: TranslateKey.GRADE_CATEGORY,
      filtered: true,
      styleConfig: { width: '480px', height: '52px' },
      data: [],
      value: null,
      placeholder: 'SELECT',
      idField: 'id',
      nameField: 'name',
    },
  },
];

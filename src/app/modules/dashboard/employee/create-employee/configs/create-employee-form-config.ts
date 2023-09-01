import {
  DropdownFiled,
  FormFieldEntry,
} from '@shared/components/form/types/form-field-entryl.type';
import { FormFiledTypeName } from '@shared/components/form/types/form-filed-type-name';
import { CustomValidators } from '@shared/utils/custom-validators/custom-validators';
import { TranslateKey } from '../../../../../../assets/i18n/enums/translate-key.enum';

export const createEmployeeFormConfig: FormFieldEntry[] = [
  {
    type: FormFiledTypeName.INPUT,
    key: 'firstName',
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
      label: TranslateKey.FIRST_NAME,
      maxLength: 100,
      placeholder: 'ENTER',
      value: '',
      readonly: false,
      excludeSymbols: ['`'],
    },
  },
  {
    type: FormFiledTypeName.INPUT,
    key: 'middleName',
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
      label: TranslateKey.MIDDLE_NAME,
      maxLength: 100,
      placeholder: 'ENTER',
      value: '',
      readonly: false,
      excludeSymbols: ['`'],
    },
  },
  {
    type: FormFiledTypeName.INPUT,
    key: 'lastName',
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
      label: TranslateKey.LAST_NAME,
      maxLength: 100,
      placeholder: 'ENTER',
      value: '',
      readonly: false,
      excludeSymbols: ['`'],
    },
  },
  {
    type: FormFiledTypeName.DATEPICKER,
    key: 'dob',
    validators: [CustomValidators.required],
    config: {
      label: TranslateKey.DATE_OF_BIRTH,
      styleConfig: { width: '480px', height: '52px' },
      placeholder: 'dd/mm/yyyy',
      value: null,
    },
  },
  {
    type: FormFiledTypeName.DROPDOWN,
    key: 'gender',
    validators: [CustomValidators.required],
    config: {
      label: TranslateKey.GENDER,
      filtered: true,
      styleConfig: { width: '480px', height: '52px' },
      data: [],
      value: null,
      placeholder: 'SELECT',
      idField: 'id',
      nameField: 'name',
    },
  },
  {
    type: FormFiledTypeName.DROPDOWN,
    key: 'maritalStatus',
    validators: [CustomValidators.required],
    config: {
      label: TranslateKey.MARITAL_STATUS,
      filtered: true,
      styleConfig: { width: '480px', height: '52px' },
      data: [],
      value: null,
      placeholder: 'SELECT',
      idField: 'id',
      nameField: 'name',
    },
  },
  // {
  //   key: 'numberOfChildren',
  //   label: 'NUMBER_OF_CHILDREN',
  //   componentType: ComponentTypeEnum.TEXTBOX,
  //   inputType: 'text',
  //   validators: [Validators.required],
  //   placeholder: 'ENTER',
  //   dataType: 'number',
  //   maxLength: 500,
  // },
  {
    type: FormFiledTypeName.INPUT,
    key: 'placeOfBirth',
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
      label: TranslateKey.PLACE_OF_BIRTH,
      maxLength: 100,
      placeholder: 'ENTER',
      value: '',
      readonly: false,
      excludeSymbols: ['`'],
    },
  },
  // {
  //   key: 'nationalityId',
  //   label: 'NATIONALITY',
  //   componentType: ComponentTypeEnum.DROPDOWN,
  //   validators: [Validators.required],
  //   placeholder: 'SELECT',
  //   maxLength: 500,
  // },
  {
    type: FormFiledTypeName.DROPDOWN,
    key: 'countryOfBirth',
    validators: [CustomValidators.required],
    config: {
      label: TranslateKey.COUNTRY_OF_BIRTH,
      filtered: true,
      styleConfig: { width: '480px', height: '52px' },
      data: [],
      value: null,
      placeholder: 'SELECT',
      idField: 'id',
      nameField: 'name',
      imgSrcFiled: 'countryFlag',
    },
  },
  // {
  //   key: 'nationalIdentificationNumber',
  //   label: 'NATIONAL_ID',
  //   componentType: ComponentTypeEnum.TEXTBOX,
  //   inputType: 'text',
  //   validators: [Validators.required],
  //   placeholder: 'ENTER',
  //   hintMenu: true,
  //   maxLength: 500,
  //   hintHeading: 'WHAT_IS_NATIONAL_ID',
  //   hintDescription: 'NATIONAL_IDENTIFICATION_NUMBER_DESCRIPTION',
  // },
  // {
  //   key: 'passportNumber',
  //   label: 'PASSPORT_NUMBER',
  //   componentType: ComponentTypeEnum.TEXTBOX,
  //   inputType: 'text',
  //   validators: [Validators.required],
  //   placeholder: 'ENTER',
  //   maxLength: 500,
  //   hintMenu: true,
  //   hintHeading: 'PASSPORT_NUMBER',
  //   hintDescription: 'PASSPORT_NUMBER_DESCRIPTION',
  // },
  // {
  //   key: 'email',
  //   label: 'EMAIL',
  //   componentType: ComponentTypeEnum.TEXTBOX,
  //   inputType: 'text',
  //   validators: [Validators.required],
  //   placeholder: 'ENTER_EMAIL',
  //   icon: 'mail',
  //   maxLength: 500,
  // },
  // {
  //   key: 'phoneNumber',
  //   label: 'PHONE_NUMBER',
  //   componentType: ComponentTypeEnum.PHONE,
  //   validators: [Validators.required],
  //   placeholder: 'SELECT_FORMAT',
  //   icon: 'phone_iphone',
  //   maxLength: 500,
  // },
];

export const isDropdown = (
  field: FormFieldEntry
): field is DropdownFiled => {
  return field.type === FormFiledTypeName.DROPDOWN;
};

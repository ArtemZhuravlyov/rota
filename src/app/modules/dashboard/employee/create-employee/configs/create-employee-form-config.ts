import {FormField} from "@core/types/form-builder.model";
import {Validators} from "@angular/forms";
import {ComponentTypeEnum} from "@core/enums/component-type.enum";

export const createEmployeeFormConfig: FormField[] = [
  {
    heading: 'PERSONAL_DETAILS',
    key: 'firstName',
    label: 'FIRST_NAME',
    componentType: ComponentTypeEnum.TEXTBOX,
    inputType: 'text',
    validators: [Validators.required],
    placeholder: 'ENTER',
    maxLength: 500,
  },
  {
    key: 'middleName',
    label: 'MIDDLE_NAME',
    componentType: ComponentTypeEnum.TEXTBOX,
    inputType: 'text',
    validators: [Validators.required],
    placeholder: 'ENTER',
    maxLength: 500,
  },
  {
    key: 'lastName',
    label: 'LAST_NAME',
    componentType: ComponentTypeEnum.TEXTBOX,
    inputType: 'text',
    validators: [Validators.required],
    placeholder: 'ENTER',
    maxLength: 500
  },
  {
    key: 'dob',
    label: 'DATE_OF_BIRTH',
    componentType: ComponentTypeEnum.DATEPICKER,
    inputType: 'text',
    validators: [Validators.required],
    placeholder: 'dd/mm/yyyy',
    maxLength: 500
  },
  {
    key: 'gender',
    label: 'GENDER',
    componentType: ComponentTypeEnum.DROPDOWN,
    validators: [Validators.required],
    placeholder: 'SELECT',
    maxLength: 500
  },
  {
    key: 'maritalStatus',
    label: 'MARITAL_STATUS',
    componentType: ComponentTypeEnum.DROPDOWN,
    validators: [Validators.required],
    placeholder: 'SELECT',
    maxLength: 500
  },
  {
    key: 'numberOfChildren',
    label: 'NUMBER_OF_CHILDREN',
    componentType: ComponentTypeEnum.TEXTBOX,
    inputType: 'text',
    validators: [Validators.required],
    placeholder: 'ENTER',
    dataType: 'number',
    maxLength: 500,
  },
  {
    key: 'placeOfBirth',
    label: 'PLACE_OF_BIRTH',
    componentType: ComponentTypeEnum.TEXTBOX,
    inputType: 'text',
    validators: [Validators.required],
    placeholder: 'ENTER',
    maxLength: 500
  },
  {
    key: 'nationalityId',
    label: 'NATIONALITY',
    componentType: ComponentTypeEnum.DROPDOWN,
    validators: [Validators.required],
    placeholder: 'SELECT',
    maxLength: 500
  },
  {
    key: 'countryOfBirth',
    label: 'COUNTRY_OF_BIRTH',
    componentType: ComponentTypeEnum.DROPDOWN,
    validators: [Validators.required],
    placeholder: 'SELECT',
    maxLength: 500
  },
  {
    key: 'nationalIdentificationNumber',
    label: 'NATIONAL_ID',
    componentType: ComponentTypeEnum.TEXTBOX,
    inputType: 'text',
    validators: [Validators.required],
    placeholder: 'ENTER',
    hintMenu: true,
    maxLength: 500,
    hintHeading: 'WHAT_IS_NATIONAL_ID',
    hintDescription: 'NATIONAL_IDENTIFICATION_NUMBER_DESCRIPTION',
  },
  {
    key: 'passportNumber',
    label: 'PASSPORT_NUMBER',
    componentType: ComponentTypeEnum.TEXTBOX,
    inputType: 'text',
    validators: [Validators.required],
    placeholder: 'ENTER',
    maxLength: 500,
    hintMenu: true,
    hintHeading: 'PASSPORT_NUMBER',
    hintDescription: 'PASSPORT_NUMBER_DESCRIPTION',
  },
  {
    key: 'email',
    label: 'EMAIL',
    componentType: ComponentTypeEnum.TEXTBOX,
    inputType: 'text',
    validators: [Validators.required],
    placeholder: 'ENTER_EMAIL',
    icon: 'mail',
    maxLength: 500
  },
  {
    key: 'phoneNumber',
    label: 'PHONE_NUMBER',
    componentType: ComponentTypeEnum.PHONE,
    validators: [Validators.required],
    placeholder: 'SELECT_FORMAT',
    icon: 'phone_iphone',
    maxLength: 500
  },
];

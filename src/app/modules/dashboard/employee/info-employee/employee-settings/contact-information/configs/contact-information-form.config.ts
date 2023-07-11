import {FormField} from "@core/types/form-builder.model";
import {Validators} from "@angular/forms";
import {ComponentTypeEnum} from "@core/enums/component-type.enum";

export const residentialAddressFormFields: FormField[] = [
  {
    key: 'address',
    label: 'HOME_ADDRESS',
    componentType: ComponentTypeEnum.TEXTBOX,
    inputType: 'text',
    validators: [Validators.required],
    placeholder: 'ENTER',
    maxLength: 500,
  },
  {
    key: 'state',
    label: 'STATE',
    componentType: ComponentTypeEnum.DROPDOWN,
    validators: [Validators.required],
    placeholder: 'SELECT',
    maxLength: 500,
  },
  {
    key: 'country',
    label: 'COUNTRY',
    componentType: ComponentTypeEnum.DROPDOWN,
    validators: [Validators.required],
    placeholder: 'SELECT',
    maxLength: 500,
  },
  {
    key: 'post',
    label: 'POST_CODE',
    componentType: ComponentTypeEnum.TEXTBOX,
    inputType: 'text',
    validators: [Validators.required],
    placeholder: 'ENTER',
    maxLength: 500,
  },
];

export const emergencyContactFormFields: FormField[] = [
  {
    key: 'name',
    label: 'NAME',
    componentType: ComponentTypeEnum.TEXTBOX,
    inputType: 'text',
    validators: [Validators.required],
    placeholder: 'ENTER',
    maxLength: 500,
  },
  {
    key: 'email',
    label: 'ENTER',
    componentType: ComponentTypeEnum.TEXTBOX,
    inputType: 'text',
    validators: [Validators.required],
    placeholder: 'ENTER_EMAIL',
    icon: 'mail',
    maxLength: 500,
  },
  {
    key: 'address',
    label: 'ADDRESS',
    componentType: ComponentTypeEnum.TEXTBOX,
    inputType: 'text',
    validators: [Validators.required],
    placeholder: 'ENTER',
    maxLength: 500,
  },
  {
    key: 'phone',
    label: 'PHONE_NUMBER',
    componentType: ComponentTypeEnum.PHONE,
    validators: [Validators.required],
    placeholder: 'SELECT_FORMAT',
    icon: 'phone_iphone',
    maxLength: 500,
  },
];

export const nextOfKinFormFields: FormField[] = [
  {
    key: 'name',
    label: 'NAME',
    componentType: ComponentTypeEnum.TEXTBOX,
    inputType: 'text',
    validators: [Validators.required],
    placeholder: 'ENTER',
    maxLength: 500,
  },
  {
    key: 'email',
    label: 'EMAIL',
    componentType: ComponentTypeEnum.TEXTBOX,
    inputType: 'text',
    validators: [Validators.required],
    placeholder: 'ENTER_EMAIL',
    icon: 'mail',
    maxLength: 500,
  },
  {
    key: 'relationship',
    label: 'RELATIONSHIP',
    componentType: ComponentTypeEnum.DROPDOWN,
    validators: [Validators.required],
    placeholder: 'SELECT',
    maxLength: 500,
  },
  {
    key: 'address',
    label: 'ADDRESS',
    componentType: ComponentTypeEnum.TEXTBOX,
    inputType: 'text',
    validators: [Validators.required],
    placeholder: 'ENTER',
    maxLength: 500,
  },
  {
    key: 'phone',
    label: 'PHONE_NUMBER',
    componentType: ComponentTypeEnum.PHONE,
    validators: [Validators.required],
    placeholder: 'SELECT_FORMAT',
    icon: 'phone_iphone',
    maxLength: 500,
  },
];


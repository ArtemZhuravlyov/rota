import { ComponentTypeEnum } from '../enums/component-type.enum';
import { ValidatorFn } from '@angular/forms';

export interface FormField {
  key: string;
  additionalTitle?: string;
  label?: string;
  componentType: ComponentType;
  data?: any;
  placeholder?: string;
  inputType?: InputType;
  validators?: ValidatorFn[];
  formValidators?: ValidatorFn[];
  icon?: string;
  hint?: string;
  hintLink?: string | string[];
  maxLength?: number;
  styleConfig?: { [key: string]: string };
  extendedValidation?: boolean;
  checkbox?: boolean;
  heading?: string;
  maxFile?: string;
  hintMenu?: boolean;
  hintHeading?: string;
  hintDescription?: string;
  toggleText?: string;
  disabled?: boolean;
  preSelectedValue?: any;
  button?: string;
  dataType?: DataType;
}

export type ComponentType =
  (typeof ComponentTypeEnum)[keyof typeof ComponentTypeEnum];

export type InputType = 'email' | 'text' | 'password' | 'textarea';

export type DropdownOptions = Record<string, string | number>;

export type DataType = 'number';

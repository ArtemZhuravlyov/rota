import { ComponentTypeEnum } from "../enums/component-type.enum";
import { ValidatorFn } from "@angular/forms";

export interface FormField {
  key: string;
  label: string;
  componentType: ComponentType;
  data?: any;
  placeholder?: string;
  inputType?: InputType;
  validators?: ValidatorFn[];
  formValidators?: ValidatorFn[];
  icon?: string;
  hint?: string;
  hintLink?: string;
  maxLength?: number;
  styleConfig?:  { [key: string]: string };
  extendedValidation?: boolean;
}

export type ComponentType = typeof ComponentTypeEnum[keyof typeof ComponentTypeEnum];

export type InputType = 'email' | 'text' | 'password' | 'textarea';

export type DropdownOptions = Record<string, string | number>;


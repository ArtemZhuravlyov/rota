import { ComponentTypeEnum } from "../enums/component-type.enum";
import { ValidatorFn } from "@angular/forms";

export interface FormField {
  key: string;
  label: string;
  componentType: ComponentType;
  inputType?: InputType;
  validators?: ValidatorFn[];
  formValidators?: ValidatorFn[];
}

export type ComponentType = typeof ComponentTypeEnum[keyof typeof ComponentTypeEnum];

type InputType = 'email' | 'text' | 'password';

export type FormData = any;// Record<string, number | string | boolean | { [key: string]: string | DropdownOptions[] }> | undefined;

export type DropdownOptions = { displayName: string; value: string | number };

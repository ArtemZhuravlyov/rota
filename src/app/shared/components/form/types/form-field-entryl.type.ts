import { FormFiledTypeName } from '@shared/components/form/types/form-filed-type-name';
import { InputType } from '@core/types/form-builder.model';
import { Style } from '@core/types/style-model';
import { TranslateKey } from '../../../../../assets/i18n/enums/translate-key.enum';
import { ValidatorFn } from '@angular/forms';
import { CValidatorFn } from '@shared/utils/custom-validators/types/custom-validator.type';

export type FormFieldEntry =
  | {
      type: FormFiledTypeName.INPUT;
      config: InputFormFieldConfig & CommonFieldConfigs;
      key: string;
      validators?: ValidatorFn[] | CValidatorFn[];
    }
  | {
      type: FormFiledTypeName.TEXTAREA;
      config: TextareaFormFieldConfig & CommonFieldConfigs;
      key: string;
      validators?: ValidatorFn[] | CValidatorFn[];
    }
  | {
      type: FormFiledTypeName.PASSWORD;
      config: PasswordFormFieldConfig & CommonFieldConfigs;
      key: string;
      validators?: ValidatorFn[] | CValidatorFn[];
    }
  | {
      type: FormFiledTypeName.DROPDOWN;
      config: DropdownFormFieldConfig & CommonFieldConfigs;
      key: string;
      validators?: ValidatorFn[] | CValidatorFn[];
    };

export interface CommonFieldConfigs {
  styleConfig: Style;
}
export interface InputFormFieldConfig {
  label: keyof typeof TranslateKey;
  inputType: InputType;
  placeholder: string;
  maxLength: number;
  value: string;
  readonly: boolean;
  excludeSymbols: string[];
}

export interface PasswordFormFieldConfig {
  label: keyof typeof TranslateKey;
  placeholder: string;
  maxLength: number;
  value: string;
  readonly: boolean;
  excludeSymbols: string[];
}

export interface TextareaFormFieldConfig {
  label: keyof typeof TranslateKey;
  placeholder: string;
  maxLength: number;
  value: string;
  readonly: boolean;
  excludeSymbols: string[];
}

export interface DropdownFormFieldConfig {
  data: any[];
  value: any;
  placeholder: string;
  idField: string;
  nameField: string;
}

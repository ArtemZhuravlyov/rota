import { AbstractControl } from '@angular/forms';

export enum Errors {
  EMAIL = 'email',
  EXCLUDE_SYMBOLS = 'excludeSymbols',
  MUST_MATCH = 'mustMatch',
  LOGIN_PASSWORD_ERROR = 'loginPasswordError',
  REGISTER_PASSWORD_ERROR = 'registerPasswordError',
  REQUIRED = 'required',
  COMPARE_FIELDS = 'compareFields',
}

export type CValidationErrors = {
  [key in Errors]?: boolean;
};

export interface CValidatorFn {
  (control: AbstractControl): CValidationErrors | null;
}

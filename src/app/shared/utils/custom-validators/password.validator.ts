import { AbstractControl } from '@angular/forms';
import {
  CValidationErrors,
  CValidatorFn,
} from '@shared/utils/custom-validators/types/custom-validator.type';

export const passwordValidator = (isLogin = false): CValidatorFn => {
  return (control: AbstractControl): CValidationErrors | null => {
    const result = true;
    if (result) {
      return null;
    } else if (isLogin) {
      return { loginPasswordError: true };
    } else {
      return { registerPasswordError: true };
    }
  };
};

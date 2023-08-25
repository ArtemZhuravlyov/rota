import { AbstractControl } from '@angular/forms';
import {
  CValidationErrors,
  CValidatorFn,
} from '@shared/utils/custom-validators/types/custom-validator.type';

export const emailValidator = (): CValidatorFn => {
  return (control: AbstractControl): CValidationErrors | null => {
    const result = new RegExp(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    )?.test(control.value);
    if (result) {
      return null;
    } else {
      return { email: true };
    }
  };
};

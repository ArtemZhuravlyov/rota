import {
  CValidationErrors,
  CValidatorFn,
} from '@shared/utils/custom-validators/types/custom-validator.type';

export const matchFieldsValueValidator = (
  controlName: string,
  matchingControlName: string
): CValidatorFn => {
  return (formGroup: any): CValidationErrors | null => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (control.value === matchingControl.value) {
      return null;
    } else {
      matchingControl.setErrors({ mustMatch: true });
      return { mustMatch: true };
    }
  };
};

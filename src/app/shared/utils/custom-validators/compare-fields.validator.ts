import { AbstractControl } from '@angular/forms';
import {
  CValidationErrors,
  CValidatorFn,
} from '@shared/utils/custom-validators/types/custom-validator.type';

export function compareFieldsValidator(
  initialObject: any
): CValidatorFn {
  return (control: AbstractControl): CValidationErrors | null => {
    const fieldNames = Object.keys(initialObject);
    const areFieldsDifferent = fieldNames.some(fieldName => {
      const controlValue = control.get(fieldName)?.value;
      const initialValue = initialObject[fieldName];
      return controlValue !== initialValue;
    });

    if (areFieldsDifferent) {
      return null;
    }

    return { compareFields: true };
  };
}

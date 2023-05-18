import { ValidationErrors, ValidatorFn } from "@angular/forms";

export const matchFieldsValue = (controlName: string, matchingControlName: string): ValidatorFn => {
  return (formGroup: any): ValidationErrors | null => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (control.value === matchingControl.value) {
      return null;
    } else {
      formGroup.controls[matchingControlName].setErrors({ mustMath: 'Error' })
      return { mustMatch: true };
    }
  }
}
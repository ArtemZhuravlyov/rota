import { ValidationErrors, ValidatorFn } from "@angular/forms";

export const matchFields = (controlName: string, matchingControlName: string): ValidatorFn => {
  return (formGroup: any): ValidationErrors => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (control.value === matchingControl.value) {
      return { mustMatch: false };
    } else {
      return { mustMatch: true };
    }
  }
}

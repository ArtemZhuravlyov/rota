import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const emailValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const result = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)?.test(control.value);
    if (result) {
      return null;
    } else {
      return { email: true };
    }
  }
}

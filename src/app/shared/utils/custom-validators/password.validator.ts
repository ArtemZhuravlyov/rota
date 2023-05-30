import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordValidator = (isLogin: boolean = false): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const result = new RegExp(/^(?=.{6,})(?=.*[a-zA-Z])(?=.*[!#$%&?])/)?.test(control.value);
    if (result) {
      return null;
    } else if (isLogin) {
      return { loginPasswordError: true };
    } else {
      return { registerPasswordError: true };
    }
  }
}

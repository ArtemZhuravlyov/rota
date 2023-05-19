import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const excludeSymbols = (symbols: string[], flags?: string): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const reg = new RegExp('[' +
      symbols
        .map(s => s.replace(/[()[\]{}*+?^$|#.,\/\\\s-]/g, "\\$&"))
        .join("")
      + ']',
      flags
    );

    const result = (control.value as string).match(reg);

    if (!result) {
      return null;
    } else {
      return { excludeSymbols: true };
    }
  }
}

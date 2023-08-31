import { AbstractControl } from '@angular/forms';
import {
  CValidationErrors,
  CValidatorFn,
} from '@shared/utils/custom-validators/types/custom-validator.type';

export const excludeSymbolsValidator = ({
  symbols,
  flags,
}: {
  symbols: string[];
  flags?: string;
}): CValidatorFn => {
  return (control: AbstractControl): CValidationErrors | null => {
    const reg = new RegExp(
      '[' +
        symbols
          .map(s => s.replace(/[()[\]{}*+?^$|#.,/\\\s-]/g, '\\$&'))
          .join('') +
        ']',
      flags
    );

    const result = (control.value as string)?.match(reg);

    if (!result) {
      return null;
    } else {
      return { excludeSymbols: true };
    }
  };
};

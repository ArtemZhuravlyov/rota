import { Validators } from '@angular/forms';
import { emailValidator } from '@shared/utils/custom-validators/email.validator';
import { excludeSymbolsValidator } from '@shared/utils/custom-validators/exclude-symbols.validator';
import { matchFieldsValueValidator } from '@shared/utils/custom-validators/match-fields-value.validator';
import { passwordValidator } from '@shared/utils/custom-validators/password.validator';
import { compareFieldsValidator } from '@shared/utils/custom-validators/compare-fields.validator';

export class CustomValidators extends Validators {
  static emailValidator = emailValidator;
  static excludeSymbolsValidator = excludeSymbolsValidator;
  static matchFieldsValueValidator = matchFieldsValueValidator;
  static passwordValidator = passwordValidator;
  static compareFieldsValidator = compareFieldsValidator;
}

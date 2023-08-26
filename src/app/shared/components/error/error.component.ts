import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateKey } from '../../../../assets/i18n/enums/translate-key.enum';
import {
  CValidationErrors,
  Errors,
} from '@shared/utils/custom-validators/types/custom-validator.type';
import { TranslateModule } from '@ngx-translate/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent {
  @Input() errors: CValidationErrors | ValidationErrors | null = null;

  protected readonly REGISTER_PASSWORD_ERROR_SHORT =
    TranslateKey.REGISTER_PASSWORD_ERROR_SHORT;
  protected readonly REGISTER_PASSWORD_ERROR =
    TranslateKey.REGISTER_PASSWORD_ERROR;
  protected readonly LOGIN_PASSWORD_ERROR =
    TranslateKey.LOGIN_PASSWORD_ERROR;
  protected readonly EMAIL_ERROR = TranslateKey.EMAIL_ERROR;
  protected readonly REPEAT_PASSWORD_ERROR =
    TranslateKey.REPEAT_PASSWORD_ERROR;
  protected readonly SYMBOL_ERROR = TranslateKey.SYMBOL_ERROR;

  getError(errorName: Errors) {
    if (!this.errors) return;
    return Object.hasOwn(this.errors, errorName);
  }

  protected readonly Errors = Errors;
}

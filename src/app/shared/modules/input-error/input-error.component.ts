import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { TranslateKey } from '../../../../assets/i18n/enums/translate-key.enum';

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputErrorComponent {
  @Input() errors!: Record<string, boolean | string>;

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

  hasOwnPropertyInError(key: string): boolean {
    return Object(this.errors).hasOwnProperty(key);
  }
}

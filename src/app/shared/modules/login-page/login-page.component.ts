import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { TranslateKey } from '../../../../assets/i18n/enums/translate-key.enum';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  protected readonly TERMS_OF_SERVICE = TranslateKey.TERMS_OF_SERVICE;
  protected readonly COPYRIGHT = TranslateKey.COPYRIGHT;
  protected readonly PRIVACY_POLICY = TranslateKey.PRIVACY_POLICY;

  @Input() imgUrl!: string;
  @Input() subtitle: keyof typeof TranslateKey = TranslateKey.EMPTY;
  @Input() title: keyof typeof TranslateKey = TranslateKey.EMPTY;
  @Input() logoInformation!: string;
  @Input() redirectRoute: string[] | string | null = null;
  @Input() redirectText = '';
  @Input() isLogoPositionTop = false;
}

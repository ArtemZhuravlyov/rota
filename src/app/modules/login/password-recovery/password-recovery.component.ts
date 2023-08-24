import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImageUrl } from '@core/enums/image-url';
import { FormField } from '@core/types/form-builder.model';
import { FormGroup, Validators } from '@angular/forms';
import { AccountService } from '@core/services/account/account.service';
import { Router } from '@angular/router';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { emailValidator } from '@shared/utils/custom-validators/email.validator';
import { TranslateKey } from '../../../../assets/i18n/enums/translate-key.enum';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordRecoveryComponent {
  title = TranslateKey.FORGOT_PASSWORD;
  subtitle = TranslateKey.PLEASE_ENTER_YOUR_EMAIL;
  logoInformation =
    'Slogan of your company goes right underneath the logo, this is just a placeholder text.';
  imgUrl = ImageUrl.RECOVERY_PASSWORD;

  formFields: FormField[] = [
    {
      key: 'email',
      label: 'EMAIL',
      placeholder: 'ENTER_EMAIL',
      componentType: 'textbox',
      validators: [Validators.required, emailValidator()],
      icon: 'mail',
      extendedValidation: true,
    },
  ];

  form!: FormGroup;

  constructor(
    private accountService: AccountService,
    private route: Router
  ) {}

  onSubmit(): void {
    this.form.disable();
    this.accountService.passwordRecovery(this.form.value).subscribe({
      complete: () => {
        this.route.navigate([
          NavigationPaths.LOGIN,
          NavigationPaths.PASSWORD_RECOVERY_SUCCESS,
        ]);
      },
      error: () => this.form.enable(),
    });
  }
}

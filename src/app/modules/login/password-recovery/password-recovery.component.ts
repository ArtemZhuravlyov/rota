import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImageUrl } from "@core/enums/image-url";
import { FormField } from "@core/types/form-builder.model";
import { FormGroup, Validators } from "@angular/forms";
import { AccountService } from "@core/services/account/account.service";
import { Router } from "@angular/router";
import { NavigationPaths } from "@core/enums/navigation-paths.enum";

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordRecoveryComponent {
  title = 'FORGOT_PASSWORD';
  subtitle = 'PLEASE_ENTER_YOUR_EMAIL';
  logoInformation = 'Slogan of your company goes right underneath the logo, this is just a placeholder text.';
  imgUrl = ImageUrl.RECOVERY_PASSWORD;

  formFields: FormField[] = [
    {
      key: 'email',
      label: 'EMAIL',
      placeholder: 'ENTER_EMAIL',
      componentType: 'textbox',
      validators: [Validators.required, Validators.email]
    }
  ]

  form!: FormGroup;

  constructor(
    private accountService: AccountService,
    private route: Router,
    ) {
  }

  onSubmit(): void {
    this.accountService.passwordRecovery(this.form.value).subscribe(() => {
      this.route.navigate([NavigationPaths.LOGIN, NavigationPaths.PASSWORD_RECOVERY_SUCCESS]);
    })
  }
}

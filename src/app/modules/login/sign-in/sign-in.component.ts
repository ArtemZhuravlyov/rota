import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImageUrl } from "@core/enums/image-url";
import { FormField } from "@core/types/form-builder.model";
import { FormGroup, Validators } from "@angular/forms";
import { AuthService } from "@core/services/account/auth.service";
import { Router } from "@angular/router";
import { NavigationPaths } from "@core/enums/navigation-paths.enum";
import { emailValidator } from "@shared/utils/custom-validators/email.validator";
import { passwordValidator } from "@shared/utils/custom-validators/password.validator";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent {
  title = 'LOGIN';
  subtitle = 'DONT_HAVE_AN_ACCOUNT';
  logoInformation = 'Slogan of your company goes right underneath the logo, this is just a placeholder text.';
  redirectText = 'REGISTER_NOW';
  redirectRoute = [NavigationPaths.BACK, NavigationPaths.REGISTRATION];
  imgUrl = ImageUrl.SIGN_IN;

  formFields: FormField[] = [
    {
      key: 'email',
      label: 'EMAIL',
      componentType: 'textbox',
      inputType: 'email',
      placeholder: 'ENTER_EMAIL',
      validators: [Validators.required, emailValidator()],
      icon: 'mail',
      extendedValidation: true,
    },
    {
      key: 'password',
      label: 'PASSWORD',
      componentType: 'textbox',
      inputType: 'password',
      placeholder: 'ENTER_PASSWORD',
      validators: [Validators.required, passwordValidator(true)],
      icon: 'lock',
      hint: 'FORGOT_PASSWORD_LINK',
      hintLink: [NavigationPaths.BACK, NavigationPaths.PASSWORD_RECOVERY],
      extendedValidation: true,
    }
  ];

  form!: FormGroup;

  constructor(
    private authService: AuthService,
    private route: Router,
  ) {
  }

  onSubmit(): void {
    this.form.disable();
    this.authService.signIn(this.form.value)
      .subscribe({
        complete: () => this.route.navigate([NavigationPaths.BACK, NavigationPaths.DASHBOARD]),
        error: () => this.form.enable(),
      });
  }
}

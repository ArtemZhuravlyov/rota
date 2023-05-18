import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImageUrl } from "@core/enums/image-url";
import { FormField } from "@core/types/form-builder.model";
import { FormGroup, Validators } from "@angular/forms";
import { AuthService } from "@core/services/account/auth.service";
import { Router } from "@angular/router";
import { NavigationPaths } from "@core/enums/navigation-paths.enum";

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
  redirectRoute = `${NavigationPaths.LOGIN}/${NavigationPaths.REGISTRATION}`;
  imgUrl = ImageUrl.SIGN_IN;

  formFields: FormField[] = [
    {
      key: 'email',
      label: 'EMAIL',
      componentType: 'textbox',
      inputType: 'email',
      placeholder: 'ENTER_EMAIL',
      validators: [Validators.required, Validators.email],
      icon: 'mail'
    },
    {
      key: 'password',
      label: 'PASSWORD',
      componentType: 'textbox',
      inputType: 'password',
      placeholder: 'ENTER_PASSWORD',
      validators: [Validators.required],
      icon: 'lock',
    }
  ];

  form!: FormGroup;

  constructor(
    private authService: AuthService,
    private route: Router,
  ) {
  }

  onSubmit(): void {
    this.authService.signIn(this.form.value)
      .subscribe(() => this.route.navigate([`../${NavigationPaths.DASHBOARD}`]));
  }
}

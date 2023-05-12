import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImageUrl } from "../../../core/enums/image-url";
import { FormField } from "../../../core/types/form-builder.model";
import { Validators } from "@angular/forms";
import { AuthService } from "../../../core/services/account/auth.service";
import { Router } from "@angular/router";
import { AuthSignIn } from "../../../core/types/auth.interface";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent {
  title = 'Login';
  subtitle = 'Don’t have an account?';
  logoInformation = 'Slogan of your company goes right underneath the logo, this is just a placeholder text.';
  redirectText = 'Register Now';
  redirectRoute = 'login/registration';
  imgUrl = ImageUrl.SIGN_IN;

  formFields: FormField[] = [
    {
      key: 'email',
      label: 'Email',
      componentType: 'textbox',
      inputType: 'email',
      validators: [Validators.required, Validators.email],
    },
    {
      key: 'password',
      label: 'Password',
      componentType: 'textbox',
      inputType: 'password',
      validators: [Validators.required]
    }
  ];

  formResult = {};
  formIsValid = false;

  constructor(
    private authService: AuthService,
    private route: Router,
  ) {
  }

  onSubmit(): void {
    this.authService.signIn(this.formResult as AuthSignIn)
      .subscribe(() => this.route.navigate(['../home']));
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormField } from "../../../core/types/form-builder.model";
import { Validators } from "@angular/forms";
import { ImageUrl } from "../../../core/enums/image-url";
import { AuthService } from "../../../core/services/account/auth.service";
import { AuthRegistration } from "../../../core/types/auth.interface";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent {
  title = 'Register';
  subtitle = 'Already have an account?';
  logoInformation = 'Slogan of your company goes right underneath the logo, this is just a placeholder text.';
  redirectText = 'Login';
  redirectRoute = 'login/sign-in';
  imgUrl = ImageUrl.REGISTRATION;

  formFields: FormField[] = [
    {
      key: 'firstName',
      label: 'First Name',
      componentType: 'textbox',
      inputType: 'text',
      validators: [Validators.required]
    },
    {
      key: 'lastName',
      label: 'Last Name',
      componentType: "textbox",
      inputType: 'text',
      validators: [Validators.required]
    },
    {
      key: 'email',
      label: 'Email',
      componentType: "textbox",
      inputType: 'email',
      validators: [Validators.required, Validators.email]
    },
    {
      key: 'password',
      label: 'Password',
      componentType: "textbox",
      inputType: 'password',
      validators: [Validators.required]
    },
    {
      key: 'verifyPassword',
      label: 'Verify Password',
      componentType: "textbox",
      inputType: 'password',
      validators: [Validators.required],
    },
  ]

  formResult: AuthRegistration | null = null;
  isValid = false;

  constructor(
    private authService: AuthService,
    private route: Router
  ) { }

  onSubmit(): void {
    this.authService.registration(this.formResult as AuthRegistration).subscribe(() => {
      this.route.navigate(['/login/company']);
    });
  }
}

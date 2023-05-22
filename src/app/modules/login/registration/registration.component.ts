import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormField } from "@core/types/form-builder.model";
import { FormGroup, Validators } from "@angular/forms";
import { ImageUrl } from "@core/enums/image-url";
import { AuthService } from "@core/services/account/auth.service";
import { Router } from "@angular/router";
import { NavigationPaths } from "@core/enums/navigation-paths.enum";
import { matchFieldsValue } from "@shared/utils/custom-validators/match-fields-value";
import { excludeSymbols } from "@shared/utils/custom-validators/exclude-symbols";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent {
  title = 'REGISTER';
  subtitle = 'ALREADY_HAVE_AN_ACCOUNT';
  logoInformation = 'Slogan of your company goes right underneath the logo, this is just a placeholder text.';
  redirectText = 'LOGIN';
  redirectRoute = `${NavigationPaths.LOGIN}/${NavigationPaths.SIGN_IN}`;
  imgUrl = ImageUrl.REGISTRATION;

  formFields: FormField[] = [
    {
      key: 'firstName',
      label: 'FIRST_NAME',
      componentType: 'textbox',
      inputType: 'text',
      placeholder: 'ENTER_FIRST_NAME',
      validators: [Validators.required, excludeSymbols(['`'])],
      icon: 'person_outline',
      extendedValidation: true,
    },
    {
      key: 'lastName',
      label: 'LAST_NAME',
      componentType: "textbox",
      inputType: 'text',
      placeholder: 'ENTER_LAST_NAME',
      validators: [Validators.required],
      icon: 'person_outline',
      extendedValidation: true,
    },
    {
      key: 'email',
      label: 'EMAIL',
      componentType: "textbox",
      inputType: 'email',
      placeholder: 'ENTER_EMAIL',
      validators: [Validators.required, Validators.email],
      icon: 'mail',
      extendedValidation: true,
    },
    {
      key: 'password',
      label: 'PASSWORD',
      componentType: "textbox",
      inputType: 'password',
      placeholder: 'ENTER_PASSWORD',
      validators: [Validators.required, Validators.minLength(6)],
      icon: 'lock',
      extendedValidation: true,
    },
    {
      key: 'verifyPassword',
      label: 'VERIFY_PASSWORD',
      placeholder: 'ENTER_VERIFY_PASSWORD',
      componentType: "textbox",
      inputType: 'password',
      formValidators: [matchFieldsValue('password', 'verifyPassword')],
      validators: [Validators.required],
      icon: 'lock',
      extendedValidation: true,
    },
  ]

  form!: FormGroup;

  constructor(
    private authService: AuthService,
    private route: Router
  ) {
  }

  onSubmit(): void {
    this.authService.registration(this.form.value).subscribe(({ userId }) => {
      this.route.navigate([`/${NavigationPaths.LOGIN}`, NavigationPaths.REGISTRATION_COMPANY], { queryParams: { userId } });
    });
  }
}

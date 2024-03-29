import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { FormField } from '@core/types/form-builder.model';
import { FormGroup } from '@angular/forms';
import { ImageUrl } from '@core/enums/image-url';
import { AuthService } from '@core/services/account/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { TranslateKey } from '../../../../assets/i18n/enums/translate-key.enum';
import { CustomValidators } from '@shared/utils/custom-validators/custom-validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent implements AfterViewInit, OnInit {
  title = TranslateKey.REGISTER;
  subtitle = TranslateKey.ALREADY_HAVE_AN_ACCOUNT;
  logoInformation =
    'Slogan of your company goes right underneath the logo, this is just a placeholder text.';
  redirectText = 'LOGIN';
  redirectRoute = [NavigationPaths.BACK, NavigationPaths.SIGN_IN];
  imgUrl = ImageUrl.REGISTRATION;

  formFields: FormField[] = [
    {
      key: 'firstName',
      label: 'FIRST_NAME',
      componentType: 'textbox',
      inputType: 'text',
      placeholder: 'ENTER_FIRST_NAME',
      validators: [
        CustomValidators.required,
        CustomValidators.excludeSymbolsValidator({ symbols: ['`'] }),
      ],
      icon: 'person_outline',
      extendedValidation: true,
    },
    {
      key: 'lastName',
      label: 'LAST_NAME',
      componentType: 'textbox',
      inputType: 'text',
      placeholder: 'ENTER_LAST_NAME',
      validators: [CustomValidators.required],
      icon: 'person_outline',
      extendedValidation: true,
    },
    {
      key: 'email',
      label: 'EMAIL',
      componentType: 'textbox',
      inputType: 'email',
      placeholder: 'ENTER_EMAIL',
      validators: [
        CustomValidators.required,
        CustomValidators.emailValidator,
      ],
      icon: 'mail',
      extendedValidation: true,
    },
    {
      key: 'password',
      label: 'PASSWORD',
      componentType: 'textbox',
      inputType: 'password',
      placeholder: 'ENTER_PASSWORD',
      validators: [
        CustomValidators.required,
        CustomValidators.passwordValidator(),
      ],
      icon: 'lock',
      extendedValidation: true,
    },
    {
      key: 'verifyPassword',
      label: 'VERIFY_PASSWORD',
      placeholder: 'ENTER_VERIFY_PASSWORD',
      componentType: 'textbox',
      inputType: 'password',
      formValidators: [
        CustomValidators.matchFieldsValueValidator(
          'password',
          'verifyPassword'
        ),
      ],
      validators: [CustomValidators.required],
      icon: 'lock',
      extendedValidation: true,
    },
  ];

  form!: FormGroup;
  isEdit = false;

  constructor(
    private authService: AuthService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(({ edit }) => {
      if (edit) {
        this.isEdit = edit;
        this.addDataForFormField();
      }
    });
  }

  ngAfterViewInit() {
    this.subscriberForPasswordChange();
  }

  onSubmit(): void {
    let body = this.form.value;
    this.form.disable();

    if (this.isEdit) {
      this.authService.checkUserAuth();
      body = {
        ...body,
        id: this.authService.getCurrentUser().userId,
      };
    }

    this.authService.registration(body).subscribe({
      complete: () =>
        this.route.navigate([
          NavigationPaths.LOGIN,
          NavigationPaths.REGISTRATION_COMPANY,
        ]),
      error: () => this.form.enable(),
    });
  }

  private addDataForFormField(): void {
    const { displayName, email } = this.authService.getCurrentUser();
    const [firstName, lastName] = displayName.split(' ');
    const data = { firstName, lastName, email } as Record<
      string,
      string
    >;
    this.formFields = this.formFields.map(field => {
      field.data = data[field.key];
      return field;
    });
  }

  private subscriberForPasswordChange(): void {
    const controlPassword = this.form?.get('password');
    const controlVerifyPassword = this.form?.get('verifyPassword');

    controlPassword?.valueChanges.subscribe(() => {
      controlVerifyPassword?.updateValueAndValidity();
    });
  }
}

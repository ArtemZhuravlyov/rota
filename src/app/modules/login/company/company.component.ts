import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormField } from '@core/types/form-builder.model';
import { FormGroup, Validators } from '@angular/forms';
import { ImageUrl } from '@core/enums/image-url';
import { CompanyService } from '@core/services/company/company.service';
import { map } from 'rxjs';
import { Country, Industry } from '@core/types/company.interface';
import { Router } from '@angular/router';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { AuthService } from '@core/services/account/auth.service';
import { TranslateKey } from '../../../../assets/i18n/enums/translate-key.enum';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyComponent {
  title = TranslateKey.COMPANY;
  subtitle = TranslateKey.COMPANY_CREATE_INFO;
  logoInformation =
    'Slogan of your company goes right underneath the logo, this is just a placeholder text.';
  imgUrl = ImageUrl.COMPANY;
  routerLinkToRegistration = [
    NavigationPaths.BACK,
    NavigationPaths.REGISTRATION,
  ];

  formFields: FormField[] = [
    {
      key: 'name',
      label: 'COMPANY_NAME',
      componentType: 'textbox',
      inputType: 'text',
      validators: [Validators.required],
      placeholder: 'Enter',
      maxLength: 500,
      extendedValidation: true,
    },
    {
      key: 'address',
      label: 'ADDRESS',
      componentType: 'textbox',
      inputType: 'textarea',
      validators: [Validators.required],
      placeholder: 'Enter',
      maxLength: 500,
      styleConfig: { height: '150px' },
      extendedValidation: true,
    },
    {
      key: 'countryId',
      label: 'COUNTRY',
      componentType: 'dropdown',
      validators: [Validators.required],
      data: this.companyService
        .getCountry()
        .pipe(
          map((countries: Country[]) =>
            countries.map(country => ({
              displayName: country.name,
              value: country.id,
              icon: country.countryFlag,
            }))
          )
        ),
    },
    {
      key: 'industryId',
      label: 'INDUSTRY',
      componentType: 'dropdown',
      validators: [Validators.required],
      data: this.companyService
        .getIndustry()
        .pipe(
          map((industries: Industry[]) =>
            industries.map(industry => ({
              displayName: industry.name,
              value: industry.id,
            }))
          )
        ),
    },
  ];

  form!: FormGroup;

  constructor(
    private companyService: CompanyService,
    private route: Router,
    private authService: AuthService
  ) {}

  onSubmit(): void {
    this.form.disable();
    this.companyService
      .registerCompany(
        this.form.value,
        this.authService.getCurrentUser().userId
      )
      .subscribe({
        complete: () =>
          this.route.navigate([
            NavigationPaths.BACK,
            NavigationPaths.DASHBOARD,
          ]),
        error: () => this.form.enable(),
      });
  }

  backToRegister(): void {
    this.route.navigate([
      NavigationPaths.BACK,
      NavigationPaths.REGISTRATION,
    ]);
  }
}

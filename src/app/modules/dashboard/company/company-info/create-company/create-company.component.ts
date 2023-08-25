import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormField } from '@core/types/form-builder.model';
import { FormGroup, Validators } from '@angular/forms';
import { finalize, map } from 'rxjs';
import { Country, Industry } from '@core/types/company.interface';
import { CompanyService } from '@core/services/company/company.service';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { AuthService } from '@core/services/account/auth.service';
import { Router } from '@angular/router';
import { TranslateKey } from '../../../../../../assets/i18n/enums/translate-key.enum';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateCompanyComponent {
  protected readonly NavigationPaths = NavigationPaths;
  protected readonly ADD_COMPANY_INFO = TranslateKey.ADD_COMPANY_INFO;

  formFields: FormField[] = [
    {
      key: 'name',
      label: 'NAME',
      componentType: 'textbox',
      inputType: 'text',
      validators: [Validators.required],
      placeholder: 'ENTER',
      maxLength: 500,
    },
    {
      key: 'address',
      label: 'ADDRESS',
      componentType: 'textbox',
      inputType: 'text',
      validators: [Validators.required],
      placeholder: 'ENTER',
      maxLength: 500,
    },
    {
      key: 'phone',
      label: 'PHONE',
      componentType: 'phone',
      placeholder: 'SELECT_FORMAT',
      validators: [Validators.required],
      data: this.companyService.getCountry().pipe(
        map((countries: Country[]) =>
          countries.map(country => ({
            displayName: `${country.name} (${country.dialingCode})`,
            value: {
              dialingCode: country.dialingCode,
              countryFlag: country.countryFlag,
            },
            countryFlag: country.countryFlag,
          }))
        )
      ),
    },
    {
      key: 'email',
      label: 'EMAIL',
      componentType: 'textbox',
      inputType: 'email',
      placeholder: 'ENTER_EMAIL',
      validators: [Validators.required, Validators.email],
      maxLength: 50,
    },
    {
      key: 'industryId',
      label: 'INDUSTRY',
      componentType: 'dropdown',
      placeholder: 'SELECT',
      validators: [Validators.required],
      data: this.companyService.getIndustry().pipe(
        map((industries: Industry[]) =>
          industries.map(industry => ({
            displayName: industry.name,
            value: industry.id,
          }))
        )
      ),
    },
    {
      key: 'countryId',
      label: 'COUNTRY',
      componentType: 'dropdown',
      placeholder: 'SELECT',
      validators: [Validators.required],
      data: this.companyService.getCountry().pipe(
        map((countries: Country[]) =>
          countries.map(country => ({
            displayName: country.name,
            value: country.id,
            countryFlag: country.countryFlag,
          }))
        )
      ),
    },
  ];
  form!: FormGroup;

  constructor(
    private readonly companyService: CompanyService,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  createCompany(): void {
    this.companyService
      .createCompany(
        this.form.getRawValue(),
        this.authService.getCurrentUserId()
      )
      .pipe(
        finalize(() => {
          this.router.navigate([NavigationPaths.BACK]);
        })
      )
      .subscribe();
  }
}

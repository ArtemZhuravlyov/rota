import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormField } from "@core/types/form-builder.model";
import { FormGroup, Validators } from "@angular/forms";
import { map, pluck, tap } from "rxjs";
import { LocaleService } from "@core/services/locale/locale.service";
import { AuthService } from "@core/services/account/auth.service";
import { ButtonTypeEnum } from "@core/enums/button-type.enum";
import { NavigationPaths } from "@core/enums/navigation-paths.enum";
import { LanguageService } from "@core/services/language/language.service";
import { TimezoneService } from "@core/services/timezone/timezone.service";
import { CurrencyService } from "@core/services/currency/currency.service";
import { FiscalYearService } from "@core/services/fiscal-year/fiscal-year.service";
import { LocaleResource } from "@core/types/locale-resource.interface";
import { SettingsService } from "@core/services/settings/settings.service";

@Component({
  selector: 'app-company-settings',
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanySettingsComponent {

  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly NavigationPaths = NavigationPaths;

  formFields: FormField[] = [
    {
      heading: 'LOCALE',
      key: 'defaultLocaleId',
      label: 'DEFAULT_LOCALE',
      componentType: 'dropdown',
      validators: [Validators.required],
      data: this.localeService.getUserLocales(this.authService.getCurrentUserId()).pipe(
        pluck('localeStringResources'),
        map( (locales: LocaleResource[]) => {
          return locales.map(locale =>
            ({ displayName: locale.resourceName, value: locale.languageId })
          )
        })
      )
    },
    {
      key: 'preferedLocaleId',
      label: 'PREFERRED_LOCALE',
      componentType: 'dropdown',
      validators: [Validators.required],
      data: this.localeService.getUserLocales(this.authService.getCurrentUserId()).pipe(
        pluck('localeStringResources'),
        map( (locales: LocaleResource[]) => {
          return locales.map(locale =>
            ({ displayName: locale.resourceName, value: locale.languageId })
          )
        })
      )
    },
    {
      heading: 'LANGUAGE',
      key: 'defaultLanguageId',
      label: 'DEFAULT_DISPLAY_LANGUAGE',
      componentType: 'dropdown',
      validators: [Validators.required],
      data: this.languageService.getLanguages().pipe(
        map( (languages) => {
          return languages.map(language =>
            ({ displayName: language.name, value: language.id })
          )
        })
      )
    },
    {
      key: 'preferedLanguageId',
      label: 'PREFERRED_DISPLAY_LANGUAGE',
      componentType: 'dropdown',
      validators: [Validators.required],
      data: this.languageService.getLanguages().pipe(
        map( (languages) => {
          return languages.map(language =>
            ({ displayName: language.name, value: language.id })
          )
        })
      )
    },
    {
      heading: 'TIMEZONE',
      key: 'defaultTimezoneId',
      label: 'DEFAULT_TIMEZONE',
      componentType: 'dropdown',
      validators: [Validators.required],
      data: this.timezoneService.getUserTimezones(this.authService.getCurrentUserId(), this.authService.getCompanyId()).pipe(
        map( (timezones) => {
          return timezones.map( timezone =>
            ({ displayName: timezone.displayName, value: timezone.id })
          )
        })
      )
    },
    {
      key: 'defaultHourClockId',
      label: 'DEFAULT_HOUR_CLOCK',
      componentType: 'dropdown',
      validators: [Validators.required],
      data: this.fiscalYearService.getHourClock().pipe(
        map( (res) => {
          return res.map( hourClock =>
            ({ displayName: hourClock.name, value: hourClock.id })
          )
        })
      )
    },
    {
      key: 'preferedHourClockId',
      label: 'PREFERRED_HOUR_CLOCK',
      componentType: 'dropdown',
      validators: [Validators.required],
      data: this.fiscalYearService.getHourClock().pipe(
        map( (res) => {
          return res.map( hourClock =>
            ({ displayName: hourClock.name, value: hourClock.id })
          )
        })
      )
    },
    {
      heading: 'COMPANY_INFORMATION',
      key: 'financialYearId',
      label: 'FINANCIAL_YEAR',
      componentType: 'dropdown',
      validators: [Validators.required],
      data: this.fiscalYearService.getFinancialYear().pipe(
        map( (financialYears) => {
          return financialYears.map( financialYear =>
            ({ displayName: financialYear.name, value: financialYear.id })
          )
        })
      )
    },
    {
      key: 'leaveYearId',
      label: 'LEAVE_YEAR',
      componentType: 'dropdown',
      validators: [Validators.required],
      data: this.fiscalYearService.getLeaveYear().pipe(
        map( (leaveYears) => {
          return leaveYears.map( leaveYear =>
            ({ displayName: leaveYear.name, value: leaveYear.id })
          )
        })
      )
    },
    {
      key: 'taxPayerIdentificationNumber',
      label: 'TAX_PLAYER_IDENTIFICATION_NUMBER',
      componentType: 'textbox',
      validators: [Validators.required],
      inputType: 'text',
      placeholder: 'ENTER',
      hintMenu: true,
      hintHeading: 'TAX_PAYER_IDENTIFICATION',
      hintDescription: 'TAX_PAYER_IDENTIFICATION_DESCRIPTION',
      maxLength: 500,
    },
    {
      key: 'vat',
      label: 'VAT',
      componentType: 'textbox',
      validators: [Validators.required],
      inputType: 'text',
      placeholder: 'ENTER',
      hintMenu: true,
      hintHeading: 'VAT',
      hintDescription: 'VAT_DESCRIPTION',
      maxLength: 500,
    },
    {
      heading: 'CURRENCY',
      key: 'defaultCurrencyId',
      label: 'DEFAULT_CURRENCY',
      componentType: 'dropdown',
      validators: [Validators.required],
      data: this.currencyService.getCurrencies().pipe(
        map( (currencies) => {
          return currencies.map(currency =>
            ({ displayName: `${currency.customFormatting} ${currency.name}`, value: currency.id })
          )
        })
      )
    },
    {
      key: 'preferedCurrencyId',
      label: 'PREFERRED_CURRENCY',
      componentType: 'dropdown',
      validators: [Validators.required],
      data: this.currencyService.getCurrencies().pipe(
        map( (currencies) => {
          return currencies.map(currency =>
            ({ displayName: currency.name, value: currency.id })
          )
        })
      )
    },
    {
      key: 'file',
      label: 'COMPANY_LOGO',
      componentType: 'file',
      maxFile: 'COMPANY_LOGO_SUPPORTED_FILES',
      validators: [Validators.required],
    },
  ]
  companyPreferences: any = null;
  form!: FormGroup;

  constructor(
    private readonly localeService: LocaleService,
    private readonly authService: AuthService,
    private readonly languageService: LanguageService,
    private readonly timezoneService: TimezoneService,
    private readonly currencyService: CurrencyService,
    private readonly fiscalYearService: FiscalYearService,
    private readonly settingsService: SettingsService,
  ) {
    settingsService.getCompanyPreference(authService.getCurrentUserId(), authService.getCompanyId()).pipe(
      tap( res => {
        this.companyPreferences = res;
        this.form.patchValue(this.companyPreferences);
      })
    ).subscribe()
  }

  updateCompany(): void {
    const updatedCompanyPreferences = this.companyPreferences ? {...this.form.getRawValue(), companyId: this.companyPreferences.companyId} : this.form.getRawValue();

    this.settingsService.createCompanyPreference(this.authService.getCurrentUserId(), this.authService.getCompanyId(), updatedCompanyPreferences).subscribe()
  }

}

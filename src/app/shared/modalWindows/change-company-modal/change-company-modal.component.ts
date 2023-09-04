import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { FormField } from '@core/types/form-builder.model';
import { FormGroup, Validators } from '@angular/forms';
import { map, tap } from 'rxjs';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { CompanyService } from '@core/services/company/company.service';
import { AuthService } from '@core/services/account/auth.service';
import { WorkDateFormatService } from '@core/services/work-date-format/work-date-format.service';
import { LanguageService } from '@core/services/language/language.service';
import { TimezoneService } from '@core/services/timezone/timezone.service';
import { AccountService } from '@core/services/account/account.service';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateKey } from '../../../../assets/i18n/enums/translate-key.enum';

@Component({
  selector: 'app-change-company-modal',
  templateUrl: './change-company-modal.component.html',
  styleUrls: ['./change-company-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeCompanyModalComponent implements OnInit {
  protected readonly NavigationPaths = NavigationPaths;

  formFields: FormField[] = [
    {
      key: 'companyId',
      label: 'COMPANY',
      componentType: 'dropdown',
      placeholder: 'SELECT',
      validators: [Validators.required],
      data: this.companyService
        .getCompanies(this.authService.getCurrentUserId())
        .pipe(
          map(companyResponse => {
            return companyResponse.companies.map(company => ({
              displayName: company.name,
              value: company.id,
            }));
          })
        ),
    },
    {
      key: 'workDateFormatId',
      label: 'WORK_DATE_FORMAT',
      componentType: 'dropdown',
      placeholder: 'SELECT',
      validators: [Validators.required],
      data: this.workDateFormatService
        .getWorkDateFormat(this.authService.getCurrentUserId())
        .pipe(
          map(workDateFormatResponse => {
            return workDateFormatResponse.workDateFormats.map(
              (workDateFormat: any) => ({
                displayName: workDateFormat.name,
                value: workDateFormat.id,
              })
            );
          })
        ),
    },
    {
      key: 'languageId',
      label: 'LANGUAGE',
      componentType: 'dropdown',
      placeholder: 'SELECT',
      validators: [Validators.required],
      data: this.languageService.getLanguages().pipe(
        map(languages => {
          return languages.map(language => ({
            displayName: language.name,
            value: language.languageCulture.split('-')[0],
          }));
        })
      ),
    },
    {
      key: 'timezoneId',
      label: 'TIMEZONE',
      componentType: 'dropdown',
      placeholder: 'SELECT',
      validators: [Validators.required],
      data: this.timezoneService
        .getUserTimezones(
          this.authService.getCurrentUserId(),
          this.authService.getCompanyId()
        )
        .pipe(
          map(timezones => {
            return timezones.map(timezone => ({
              displayName: timezone.displayName,
              value: timezone.id,
            }));
          })
        ),
    },
  ];

  form!: FormGroup;

  constructor(
    private readonly authService: AuthService,
    private readonly companyService: CompanyService,
    private readonly workDateFormatService: WorkDateFormatService,
    private readonly languageService: LanguageService,
    private readonly timezoneService: TimezoneService,
    private readonly accountService: AccountService,
    private readonly dialogRef: MatDialogRef<ChangeCompanyModalComponent>
  ) {}

  ngOnInit() {
    this.setUserSettings();
  }

  setUserSettings(): void {
    this.accountService
      .getUserSettings(this.authService.getCurrentUserId())
      .pipe(tap(res => this.form.patchValue(res)))
      .subscribe();
  }

  updateUserSettings(): void {
    this.accountService
      .updateUserSettings(
        this.authService.getCurrentUserId(),
        this.form.getRawValue()
      )
      .pipe(
        tap(() => {
          this.authService.updateCompanyId(
            this.form.get('companyId')?.value
          );

          this.dialogRef.close();
        })
      )
      .subscribe();
  }

  setLanguage(event: { key: string; value: string }) {
    if (event.key === 'languageId')
      this.languageService.setLanguage(event.value);
  }

  protected readonly SETTINGS = TranslateKey.SETTINGS;
  protected readonly FEW_WORDS = TranslateKey.FEW_WORDS;
}

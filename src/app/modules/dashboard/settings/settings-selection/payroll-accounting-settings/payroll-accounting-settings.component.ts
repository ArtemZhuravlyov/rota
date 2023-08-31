import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { FormField } from '@core/types/form-builder.model';
import { FormGroup } from '@angular/forms';
import { SettingsService } from '@core/services/settings/settings.service';
import { AuthService } from '@core/services/account/auth.service';
import { tap } from 'rxjs';
import { TranslateKey } from '../../../../../../assets/i18n/enums/translate-key.enum';

@Component({
  selector: 'app-payroll-accounting-settings',
  templateUrl: './payroll-accounting-settings.component.html',
  styleUrls: ['./payroll-accounting-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PayrollAccountingSettingsComponent {
  protected readonly PAYROLL_ACCOUNTING =
    TranslateKey.PAYROLL_ACCOUNTING;

  protected readonly NavigationPaths = NavigationPaths;

  formFields: FormField[] = [
    {
      heading: 'ACCOUNTING',
      key: 'enableInterCompanyAccounting',
      componentType: 'toggle',
      toggleText: 'ENABLE_INTER_COMPANY',
    },
    {
      key: 'usePeriodSchedulePaymentDateAsBudgetDate',
      componentType: 'toggle',
      toggleText: 'PERIOD_AS_BUDGET_DATE',
    },
    {
      heading: 'JOURNAL',
      key: 'usePaymentDateAsAccountingDate',
      componentType: 'toggle',
      toggleText: 'USE_PAYMENT_DATE',
    },
    {
      key: 'enableJournalDetail',
      componentType: 'toggle',
      toggleText: 'ENABLE_JOURNAL_DATE',
    },
  ];

  form!: FormGroup;
  payrollAccountingPreferences: any;

  constructor(
    private readonly settingsService: SettingsService,
    private readonly authService: AuthService
  ) {
    settingsService
      .getPayrollAccountingPreference(
        authService.getCurrentUserId(),
        authService.getCompanyId()
      )
      .pipe(
        tap(res => {
          this.payrollAccountingPreferences = res;
          console.log(res, 'prefernces');
          this.form.patchValue(this.payrollAccountingPreferences);
        })
      )
      .subscribe();
  }

  updatePayrollAccountingPreferences(): void {
    const updatedWorkflowPreferences = this
      .payrollAccountingPreferences
      ? {
          ...this.form.getRawValue(),
          companyId: this.payrollAccountingPreferences.companyId,
        }
      : this.form.getRawValue();

    this.settingsService
      .createPayrollAccountingPreference(
        this.authService.getCurrentUserId(),
        this.authService.getCompanyId(),
        updatedWorkflowPreferences
      )
      .subscribe();
  }
}

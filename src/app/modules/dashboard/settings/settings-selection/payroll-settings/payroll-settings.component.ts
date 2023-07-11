import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationPaths } from "@core/enums/navigation-paths.enum";
import { ButtonTypeEnum } from "@core/enums/button-type.enum";
import { FormField } from "@core/types/form-builder.model";
import { SettingsService } from "@core/services/settings/settings.service";
import { AuthService } from "@core/services/account/auth.service";
import { tap } from "rxjs";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-payroll-settings',
  templateUrl: './payroll-settings.component.html',
  styleUrls: ['./payroll-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PayrollSettingsComponent {

    protected readonly NavigationPaths = NavigationPaths;
    protected readonly ButtonTypeEnum = ButtonTypeEnum;

    formFields: FormField[] = [
      {
        heading: 'PAYSLIP',
        key: 'disablePayslipInSelfService',
        componentType: 'toggle',
        toggleText: 'DISABLE_PAYSLIP'
      },
      {
        key: 'disablePayslipViewingInSelfService',
        componentType: 'toggle',
        toggleText: 'DISABLE_PAYSLIP_VIEWING'
      },
      {
        key: 'disableMultiplePayslipsPrint',
        componentType: 'toggle',
        toggleText: 'ENABLE_PRINT_MULTIPLE'
      },
      {
        key: 'disablePayslipInformation',
        componentType: 'toggle',
        toggleText: 'ENABLE_PAYSLIP'
      },
      {
        heading: 'COMPANY_INFORMATION',
        key: 'enableCompanyInformation',
        componentType: 'toggle',
        toggleText: 'ENABLE_COMPANY_INFO'
      },
      {
        key: 'enableCurrentAndYTDTotal',
        componentType: 'toggle',
        toggleText: 'ENABLE_CURRENT_TOTAL'
      },
      {
        key: 'enableRegularEarning',
        componentType: 'toggle',
        toggleText: 'ENABLE_REGURAL_EARNINGS'
      },
      {
        key: 'enableStatutoryTax',
        componentType: 'toggle',
        toggleText: 'ENABLE_STATUTORY_TAXES'
      },
      {
        heading: 'PAYMENTS',
        key: 'enableEmployeeBenefit',
        componentType: 'toggle',
        toggleText: 'ENABLE_EMPLOYEE_BENEFITS'
      },
      {
        key: 'enableTaxableWage',
        componentType: 'toggle',
        toggleText: 'ENABLE_TAXABLE_WAGES'
      },
      {
        key: 'enableWithholding',
        componentType: 'toggle',
        toggleText: 'ENABLE_WITHHOLDING'
      },
      {
        key: 'enableTimeOff',
        componentType: 'toggle',
        toggleText: 'ENABLE_TIME_OFF'
      },
    ]

  form!: FormGroup;
  payrollPreferences: any;

  constructor(
    private readonly settingsService: SettingsService,
    private readonly authService: AuthService,
  ) {
    settingsService.getPayrollPreference(authService.getCurrentUserId(), authService.getCompanyId()).pipe(
      tap( res => {
        this.payrollPreferences = res;
        console.log(res, 'prefernces')
        this.form.patchValue(this.payrollPreferences);
      })
    ).subscribe()
  }

  updatePayrollPreferences(): void {
    const updatedWorkflowPreferences = this.payrollPreferences ? {...this.form.getRawValue(), companyId: this.payrollPreferences.companyId} : this.form.getRawValue();

    this.settingsService.createPayrollPreference(this.authService.getCurrentUserId(), this.authService.getCompanyId(), updatedWorkflowPreferences).subscribe()
  }
}

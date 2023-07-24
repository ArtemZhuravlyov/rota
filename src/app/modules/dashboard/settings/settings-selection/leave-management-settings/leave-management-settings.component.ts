import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationPaths } from "@core/enums/navigation-paths.enum";
import { ButtonTypeEnum } from "@core/enums/button-type.enum";
import { FormField } from "@core/types/form-builder.model";
import { FormGroup, Validators } from "@angular/forms";
import { map, pluck, tap } from "rxjs";
import { LocaleResource } from "@core/types/locale-resource.interface";
import { SettingsService } from "@core/services/settings/settings.service";
import { AuthService } from "@core/services/account/auth.service";
import { FiscalYearService } from "@core/services/fiscal-year/fiscal-year.service";

@Component({
  selector: 'app-leave-management-settings',
  templateUrl: './leave-management-settings.component.html',
  styleUrls: ['./leave-management-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeaveManagementSettingsComponent {

  protected readonly NavigationPaths = NavigationPaths;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;

  formFields: FormField[] = [
    {
      heading: 'LEAVE',
      key: 'enableProration',
      componentType: 'toggle',
      toggleText: 'ENABLE_PRORATION'
    },
    {
      key: 'hideLeaveBalanceInSelfService',
      componentType: 'toggle',
      toggleText: 'HIDE_LEAVE_BALANCE'
    },
    {
      heading: 'VISIBILITY_AND_LEAVE',
      key: 'balanceVisibilityId',
      label: 'BALANCE_VISIBILITY',
      componentType: 'datepicker',
      validators: [Validators.required],
    },
    {
      key: 'leaveYearStartId',
      label: 'LEAVE_YEAR_START',
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
      key: 'leaveYearEndId',
      label: 'LEAVE_YEAR_ENDS',
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
      heading: 'OTHER',
      key: 'enableOnPayslip',
      componentType: 'toggle',
      toggleText: 'ENABLE_ON_PAYSLIP'
    },
    {
      key: 'enableCarryover',
      componentType: 'toggle',
      toggleText: 'ENABLE_CARRYOVER'
    },
    {
      key: 'enableJournalDetail',
      componentType: 'toggle',
      toggleText: 'ENABLE_JOURNAL_DETAILS'
    },
    {
      key: 'managerApplyForWorkerLeave',
      componentType: 'toggle',
      toggleText: 'MANAGER_CAN_APPLY'
    },
  ]

  form!: FormGroup;
  leaveManagementPreferences: any;

  constructor(
    private readonly fiscalYearService: FiscalYearService,
    private readonly settingsService: SettingsService,
    private readonly authService: AuthService,
  ) {
    settingsService.getLeaveManagementPreference(authService.getCurrentUserId(), authService.getCompanyId()).pipe(
      tap( res => {
        this.leaveManagementPreferences = res;
        this.leaveManagementPreferences ? this.form.patchValue(this.leaveManagementPreferences) : this.form.reset();
        this.form.patchValue(this.leaveManagementPreferences);
      })
    ).subscribe()
  }

  updateLeaveManagementPreferences(): void {
    const updatedLeaveManagementPreferences = this.leaveManagementPreferences ? {...this.form.getRawValue(), companyId: this.leaveManagementPreferences.companyId} : this.form.getRawValue();

    this.settingsService.createLeaveManagementPreference(this.authService.getCurrentUserId(), this.authService.getCompanyId(), updatedLeaveManagementPreferences).subscribe()
  }
}

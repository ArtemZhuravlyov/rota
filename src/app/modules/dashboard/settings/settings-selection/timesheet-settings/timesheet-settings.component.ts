import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonTypeEnum } from "@core/enums/button-type.enum";
import { NavigationPaths } from "@core/enums/navigation-paths.enum";
import { FormField } from "@core/types/form-builder.model";
import { FormGroup } from "@angular/forms";
import { SettingsService } from "@core/services/settings/settings.service";
import { AuthService } from "@core/services/account/auth.service";
import { tap } from "rxjs";

@Component({
  selector: 'app-timesheet-settings',
  templateUrl: './timesheet-settings.component.html',
  styleUrls: ['./timesheet-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimesheetSettingsComponent {

  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly NavigationPaths = NavigationPaths;

  formFields: FormField[] = [
    {
      heading: 'TIME_IN_OUT',
      label: 'DEFAULT_TIME_IN',
      key: 'defaultTimeIn',
      componentType: 'time',
    },
    {
      label: 'DEFAULT_TIME_OUT',
      key: 'defaultTimeOut',
      componentType: 'time',
    },
    {
      heading: 'AUTOMATIC_TIME_OUT',
      key: 'enableAutomaticTimeOut',
      componentType: 'toggle',
      toggleText: 'ENABLE_AUTOMATIC_TIME'
    },
    {
      label: 'AUTOMATIC_TIME_OUT',
      key: 'automaticTimeOut',
      componentType: 'time',
    },
    {
      heading: 'TIME_WRITING',
      key: 'enableOnlineTimeWriting',
      componentType: 'toggle',
      toggleText: 'ENABLE_ONLINE_TIME_WRITING'
    },
    {
      key: 'enableMobileTimeWriting',
      componentType: 'toggle',
      toggleText: 'ENABLE_MOBILE_TIME_WRITING'
    },
  ]

  form!: FormGroup;
  timesheetPreferences: any;

  constructor(
    private readonly settingsService: SettingsService,
    private readonly authService: AuthService,
  ) {
    settingsService.getTimesheetPreference(authService.getCurrentUserId(), authService.getCompanyId()).pipe(
      tap( res => {
        this.timesheetPreferences = res;
        this.timesheetPreferences ? this.form.patchValue(this.timesheetPreferences) : this.form.reset();
        this.form.patchValue(this.timesheetPreferences);
      })
    ).subscribe()
  }

  updatePayrollPreferences(): void {
    const updatedTimesheetPreferences = this.timesheetPreferences ? {...this.form.getRawValue(), companyId: this.timesheetPreferences.companyId} : this.form.getRawValue();

    this.settingsService.createTimesheetPreference(this.authService.getCurrentUserId(), this.authService.getCompanyId(), updatedTimesheetPreferences).subscribe()
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormField } from '@core/types/form-builder.model';
import { FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '@shared/utils/custom-validators/email.validator';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { SettingsService } from '@core/services/settings/settings.service';
import { AuthService } from '@core/services/account/auth.service';
import { map, tap } from 'rxjs';
import { TranslateKey } from '../../../../../../assets/i18n/enums/translate-key.enum';

@Component({
  selector: 'app-workflow-settings',
  templateUrl: './workflow-settings.component.html',
  styleUrls: ['./workflow-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkflowSettingsComponent {
  protected readonly WORKFLOW = TranslateKey.WORKFLOW;

  formFields: FormField[] = [
    {
      heading: 'EMAIL_ALERTS',
      key: 'defaultEmail',
      label: 'DEFAULT_EMAIL',
      inputType: 'email',
      componentType: 'textbox',
      placeholder: 'ENTER_EMAIL',
      validators: [Validators.required, emailValidator()],
      icon: 'mail',
      extendedValidation: true,
    },
    {
      key: 'workflowAlertDayId',
      label: 'ALERT_WHEN',
      componentType: 'dropdown',
      validators: [Validators.required],
      data: this.settingsService.getAlertDays().pipe(
        map(alertDays => {
          return alertDays.map((day: any) => ({
            displayName: day.name,
            value: day.id,
          }));
        })
      ),
    },
    {
      heading: 'HOW_TO_NOTIFY',
      key: 'notifyOriginator',
      label: 'NOTIFY_LABEL',
      componentType: 'toggle',
      toggleText: 'NOTIFY_ORIGINAL',
    },
    {
      key: 'notificationFrequencyId',
      label: 'NOTIFICATION_FREQUENCY',
      componentType: 'dropdown',
      validators: [Validators.required],
      data: this.settingsService.getNotificationFrequency().pipe(
        map(notificationFrequency => {
          return notificationFrequency.map((notification: any) => ({
            displayName: notification.name,
            value: notification.id,
          }));
        })
      ),
    },
    {
      heading: 'PREFERENCES',
      key: 'backgroundServiceNotification',
      componentType: 'toggle',
      toggleText: 'PREFERENCE_SHARED_BACKGROUND',
    },
    {
      key: 'backgroundReportNotification',
      componentType: 'toggle',
      toggleText: 'PREFERENCE_BACKGROUND_REPORT',
    },
    {
      key: 'backgroundEmailNotification',
      componentType: 'toggle',
      toggleText: 'PREFERENCE_BACKGROUND_SERVICE',
    },
  ];
  workflowPreferences: any;
  form!: FormGroup;

  protected readonly NavigationPaths = NavigationPaths;

  constructor(
    private readonly settingsService: SettingsService,
    private readonly authService: AuthService
  ) {
    settingsService
      .getWorkflowPreference(
        authService.getCurrentUserId(),
        authService.getCompanyId()
      )
      .pipe(
        tap(res => {
          this.workflowPreferences = res;
          this.workflowPreferences
            ? this.form.patchValue(this.workflowPreferences)
            : this.form.reset();
          this.form.patchValue(this.workflowPreferences);
        })
      )
      .subscribe();
  }

  updateWorkflowPreferences(): void {
    const updatedWorkflowPreferences = this.workflowPreferences
      ? {
          ...this.form.getRawValue(),
          companyId: this.workflowPreferences.companyId,
        }
      : this.form.getRawValue();

    this.settingsService
      .createWorkflowPreference(
        this.authService.getCurrentUserId(),
        this.authService.getCompanyId(),
        updatedWorkflowPreferences
      )
      .subscribe();
  }
}

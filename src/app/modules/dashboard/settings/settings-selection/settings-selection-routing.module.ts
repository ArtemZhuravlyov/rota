import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { CompanySettingsComponent } from '@app/modules/dashboard/settings/settings-selection/company-settings/company-settings.component';
import { SettingsSelectionComponent } from '@app/modules/dashboard/settings/settings-selection/settings-selection.component';
import { WorkflowSettingsComponent } from '@app/modules/dashboard/settings/settings-selection/workflow-settings/workflow-settings.component';
import { PayrollSettingsComponent } from '@app/modules/dashboard/settings/settings-selection/payroll-settings/payroll-settings.component';
import { TimesheetSettingsComponent } from '@app/modules/dashboard/settings/settings-selection/timesheet-settings/timesheet-settings.component';
import { PayrollAccountingSettingsComponent } from '@app/modules/dashboard/settings/settings-selection/payroll-accounting-settings/payroll-accounting-settings.component';
import { LeaveManagementSettingsComponent } from '@app/modules/dashboard/settings/settings-selection/leave-management-settings/leave-management-settings.component';
import { TrustedDevicesSettingsComponent } from '@app/modules/dashboard/settings/settings-selection/trusted-devices-settings/trusted-devices-settings.component';
import { AppRoutes } from '@core/types/app-route.type';

const routes: AppRoutes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: SettingsSelectionComponent,
    children: [
      {
        path: NavigationPaths.EMPTY_PATH,
        redirectTo: NavigationPaths.COMPANY,
        pathMatch: 'full',
      },
      {
        path: NavigationPaths.COMPANY,
        component: CompanySettingsComponent,
        data: { breadcrumb: 'COMPANY' },
      },
      {
        path: NavigationPaths.WORKFLOW,
        component: WorkflowSettingsComponent,
        data: { breadcrumb: 'WORKFLOW' },
      },
      {
        path: NavigationPaths.PAYROLL,
        component: PayrollSettingsComponent,
        data: { breadcrumb: 'PAYROLL' },
      },
      {
        path: NavigationPaths.TIMESHEET,
        component: TimesheetSettingsComponent,
        data: { breadcrumb: 'TIMESHEET' },
      },
      {
        path: NavigationPaths.PAYROLL_ACCOUNTING,
        component: PayrollAccountingSettingsComponent,
        data: { breadcrumb: 'PAYROLL_ACCOUNTING' },
      },
      {
        path: NavigationPaths.LEAVE_MANAGEMENT,
        component: LeaveManagementSettingsComponent,
        data: { breadcrumb: 'LEAVE_MANAGEMENT' },
      },
      {
        path: NavigationPaths.TRUSTED_DEVICES,
        component: TrustedDevicesSettingsComponent,
        data: { breadcrumb: 'TRUSTED_DEVICES' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsSelectionRoutingModule {}

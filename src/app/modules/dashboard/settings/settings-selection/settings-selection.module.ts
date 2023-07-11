import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsSelectionRoutingModule } from './settings-selection-routing.module';
import { CompanySettingsComponent } from './company-settings/company-settings.component';
import { WorkflowSettingsComponent } from './workflow-settings/workflow-settings.component';
import { FormCardModule } from "@shared/modules/form-card/form-card.module";
import { FormBuilderModule } from "@shared/modules/form-builder/form-builder.module";
import { TranslateModule } from "@ngx-translate/core";
import { ButtonModule } from "@shared/modules/button/button.module";
import { PayrollSettingsComponent } from './payroll-settings/payroll-settings.component';
import { TimesheetSettingsComponent } from './timesheet-settings/timesheet-settings.component';
import { PayrollAccountingSettingsComponent } from './payroll-accounting-settings/payroll-accounting-settings.component';
import { LeaveManagementSettingsComponent } from './leave-management-settings/leave-management-settings.component';
import { TrustedDevicesSettingsComponent } from './trusted-devices-settings/trusted-devices-settings.component';
import { TrustedDeviceModule } from "@shared/modules/trusted-device/trusted-device.module";
import { MaterialModule } from "@shared/modules/material.module";


@NgModule({
  declarations: [
    CompanySettingsComponent,
    WorkflowSettingsComponent,
    PayrollSettingsComponent,
    TimesheetSettingsComponent,
    PayrollAccountingSettingsComponent,
    LeaveManagementSettingsComponent,
    TrustedDevicesSettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsSelectionRoutingModule,
    FormCardModule,
    FormBuilderModule,
    TranslateModule,
    ButtonModule,
    TrustedDeviceModule,
    MaterialModule,
  ]
})
export class SettingsSelectionModule { }

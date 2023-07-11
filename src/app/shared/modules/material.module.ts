import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatOptionModule } from "@angular/material/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatStepperModule } from "@angular/material/stepper";
import {MatDialogModule} from "@angular/material/dialog";
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonToggleModule } from "@angular/material/button-toggle";

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatSelectModule,
  MatInputModule,
  MatSlideToggleModule,
  MatTableModule,
  MatMenuModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatPaginatorModule,
  MatStepperModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatTabsModule,
  MatButtonToggleModule,
]

@NgModule({
  imports: [
    CommonModule,
    ...MATERIAL_MODULES,
  ],
  exports: [
    ...MATERIAL_MODULES,
  ]
})
export class MaterialModule {

  static forRoot(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer): void {
    matIconRegistry.addSvgIcon(
      'excel',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/excel.svg"),
    );
    matIconRegistry.addSvgIcon(
      'download',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/download.svg"),
    );
    matIconRegistry.addSvgIcon(
      'download-file',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/download-file.svg"),
    );
    matIconRegistry.addSvgIcon(
      'long-arrow',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/long-arrow.svg"),
    );
    matIconRegistry.addSvgIcon(
      'arrow',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/arrow.svg")
    );
    matIconRegistry.addSvgIcon(
      'settings',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/settings.svg"),
    );
    matIconRegistry.addSvgIcon(
      'search',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/search.svg"),
    );
    matIconRegistry.addSvgIcon(
      'export',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/export.svg"),
    );
    matIconRegistry.addSvgIcon(
      'print',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/print.svg"),
    );
    matIconRegistry.addSvgIcon(
      'add',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/add.svg"),
    );
    matIconRegistry.addSvgIcon(
      'help',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/help.svg"),
    );
    matIconRegistry.addSvgIcon(
      'notifications',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/notifications.svg"),
    );
    matIconRegistry.addSvgIcon(
      'filter',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/filter.svg"),
    );
    matIconRegistry.addSvgIcon(
      'success',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/success.svg"),
    );
    matIconRegistry.addSvgIcon(
      'cancel',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/cancel.svg"),
    );
    matIconRegistry.addSvgIcon(
      'general',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/general.svg"),
    );
    matIconRegistry.addSvgIcon(
      'employee',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/employees.svg"),
    );
    matIconRegistry.addSvgIcon(
      'documents',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/documents.svg"),
    );
    matIconRegistry.addSvgIcon(
      'learning',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/learning.svg"),
    );
    matIconRegistry.addSvgIcon(
      'delete',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/delete.svg"),
    );
    matIconRegistry.addSvgIcon(
      'edit',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/edit.svg"),
    );
    matIconRegistry.addSvgIcon(
      'eye',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/eye.svg"),
    );
    matIconRegistry.addSvgIcon(
      'more-vert',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/more-vert.svg"),
    );
    matIconRegistry.addSvgIcon(
      'delete',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/delete.svg"),
    );
    matIconRegistry.addSvgIcon(
      'warning',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/caution.svg"),
    );
    matIconRegistry.addSvgIcon(
      'payroll',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/payroll.svg"),
    );
    matIconRegistry.addSvgIcon(
      'leave',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/leave.svg"),
    );
    matIconRegistry.addSvgIcon(
      'payment',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/payment.svg"),
    );
    matIconRegistry.addSvgIcon(
      'performance',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/performance.svg"),
    );
    matIconRegistry.addSvgIcon(
      'learnings',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/learnings.svg"),
    );
    matIconRegistry.addSvgIcon(
      'timesheet',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/timesheet.svg"),
    );
    matIconRegistry.addSvgIcon(
      'scheduling',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/scheduling.svg"),
    );
    matIconRegistry.addSvgIcon(
      'engagement',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/engagement.svg"),
    );
    matIconRegistry.addSvgIcon(
      'reports-analytics',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/reports-analytics.svg"),
    );
    matIconRegistry.addSvgIcon(
      'recruitment',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/recruitment.svg"),
    );
    matIconRegistry.addSvgIcon(
      'clear',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/clear.svg"),
    );
    matIconRegistry.addSvgIcon(
      'chevron-right',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/chevron-right.svg"),
    );
   matIconRegistry.addSvgIcon(
      'chevron-left',
     domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/chevron-left.svg"),
    );
    matIconRegistry.addSvgIcon(
      'check',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/check.svg"),
    );
    matIconRegistry.addSvgIcon(
      'company-menu-logo',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/company-menu-logo.svg"),
    );
    matIconRegistry.addSvgIcon(
      'schedule',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/schedule.svg"),
    );
    matIconRegistry.addSvgIcon(
      'benefits',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/benefits.svg")
    );
    matIconRegistry.addSvgIcon(
      'email-alerts',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/email-alerts.svg")
    );
    matIconRegistry.addSvgIcon(
      'pension',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/pension.svg")
    );
    matIconRegistry.addSvgIcon(
      'workflow',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/workflow.svg")
    );
    matIconRegistry.addSvgIcon(
      'person',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/person.svg")
    );
    matIconRegistry.addSvgIcon(
      'information',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/information.svg")
    );
    matIconRegistry.addSvgIcon(
      'access-levels',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/access-levels.svg")
    );
    matIconRegistry.addSvgIcon(
      'holidays',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/holidays.svg")
    );
    matIconRegistry.addSvgIcon(
      'onboarding',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/onboarding.svg")
    );
    matIconRegistry.addSvgIcon(
      'time-tracking',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/time-tracking.svg")
    );
    matIconRegistry.addSvgIcon(
      'salary',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/salary.svg")
    );
    matIconRegistry.addSvgIcon(
      'google',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/google.svg")
    );
    //TEST-ICONS
    matIconRegistry.addSvgIcon(
      'nigeria-flag',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/nigeria-flag.svg")
    );
    matIconRegistry.addSvgIcon(
      'manager-face',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/manager-face.svg")
    );
    matIconRegistry.addSvgIcon(
      'google',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/google.svg")
    );
    matIconRegistry.addSvgIcon(
      'safari',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/safari.svg")
    );
    matIconRegistry.addSvgIcon(
      'opera',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/opera.svg")
    );
    matIconRegistry.addSvgIcon(
      'firefox',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/firefox.svg")
    );
    matIconRegistry.addSvgIcon(
      'apple',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/apple.svg")
    );
    matIconRegistry.addSvgIcon(
      'windows',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/windows.svg")
    );
    matIconRegistry.addSvgIcon(
      'linux',
      domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/linux.svg")
    );
  }
}

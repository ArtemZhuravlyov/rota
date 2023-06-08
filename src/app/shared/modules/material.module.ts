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
  }
}

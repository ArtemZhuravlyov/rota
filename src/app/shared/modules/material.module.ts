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
  MatProgressSpinnerModule
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
  constructor(
    private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer,
  ){
    this.matIconRegistry.addSvgIcon(
      'excel',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/excel.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'download',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/download.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'download-file',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/download-file.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'long-arrow',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/long-arrow.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'settings',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/settings.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'search',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/search.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'export',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/export.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'print',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/print.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'add',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/add.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'help',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/help.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'notifications',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/notifications.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'filter',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/filter.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'success',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/success.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'cancel',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/cancel.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'general',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/general.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'employee',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/employees.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'documents',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/documents.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'learning',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/learning.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'delete',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/delete.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'edit',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/edit.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'eye',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/eye.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'more-vert',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/more-vert.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'delete',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/delete.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'warning',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/caution.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'payroll',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/payroll.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'leave',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/leave.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'payment',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/payment.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'performance',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/performance.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'learnings',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/learnings.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'timesheet',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/timesheet.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'scheduling',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/scheduling.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'engagement',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/engagement.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'reports-analytics',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/reports-analytics.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'recruitment',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/recruitment.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'clear',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/clear.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'chevron-right',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/chevron-right.svg"),
    );
    this.matIconRegistry.addSvgIcon(
      'chevron-left',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/chevron-left.svg"),
    );
  }
}

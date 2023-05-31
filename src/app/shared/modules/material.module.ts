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
import { MatStepperModule } from "@angular/material/stepper";
import { DomSanitizer } from "@angular/platform-browser";

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
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";
import { MatInputModule } from "@angular/material/input";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatSelectModule,
  MatInputModule,
  MatSlideToggleModule,
  MatTableModule,
]

@NgModule({
  declarations: [],
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
        'notification',
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/notification.svg"),
    );
    this.matIconRegistry.addSvgIcon(
        'settings',
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/settings.svg"),
    );
    this.matIconRegistry.addSvgIcon(
        'help',
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/help.svg"),
    );
    this.matIconRegistry.addSvgIcon(
        'person',
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/person.svg"),
    );
    this.matIconRegistry.addSvgIcon(
        'question',
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/question.svg"),
    );
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubMenuComponent } from './sub-menu.component';
import { MaterialModule } from '../material.module';
import { MenuTogglerModule } from "@shared/modules/menu-toggler/menu-toggler.module";

@NgModule({
  declarations: [
    SubMenuComponent
  ],
    imports: [
        CommonModule,
        MaterialModule,
        MenuTogglerModule,
    ],
  exports: [
    SubMenuComponent
  ]
})
export class SubMenuModule { }

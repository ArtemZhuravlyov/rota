import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuToggleComponent } from './menu-toggle.component';
import { MatIconModule } from "@angular/material/icon";



@NgModule({
  declarations: [
    MenuToggleComponent
  ],
  exports: [
    MenuToggleComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class MenuTogglerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { MaterialModule } from "../modules/material.module";
import { TranslateModule } from "@ngx-translate/core";



@NgModule({
  declarations: [
    DropdownComponent
  ],
  exports: [
    DropdownComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
  ]
})
export class DropdownModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputErrorComponent } from './input-error.component';
import { MaterialModule } from "@shared/modules/material.module";
import { TranslateModule } from "@ngx-translate/core";



@NgModule({
  declarations: [
    InputErrorComponent
  ],
  exports: [
    InputErrorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
  ]
})
export class InputErrorModule { }

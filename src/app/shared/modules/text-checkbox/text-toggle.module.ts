import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextToggleComponent } from './text-toggle.component';
import { MaterialModule } from "@shared/modules/material.module";
import { TranslateModule } from "@ngx-translate/core";
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    TextToggleComponent
  ],
  exports: [
    TextToggleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
    ReactiveFormsModule,
  ]
})
export class TextToggleModule { }

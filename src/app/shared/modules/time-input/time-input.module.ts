import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeInputComponent } from './time-input.component';
import { MaterialModule } from "@shared/modules/material.module";
import { TranslateModule } from "@ngx-translate/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    TimeInputComponent
  ],
  exports: [
    TimeInputComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TimeInputModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerComponent } from './progress-spinner.component';
import { MaterialModule } from "@shared/modules/material.module";



@NgModule({
  declarations: [
    ProgressSpinnerComponent
  ],
  exports: [
    ProgressSpinnerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ProgressSpinnerModule { }

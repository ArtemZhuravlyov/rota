import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileInputComponent } from './file-input.component';
import { MaterialModule } from "@shared/modules/material.module";
import { ButtonModule } from "@shared/modules/button/button.module";
import { TranslateModule } from "@ngx-translate/core";



@NgModule({
  declarations: [
    FileInputComponent
  ],
  exports: [
    FileInputComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ButtonModule,
    TranslateModule
  ]
})
export class FileInputModule { }

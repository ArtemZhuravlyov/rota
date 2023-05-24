import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './search-input.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "@shared/modules/material.module";
import { TranslateModule } from "@ngx-translate/core";
import { ButtonModule } from "@shared/modules/button/button.module";



@NgModule({
  declarations: [
    SearchInputComponent
  ],
  exports: [
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    TranslateModule,
    ButtonModule,
    FormsModule
  ]
})
export class SearchInputModule { }

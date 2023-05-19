import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextboxComponent } from './textbox.component';
import { MaterialModule } from "../material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { RouterLink } from "@angular/router";
import { InputErrorModule } from "@shared/modules/input-error/input-error.module";

@NgModule({
  declarations: [
    TextboxComponent
  ],
  exports: [
    TextboxComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    TranslateModule,
    RouterLink,
    ReactiveFormsModule,
    InputErrorModule,
  ]
})
export class TextboxModule { }

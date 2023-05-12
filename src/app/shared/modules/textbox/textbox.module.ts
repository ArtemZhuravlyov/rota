import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextboxComponent } from './textbox.component';
import { MaterialModule } from "../material.module";
import { FormsModule } from "@angular/forms";

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
  ]
})
export class TextboxModule { }

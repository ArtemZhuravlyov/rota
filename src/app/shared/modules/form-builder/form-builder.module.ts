import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilderComponent} from "./form-builder.component";
import {ReactiveFormsModule} from "@angular/forms";
import {TextboxModule} from "../textbox/textbox.module";
import {MaterialModule} from "../material.module";
import {DropdownModule} from "@shared/modules/dropdown/dropdown.module";
import {PhoneSelectModule} from "@shared/modules/autocomplete/phone-select.module";

@NgModule({
  declarations: [FormBuilderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextboxModule,
    MaterialModule,
    DropdownModule,
    PhoneSelectModule,
  ],
  exports: [FormBuilderComponent]
})
export class FormBuilderModule { }

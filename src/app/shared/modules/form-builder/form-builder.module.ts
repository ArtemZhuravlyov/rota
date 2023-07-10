import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilderComponent} from "./form-builder.component";
import {ReactiveFormsModule} from "@angular/forms";
import {TextboxModule} from "../textbox/textbox.module";
import {MaterialModule} from "../material.module";
import {DropdownModule} from "@shared/modules/dropdown/dropdown.module";
import {PhoneSelectModule} from "@shared/modules/autocomplete/phone-select.module";
import {DatepickerModule} from "@shared/modules/datepicker/datepicker.module";
import { TranslateModule } from "@ngx-translate/core";
import { ButtonModule } from "@shared/modules/button/button.module";
import { FileInputModule } from "@shared/modules/file-input/file-input.module";
import { TextToggleModule } from "@shared/modules/text-checkbox/text-toggle.module";
import { TimeInputModule } from "@shared/modules/time-input/time-input.module";

@NgModule({
  declarations: [FormBuilderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    TextboxModule,
    DropdownModule,
    PhoneSelectModule,
    TranslateModule,
    ButtonModule,
    FileInputModule,
    TextToggleModule,
    TimeInputModule,
    DatepickerModule
  ],
  exports: [FormBuilderComponent]
})
export class FormBuilderModule { }

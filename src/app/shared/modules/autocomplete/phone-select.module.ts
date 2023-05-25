import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneSelectComponent } from './phone-select.component';
import { CountryFlagModule } from "@shared/pipes/country-flag/country-flag.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { TranslateModule } from "@ngx-translate/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "@shared/modules/material.module";



@NgModule({
  declarations: [
    PhoneSelectComponent
  ],
  exports: [
    PhoneSelectComponent
  ],
  imports: [
    CommonModule,
    CountryFlagModule,
    TranslateModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class PhoneSelectModule { }

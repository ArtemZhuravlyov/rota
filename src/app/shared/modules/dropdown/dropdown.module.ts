import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { MaterialModule } from "../material.module";
import { TranslateModule } from "@ngx-translate/core";
import { CountryFlagModule } from "@shared/pipes/country-flag/country-flag.module";
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    DropdownComponent
  ],
  exports: [
    DropdownComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
    CountryFlagModule,
    FormsModule,
  ]
})
export class DropdownModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { MaterialModule } from "../material.module";
import { TranslateModule } from "@ngx-translate/core";
import { CountryFlagModule } from "@shared/pipes/country-flag/country-flag.module";
import { FormsModule } from "@angular/forms";
import { SearchInputModule } from "@shared/modules/search-input/search-input.module";
import { FilterModule } from "@shared/pipes/filter/filter.module";



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
    SearchInputModule,
    FilterModule,
  ]
})
export class DropdownModule { }

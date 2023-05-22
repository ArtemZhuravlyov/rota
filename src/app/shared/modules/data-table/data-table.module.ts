import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import { MaterialModule } from "../material.module";
import { TranslateModule } from '@ngx-translate/core';
import { CountryModule } from '@shared/pipes/country/country.module';
import { ButtonModule } from '@shared/modules/button/button.module';
import { DropdownMenuModule } from '@shared/modules/dropdown-menu/dropdown-menu.module';

@NgModule({
  declarations: [
    DataTableComponent
  ],
  exports: [
    DataTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
    CountryModule,
    ButtonModule,
    DropdownMenuModule,
  ]
})
export class DataTableModule { }

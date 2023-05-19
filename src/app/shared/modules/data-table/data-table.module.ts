import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import { MaterialModule } from "../material.module";



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
  ]
})
export class DataTableModule { }

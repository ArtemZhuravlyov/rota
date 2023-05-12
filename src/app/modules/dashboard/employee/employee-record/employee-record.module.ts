import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRecordRoutingModule } from './employee-record-routing.module';
import { EmployeeRecordComponent } from './employee-record.component';


@NgModule({
  declarations: [
    EmployeeRecordComponent
  ],
  imports: [
    CommonModule,
    EmployeeRecordRoutingModule
  ]
})
export class EmployeeRecordModule { }

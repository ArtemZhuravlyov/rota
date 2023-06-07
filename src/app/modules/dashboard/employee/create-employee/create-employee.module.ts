import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeeComponent } from './create-employee.component';
import {
  CreateEmployeeRoutingModule
} from "@app/modules/dashboard/employee/create-employee/create-employee-routing.module";



@NgModule({
  declarations: [
    CreateEmployeeComponent
  ],
  imports: [
    CommonModule,
    CreateEmployeeRoutingModule,
  ]
})
export class CreateEmployeeModule { }

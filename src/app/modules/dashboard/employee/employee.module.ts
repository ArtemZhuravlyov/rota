import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { SubMenuModule } from '../../../shared/modules/sub-menu/sub-menu.module';
import { MaterialModule } from "../../../shared/modules/material.module";

@NgModule({
  declarations: [
    EmployeeComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SubMenuModule,
    MaterialModule,
  ]
})
export class EmployeeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { PageHeaderModule } from "@shared/modules/page-header/page-header.module";
import { EmployeesRoutingModule } from "@app/modules/dashboard/employee/employees/employees-routing.module";
import { ButtonModule } from "@shared/modules/button/button.module";
import { TranslateModule } from "@ngx-translate/core";
import { DataTableModule } from "@shared/modules/data-table/data-table.module";



@NgModule({
  declarations: [
    EmployeesComponent,
  ],
  imports: [
    CommonModule,
    PageHeaderModule,
    EmployeesRoutingModule,
    ButtonModule,
    TranslateModule,
    DataTableModule,
  ],
})
export class EmployeesModule { }

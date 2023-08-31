import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { ButtonModule } from '@shared/modules/button/button.module';
import { DataTableModule } from '@shared/modules/data-table/data-table.module';
import { PageHeaderModule } from '@shared/modules/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [EmployeesComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ButtonModule,
    DataTableModule,
    PageHeaderModule,
    TranslateModule,
  ],
})
export class EmployeesModule {}

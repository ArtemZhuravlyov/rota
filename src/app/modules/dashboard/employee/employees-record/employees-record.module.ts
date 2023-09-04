import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRecordRoutingModule } from './employees-record-routing.module';
import { EmployeesRecordComponent } from './employees-record.component';
import { ButtonModule } from '@shared/modules/button/button.module';
import { DataTableModule } from '@shared/modules/data-table/data-table.module';
import { PageHeaderModule } from '@shared/modules/page-header/page-header.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [EmployeesRecordComponent],
  imports: [
    CommonModule,
    EmployeesRecordRoutingModule,
    ButtonModule,
    DataTableModule,
    PageHeaderModule,
    TranslateModule,
  ],
})
export class EmployeesRecordModule {}

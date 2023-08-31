import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesTypeComponent } from './employees-type.component';
import { PageHeaderModule } from '@shared/modules/page-header/page-header.module';
import { ButtonModule } from '@shared/modules/button/button.module';
import { TranslateModule } from '@ngx-translate/core';
import { DataTableModule } from '@shared/modules/data-table/data-table.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { EmployeesTypeRoutingModule } from '@app/modules/dashboard/employee/employees-type/employees-type-routing.module';
import { MaterialModule } from '@shared/modules/material.module';
import { RsSpinnerModule } from '@shared/directives/rs-spinner/rs-spinner.module';

@NgModule({
  declarations: [EmployeesTypeComponent],
  imports: [
    CommonModule,
    PageHeaderModule,
    EmployeesTypeRoutingModule,
    ButtonModule,
    TranslateModule,
    DataTableModule,
    MatTabsModule,
    MatIconModule,
    MaterialModule,
    RsSpinnerModule,
    RsSpinnerModule,
  ],
})
export class EmployeesTypeModule {}

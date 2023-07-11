import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeeComponent } from './create-employee.component';
import {
  CreateEmployeeRoutingModule
} from "@app/modules/dashboard/employee/create-employee/create-employee-routing.module";
import {PageHeaderModule} from "@shared/modules/page-header/page-header.module";
import {MatTabsModule} from "@angular/material/tabs";
import {FormBuilderModule} from "@shared/modules/form-builder/form-builder.module";
import {FormCardModule} from "@shared/modules/form-card/form-card.module";
import {MatIconModule} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";
import {ButtonModule} from "@shared/modules/button/button.module";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {DataTableModule} from "@shared/modules/data-table/data-table.module";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    CreateEmployeeComponent,
  ],
  imports: [
    CommonModule,
    CreateEmployeeRoutingModule,
    PageHeaderModule,
    MatTabsModule,
    FormBuilderModule,
    FormCardModule,
    MatIconModule,
    TranslateModule,
    ButtonModule,
    MatInputModule,
    MatCheckboxModule,
    DataTableModule,
    RouterLink,
  ]
})
export class CreateEmployeeModule { }

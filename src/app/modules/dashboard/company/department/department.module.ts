import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';
import { PageHeaderModule } from "@shared/modules/page-header/page-header.module";
import {TranslateModule} from "@ngx-translate/core";
import {ButtonModule} from "@shared/modules/button/button.module";
import {DataTableModule} from "@shared/modules/data-table/data-table.module";


@NgModule({
  declarations: [
    DepartmentComponent,
  ],
    imports: [
        CommonModule,
        DepartmentRoutingModule,
        PageHeaderModule,
        TranslateModule,
        ButtonModule,
        DataTableModule
    ]
})
export class DepartmentModule { }

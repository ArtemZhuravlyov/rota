import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';
import { PageHeaderModule } from "@shared/modules/page-header/page-header.module";


@NgModule({
  declarations: [
    DepartmentComponent
  ],
    imports: [
        CommonModule,
        DepartmentRoutingModule,
        PageHeaderModule
    ]
})
export class DepartmentModule { }

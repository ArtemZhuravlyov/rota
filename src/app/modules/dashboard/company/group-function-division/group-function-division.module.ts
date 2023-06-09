import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupFunctionDivisionRoutingModule } from './group-function-division-routing.module';
import { GroupFunctionDivisionComponent } from './group-function-division.component';
import { PageHeaderModule } from "@shared/modules/page-header/page-header.module";
import { ButtonModule } from "@shared/modules/button/button.module";
import { TranslateModule } from "@ngx-translate/core";
import { DataTableModule } from "@shared/modules/data-table/data-table.module";


@NgModule({
  declarations: [
    GroupFunctionDivisionComponent
  ],
  imports: [
    CommonModule,
    GroupFunctionDivisionRoutingModule,
    PageHeaderModule,
    ButtonModule,
    TranslateModule,
    DataTableModule
  ]
})
export class GroupFunctionDivisionModule { }

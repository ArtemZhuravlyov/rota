import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GradeCategoryLevelsComponent
} from "@app/modules/dashboard/company/grade-category/grade-category-levels/grade-category-levels.component";
import {PageHeaderModule} from "@shared/modules/page-header/page-header.module";
import {
  GradeCategoryLevelsRoutingModule
} from "@app/modules/dashboard/company/grade-category/grade-category-levels/grade-category-levels-routing.module";
import {DataTableModule} from "@shared/modules/data-table/data-table.module";



@NgModule({
  declarations: [
    GradeCategoryLevelsComponent
  ],
  imports: [
    CommonModule,
    PageHeaderModule,
    GradeCategoryLevelsRoutingModule,
    DataTableModule
  ]
})
export class GradeCategoryLevelsModule { }

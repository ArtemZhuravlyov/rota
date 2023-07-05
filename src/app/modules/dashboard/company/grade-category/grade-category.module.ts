import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradeCategoryRoutingModule } from './grade-category-routing.module';
import { GradeCategoryComponent } from './grade-category.component';
import { PageHeaderModule } from "@shared/modules/page-header/page-header.module";
import { ButtonModule } from "@shared/modules/button/button.module";
import { TranslateModule } from "@ngx-translate/core";
import { DataTableModule } from "@shared/modules/data-table/data-table.module";


@NgModule({
  declarations: [
    GradeCategoryComponent
  ],
  imports: [
    CommonModule,
    GradeCategoryRoutingModule,
    PageHeaderModule,
    ButtonModule,
    TranslateModule,
    DataTableModule
  ]
})
export class GradeCategoryModule { }

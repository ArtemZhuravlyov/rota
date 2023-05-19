import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradeCategoryRoutingModule } from './grade-category-routing.module';
import { GradeCategoryComponent } from './grade-category.component';
import { PageHeaderModule } from "../../../../shared/modules/page-header/page-header.module";


@NgModule({
  declarations: [
    GradeCategoryComponent
  ],
    imports: [
        CommonModule,
        GradeCategoryRoutingModule,
        PageHeaderModule
    ]
})
export class GradeCategoryModule { }

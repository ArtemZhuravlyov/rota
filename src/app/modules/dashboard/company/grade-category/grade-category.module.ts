import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradeCategoryRoutingModule } from './grade-category-routing.module';
import { GradeCategoryComponent } from './grade-category.component';


@NgModule({
  declarations: [
    GradeCategoryComponent
  ],
  imports: [
    CommonModule,
    GradeCategoryRoutingModule
  ]
})
export class GradeCategoryModule { }

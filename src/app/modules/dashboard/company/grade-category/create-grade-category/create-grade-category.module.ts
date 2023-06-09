import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateGradeCategoryComponent } from './create-grade-category.component';
import {
  CreateGradeCategoryRoutingModule
} from "@app/modules/dashboard/company/grade-category/create-grade-category/create-grade-category-routing.module";
import { PageHeaderModule } from "@shared/modules/page-header/page-header.module";
import { ButtonModule } from "@shared/modules/button/button.module";
import { FormCardModule } from "@shared/modules/form-card/form-card.module";
import { TranslateModule } from "@ngx-translate/core";
import { FormBuilderModule } from "@shared/modules/form-builder/form-builder.module";



@NgModule({
  declarations: [
    CreateGradeCategoryComponent
  ],
  imports: [
    CommonModule,
    CreateGradeCategoryRoutingModule,
    PageHeaderModule,
    ButtonModule,
    FormCardModule,
    TranslateModule,
    FormBuilderModule,
  ]
})
export class CreateGradeCategoryModule { }

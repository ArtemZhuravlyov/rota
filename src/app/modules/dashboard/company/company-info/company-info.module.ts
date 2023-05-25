import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyInfoRoutingModule } from './company-info-routing.module';
import { CompanyInfoComponent } from './company-info.component';
import { PageHeaderModule } from "@shared/modules/page-header/page-header.module";
import { MaterialModule } from "@shared/modules/material.module";
import { ButtonModule } from "@shared/modules/button/button.module";
import { DataTableModule } from "@shared/modules/data-table/data-table.module";
import { TextboxModule } from "@shared/modules/textbox/textbox.module";
import { FormBuilderModule } from "@shared/modules/form-builder/form-builder.module";
import { CreateCompanyComponent } from './create-company/create-company.component';
import { TranslateModule } from "@ngx-translate/core";
import { FormCardModule } from "@shared/modules/form-card/form-card.module";

@NgModule({
  declarations: [
    CompanyInfoComponent,
    CreateCompanyComponent
  ],
  imports: [
    CommonModule,
    CompanyInfoRoutingModule,
    PageHeaderModule,
    MaterialModule,
    ButtonModule,
    DataTableModule,
    TextboxModule,
    FormBuilderModule,
    TranslateModule,
    FormCardModule,
    TranslateModule,
  ]
})
export class CompanyInfoModule { }

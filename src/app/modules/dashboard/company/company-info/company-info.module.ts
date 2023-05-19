import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyInfoRoutingModule } from './company-info-routing.module';
import { CompanyInfoComponent } from './company-info.component';
import { PageHeaderModule } from "../../../../shared/modules/page-header/page-header.module";
import { MaterialModule } from "../../../../shared/modules/material.module";
import { ButtonModule } from "../../../../shared/modules/button/button.module";
import { DataTableModule } from "../../../../shared/modules/data-table/data-table.module";


@NgModule({
  declarations: [
    CompanyInfoComponent
  ],
  imports: [
    CommonModule,
    CompanyInfoRoutingModule,
    PageHeaderModule,
    MaterialModule,
    ButtonModule,
    DataTableModule,
  ]
})
export class CompanyInfoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from "./company.component";
import { SubMenuModule } from "../../../shared/modules/sub-menu/sub-menu.module";
import { MaterialModule } from "../../../shared/modules/material.module";


@NgModule({
  declarations: [CompanyComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SubMenuModule,
    MaterialModule
  ]
})
export class CompanyModule { }

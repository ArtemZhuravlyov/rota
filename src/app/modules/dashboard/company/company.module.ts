import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from "./company.component";
import { SubMenuModule } from "@shared/modules/sub-menu/sub-menu.module";
import { MaterialModule } from "@shared/modules/material.module";
import { SubMenuButtonModule } from "@shared/modules/sub-menu-button/sub-menu-button.module";


@NgModule({
  declarations: [CompanyComponent],
    imports: [
        CommonModule,
        CompanyRoutingModule,
        SubMenuModule,
        MaterialModule,
        SubMenuButtonModule
    ]
})
export class CompanyModule { }

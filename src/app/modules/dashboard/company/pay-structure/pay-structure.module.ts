import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayStructureRoutingModule } from './pay-structure-routing.module';
import { PayStructureComponent } from './pay-structure.component';
import { PageHeaderModule } from "@shared/modules/page-header/page-header.module";


@NgModule({
  declarations: [
    PayStructureComponent
  ],
    imports: [
        CommonModule,
        PayStructureRoutingModule,
        PageHeaderModule
    ]
})
export class PayStructureModule { }

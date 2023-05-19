import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BenefitRoutingModule } from './benefit-routing.module';
import { BenefitComponent } from './benefit.component';
import { PageHeaderModule } from "../../../../shared/modules/page-header/page-header.module";


@NgModule({
  declarations: [
    BenefitComponent
  ],
    imports: [
        CommonModule,
        BenefitRoutingModule,
        PageHeaderModule
    ]
})
export class BenefitModule { }

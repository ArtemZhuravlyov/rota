import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BenefitRoutingModule } from './benefit-routing.module';
import { BenefitComponent } from './benefit.component';


@NgModule({
  declarations: [
    BenefitComponent
  ],
  imports: [
    CommonModule,
    BenefitRoutingModule
  ]
})
export class BenefitModule { }

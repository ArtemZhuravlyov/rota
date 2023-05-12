import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayStructureRoutingModule } from './pay-structure-routing.module';
import { PayStructureComponent } from './pay-structure.component';


@NgModule({
  declarations: [
    PayStructureComponent
  ],
  imports: [
    CommonModule,
    PayStructureRoutingModule
  ]
})
export class PayStructureModule { }

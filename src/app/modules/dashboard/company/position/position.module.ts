import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionRoutingModule } from './position-routing.module';
import { PositionComponent } from './position.component';
import { PageHeaderModule } from "../../../../shared/modules/page-header/page-header.module";


@NgModule({
  declarations: [
    PositionComponent
  ],
    imports: [
        CommonModule,
        PositionRoutingModule,
        PageHeaderModule
    ]
})
export class PositionModule { }

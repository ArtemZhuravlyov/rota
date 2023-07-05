import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionRoutingModule } from './position-routing.module';
import { PositionComponent } from './position.component';
import { PageHeaderModule } from "@shared/modules/page-header/page-header.module";
import {ButtonModule} from "@shared/modules/button/button.module";
import {DataTableModule} from "@shared/modules/data-table/data-table.module";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    PositionComponent,
  ],
  imports: [
    CommonModule,
    PositionRoutingModule,
    PageHeaderModule,
    ButtonModule,
    DataTableModule,
    TranslateModule
  ]
})
export class PositionModule { }

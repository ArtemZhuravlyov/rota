import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { GroupComponent } from './group.component';
import { PageHeaderModule } from "../../../../shared/modules/page-header/page-header.module";


@NgModule({
  declarations: [
    GroupComponent
  ],
    imports: [
        CommonModule,
        GroupRoutingModule,
        PageHeaderModule
    ]
})
export class GroupModule { }

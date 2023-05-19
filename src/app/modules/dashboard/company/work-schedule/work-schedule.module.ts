import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkScheduleRoutingModule } from './work-schedule-routing.module';
import { WorkScheduleComponent } from './work-schedule.component';
import { PageHeaderModule } from "../../../../shared/modules/page-header/page-header.module";


@NgModule({
  declarations: [
    WorkScheduleComponent
  ],
    imports: [
        CommonModule,
        WorkScheduleRoutingModule,
        PageHeaderModule
    ]
})
export class WorkScheduleModule { }

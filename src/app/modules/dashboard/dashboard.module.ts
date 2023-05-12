import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../../shared/modules/material.module';
import { HeaderModule } from "../../shared/modules/header/header.module";

@NgModule({
  declarations: [
    DashboardLayoutComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        HeaderModule,
        MaterialModule,
    ]
})
export class DashboardModule { }

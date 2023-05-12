import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationChartRoutingModule } from './organization-chart-routing.module';
import { OrganizationChartComponent } from './organization-chart.component';


@NgModule({
  declarations: [
    OrganizationChartComponent
  ],
  imports: [
    CommonModule,
    OrganizationChartRoutingModule
  ]
})
export class OrganizationChartModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganogramComponent } from './organogram.component';
import { OrganogramRoutingModule } from '@modules/dashboard/employee/organogram/organogram-routing.module';
import { PageHeaderModule } from '@shared/modules/page-header/page-header.module';
import { OrgChartComponent } from '@modules/dashboard/employee/organogram/org-chart/org-chart.component';
import { ButtonModule } from '@shared/modules/button/button.module';

@NgModule({
  declarations: [OrganogramComponent, OrgChartComponent],
  imports: [
    CommonModule,
    OrganogramRoutingModule,
    PageHeaderModule,
    ButtonModule,
  ],
})
export class OrganogramModule {}

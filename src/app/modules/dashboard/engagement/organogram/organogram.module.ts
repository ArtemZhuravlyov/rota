import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganogramComponent } from './organogram.component';
import { OrganogramRoutingModule } from '@app/modules/dashboard/engagement/organogram/organogram-routing.module';
import { PageHeaderModule } from '@shared/modules/page-header/page-header.module';
import { OrgChartComponent } from '@app/modules/dashboard/engagement/organogram/org-chart/org-chart.component';
import { ButtonModule } from '@shared/modules/button/button.module';



@NgModule({
  declarations: [
    OrganogramComponent,
    OrgChartComponent
  ],
  imports: [
    CommonModule,
    OrganogramRoutingModule,
    PageHeaderModule,
    ButtonModule,
  ],
})
export class OrganogramModule { }

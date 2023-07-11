import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditEmployeeRoutingModule } from './edit-employee-routing.module';
import { EditEmployeeComponent } from './edit-employee.component';
import { QualificationsComponent } from './employee-profile/qualifications/qualifications.component';
import {DataTableModule} from "@shared/modules/data-table/data-table.module";
import { DocumentsComponent } from './employee-profile/documents/documents.component';
import { CompensationsComponent } from './employee-profile/compensations/compensations.component';
import { StatutoryContributionsComponent } from './employee-profile/statutory-contributions/statutory-contributions.component';
import { BenefitsComponent } from './employee-profile/benefits/benefits.component';
import { SalaryReviewsComponent } from './employee-profile/salary-reviews/salary-reviews.component';
import { PaySlipsComponent } from './employee-profile/pay-slips/pay-slips.component';
import {MatTabsModule} from "@angular/material/tabs";
import {PageHeaderModule} from "@shared/modules/page-header/page-header.module";


@NgModule({
  declarations: [
    EditEmployeeComponent,
    QualificationsComponent,
    DocumentsComponent,
    CompensationsComponent,
    StatutoryContributionsComponent,
    BenefitsComponent,
    SalaryReviewsComponent,
    PaySlipsComponent
  ],
  imports: [
    CommonModule,
    EditEmployeeRoutingModule,
    DataTableModule,
    MatTabsModule,
    PageHeaderModule
  ]
})
export class EditEmployeeModule { }

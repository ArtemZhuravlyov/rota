import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoEmployeeRoutingModule } from './info-employee-routing.module';
import { InfoEmployeeComponent } from './info-employee.component';
import { ContactInformationComponent } from './employee-settings/contact-information/contact-information.component';
import {FormBuilderModule} from "@shared/modules/form-builder/form-builder.module";
import {FormCardModule} from "@shared/modules/form-card/form-card.module";
import {TranslateModule} from "@ngx-translate/core";
import { WorkInformationComponent } from './employee-settings/work-information/work-information.component';
import { PaymentInformationComponent } from './employee-settings/payment-information/payment-information.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTabsModule} from "@angular/material/tabs";
import {PageHeaderModule} from "@shared/modules/page-header/page-header.module";
import {ButtonModule} from "@shared/modules/button/button.module";
import {MatIconModule} from "@angular/material/icon";
import { QualificationsComponent } from './employee-profile/qualifications/qualifications.component';
import {DataTableModule} from "@shared/modules/data-table/data-table.module";
import { DocumentsComponent } from './employee-profile/documents/documents.component';
import { CompensationsComponent } from './employee-profile/compensations/compensations.component';
import { StatutoryContributionsComponent } from './employee-profile/statutory-contributions/statutory-contributions.component';
import { BenefitsComponent } from './employee-profile/benefits/benefits.component';
import { SalaryReviewsComponent } from './employee-profile/salary-reviews/salary-reviews.component';
import { PaySlipsComponent } from './employee-profile/pay-slips/pay-slips.component';


@NgModule({
  declarations: [
    InfoEmployeeComponent,
    ContactInformationComponent,
    WorkInformationComponent,
    PaymentInformationComponent,
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
    InfoEmployeeRoutingModule,
    FormBuilderModule,
    FormCardModule,
    TranslateModule,
    MatCheckboxModule,
    MatTabsModule,
    PageHeaderModule,
    ButtonModule,
    MatIconModule,
    DataTableModule
  ]
})
export class InfoEmployeeModule { }

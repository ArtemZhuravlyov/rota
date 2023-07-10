import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeeComponent } from './create-employee.component';
import {
  CreateEmployeeRoutingModule
} from "@app/modules/dashboard/employee/create-employee/create-employee-routing.module";
import {PageHeaderModule} from "@shared/modules/page-header/page-header.module";
import {MatTabsModule} from "@angular/material/tabs";
import {FormBuilderModule} from "@shared/modules/form-builder/form-builder.module";
import {FormCardModule} from "@shared/modules/form-card/form-card.module";
import {MatIconModule} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";
import {ButtonModule} from "@shared/modules/button/button.module";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {
  PersonalDetailsComponent
} from "@app/modules/dashboard/employee/create-employee/employee-settings/personal-details/personal-details.component";
import {
  ContactInformationComponent
} from "@app/modules/dashboard/employee/create-employee/employee-settings/contact-information/contact-information.component";
import {
  WorkInformationComponent
} from "@app/modules/dashboard/employee/create-employee/employee-settings/work-information/work-information.component";
import {
  PaymentInformationComponent
} from "@app/modules/dashboard/employee/create-employee/employee-settings/payment-information/payment-information.component";
import {DataTableModule} from "@shared/modules/data-table/data-table.module";
import { QualificationsComponent } from './employee-profile/qualifications/qualifications.component';
import { PaySlipsComponent } from './employee-profile/pay-slips/pay-slips.component';
import { DocumentsComponent } from './employee-profile/documents/documents.component';
import { CompensationsComponent } from './employee-profile/compensations/compensations.component';
import { StatutoryContributionsComponent } from './employee-profile/statutory-contributions/statutory-contributions.component';
import { BenefitsComponent } from './employee-profile/benefits/benefits.component';
import { SalaryReviewsComponent } from './employee-profile/salary-reviews/salary-reviews.component';

@NgModule({
  declarations: [
    CreateEmployeeComponent,
    PersonalDetailsComponent,
    ContactInformationComponent,
    WorkInformationComponent,
    PaymentInformationComponent,
    QualificationsComponent,
    PaySlipsComponent,
    DocumentsComponent,
    CompensationsComponent,
    StatutoryContributionsComponent,
    BenefitsComponent,
    SalaryReviewsComponent,
  ],
  imports: [
    CommonModule,
    CreateEmployeeRoutingModule,
    PageHeaderModule,
    MatTabsModule,
    FormBuilderModule,
    FormCardModule,
    MatIconModule,
    TranslateModule,
    ButtonModule,
    MatInputModule,
    MatCheckboxModule,
    DataTableModule,
  ]
})
export class CreateEmployeeModule { }

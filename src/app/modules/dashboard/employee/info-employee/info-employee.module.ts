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


@NgModule({
  declarations: [
    InfoEmployeeComponent,
    ContactInformationComponent,
    WorkInformationComponent,
    PaymentInformationComponent
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
        ButtonModule
    ]
})
export class InfoEmployeeModule { }

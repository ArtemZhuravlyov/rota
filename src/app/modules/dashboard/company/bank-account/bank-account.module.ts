import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankAccountRoutingModule } from './bank-account-routing.module';
import { BankAccountComponent } from './bank-account.component';
import { PageHeaderModule } from "@shared/modules/page-header/page-header.module";
import { DataTableModule } from "@shared/modules/data-table/data-table.module";
import { ButtonModule } from "@shared/modules/button/button.module";
import { TranslateModule } from "@ngx-translate/core";
import { CreateBankAccountComponent } from './create-bank-account/create-bank-account.component';
import { FormBuilderModule } from "@shared/modules/form-builder/form-builder.module";
import { FormCardModule } from "@shared/modules/form-card/form-card.module";


@NgModule({
  declarations: [
    BankAccountComponent,
    CreateBankAccountComponent,
  ],
  imports: [
    CommonModule,
    BankAccountRoutingModule,
    PageHeaderModule,
    DataTableModule,
    ButtonModule,
    TranslateModule,
    FormBuilderModule,
    FormCardModule,
  ]
})
export class BankAccountModule { }

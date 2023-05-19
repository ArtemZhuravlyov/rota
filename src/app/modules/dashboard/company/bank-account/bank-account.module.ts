import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankAccountRoutingModule } from './bank-account-routing.module';
import { BankAccountComponent } from './bank-account.component';
import { PageHeaderModule } from "@shared/modules/page-header/page-header.module";


@NgModule({
  declarations: [
    BankAccountComponent
  ],
    imports: [
        CommonModule,
        BankAccountRoutingModule,
        PageHeaderModule
    ]
})
export class BankAccountModule { }

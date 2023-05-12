import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankAccountRoutingModule } from './bank-account-routing.module';
import { BankAccountComponent } from './bank-account.component';


@NgModule({
  declarations: [
    BankAccountComponent
  ],
  imports: [
    CommonModule,
    BankAccountRoutingModule
  ]
})
export class BankAccountModule { }

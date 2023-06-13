import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from "@core/enums/navigation-paths.enum";
import { BankAccountComponent } from "./bank-account.component";
import {
  CreateBankAccountComponent
} from "@app/modules/dashboard/company/bank-account/create-bank-account/create-bank-account.component";

const routes: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: BankAccountComponent,
  },
  {
    path: NavigationPaths.CREATE_BANK_ACCOUNT,
    component: CreateBankAccountComponent,
    data: {breadcrumb: 'CREATE_NEW'}
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankAccountRoutingModule { }

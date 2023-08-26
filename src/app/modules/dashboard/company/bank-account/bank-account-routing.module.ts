import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { BankAccountComponent } from './bank-account.component';
import { CreateBankAccountComponent } from '@app/modules/dashboard/company/bank-account/create-bank-account/create-bank-account.component';
import { AppRoutes } from '@core/types/app-route.type';

const routes: AppRoutes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: BankAccountComponent,
  },
  {
    path: NavigationPaths.CREATE_BANK_ACCOUNT,
    component: CreateBankAccountComponent,
    data: { breadcrumb: 'CREATE_NEW' },
  },
  {
    path: NavigationPaths.CREATE_BANK_ACCOUNT,
    loadChildren: () =>
      import('./create-bank-account/create-bank-account.module').then(
        m => m.CreateBankAccountModule
      ),
    data: { breadcrumb: 'CREATE_NEW' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankAccountRoutingModule {}

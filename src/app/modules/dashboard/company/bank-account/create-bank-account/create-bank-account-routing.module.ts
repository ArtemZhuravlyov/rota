import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes, ROUTES} from "@angular/router";
import {NavigationPaths} from "@core/enums/navigation-paths.enum";
import {
  CreateBankAccountComponent
} from "@app/modules/dashboard/company/bank-account/create-bank-account/create-bank-account.component";


const ROUTES: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    pathMatch: 'full',
    component: CreateBankAccountComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  exports: [
    RouterModule,
  ]
})
export class CreateBankAccountRoutingModule{}

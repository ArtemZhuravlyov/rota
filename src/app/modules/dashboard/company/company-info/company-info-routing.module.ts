import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from "@core/enums/navigation-paths.enum";
import { CompanyInfoComponent } from "./company-info.component";
import {
  CreateCompanyComponent
} from "@app/modules/dashboard/company/company-info/create-company/create-company.component";

const routes: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: CompanyInfoComponent,
  },
  {
    path: NavigationPaths.CREATE_COMPANY,
    component: CreateCompanyComponent,
    data: {breadcrumb: 'CREATE_NEW'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyInfoRoutingModule { }

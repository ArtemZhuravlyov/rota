import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from "../../../../core/enums/navigation-paths.enum";
import { CompanyInfoComponent } from "./company-info.component";

const routes: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: CompanyInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyInfoRoutingModule { }

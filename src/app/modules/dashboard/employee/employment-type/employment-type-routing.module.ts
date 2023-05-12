import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from "../../../../core/enums/navigation-paths.enum";
import { EmploymentTypeComponent } from "./employment-type.component";

const routes: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: EmploymentTypeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmploymentTypeRoutingModule { }

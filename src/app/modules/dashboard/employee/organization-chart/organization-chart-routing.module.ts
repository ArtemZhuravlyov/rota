import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from "../../../../core/enums/navigation-paths.enum";
import { OrganizationChartComponent } from "./organization-chart.component";

const routes: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: OrganizationChartComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationChartRoutingModule { }

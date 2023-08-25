import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { AgGridModule } from 'ag-grid-angular';
import { BenefitComponent } from '@modules/dashboard/company/benefit/benefit.component';
import { AppRoutes } from '@core/types/app-route.type';

const routes: AppRoutes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: BenefitComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), AgGridModule],
  exports: [RouterModule],
})
export class BenefitRoutingModule {}

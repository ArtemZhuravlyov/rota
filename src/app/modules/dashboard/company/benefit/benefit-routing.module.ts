import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { BenefitComponent } from '@modules/dashboard/company/benefit/benefit.component';
import { AppRoutes } from '@core/types/app-route.type';
import { NewBenefitComponent } from '@modules/dashboard/company/benefit/new-benefit/new-benefit.component';

const routes: AppRoutes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: BenefitComponent,
  },
  {
    path: NavigationPaths.CREATE_NEW_BENEFIT,
    component: NewBenefitComponent,
    data: { breadcrumb: 'NEW_BENEFIT' },
  },
  {
    path: NavigationPaths.ANY,
    redirectTo: NavigationPaths.EMPTY_PATH,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BenefitRoutingModule {}

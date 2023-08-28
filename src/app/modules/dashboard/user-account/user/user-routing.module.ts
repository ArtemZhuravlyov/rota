import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { UserComponent } from './user.component';
import { AppRoutes } from '@core/types/app-route.type';

const routes: AppRoutes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: UserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}

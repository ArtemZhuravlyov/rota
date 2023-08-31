import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from '../../../../core/enums/navigation-paths.enum';
import { PositionComponent } from './position.component';
import { AppRoutes } from '@core/types/app-route.type';

const routes: AppRoutes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: PositionComponent,
  },
  {
    path: NavigationPaths.CREATE_NEW_POSITION,
    loadChildren: () =>
      import('./create-position/create-position.module').then(
        m => m.CreatePositionModule
      ),
    data: { breadcrumb: 'CREATE_NEW' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PositionRoutingModule {}

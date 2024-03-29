import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { CreatePositionComponent } from '@app/modules/dashboard/company/position/create-position/create-position.component';
import { AppRoutes } from '@core/types/app-route.type';

const ROUTES: AppRoutes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    pathMatch: 'full',
    component: CreatePositionComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class CreatePositionRoutingModule {}

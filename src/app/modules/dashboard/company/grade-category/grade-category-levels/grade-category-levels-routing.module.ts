import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { GradeCategoryLevelsComponent } from '@app/modules/dashboard/company/grade-category/grade-category-levels/grade-category-levels.component';
import { AppRoutes } from '@core/types/app-route.type';

const ROUTES: AppRoutes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    pathMatch: 'full',
    component: GradeCategoryLevelsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class GradeCategoryLevelsRoutingModule {}

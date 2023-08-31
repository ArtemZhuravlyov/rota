import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { GradeCategoryComponent } from './grade-category.component';
import { AppRoutes } from '@core/types/app-route.type';

const routes: AppRoutes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: GradeCategoryComponent,
  },
  {
    path: NavigationPaths.CREATE_NEW_GRADE_CATEGORY,
    loadChildren: () =>
      import(
        './create-grade-category/create-grade-category.module'
      ).then(m => m.CreateGradeCategoryModule),
    data: { breadcrumb: 'CREATE_NEW' },
  },
  {
    path: NavigationPaths.GRADE_CATEGORY_LEVELS,
    loadChildren: () =>
      import(
        './grade-category-levels/grade-category-levels.module'
      ).then(m => m.GradeCategoryLevelsModule),
    data: { breadcrumb: 'GRADE_INFORMATION' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GradeCategoryRoutingModule {}

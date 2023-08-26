import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from '../../../../core/enums/navigation-paths.enum';
import { DepartmentComponent } from './department.component';
import { AppRoutes } from '@core/types/app-route.type';

const routes: AppRoutes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: DepartmentComponent,
  },
  {
    path: NavigationPaths.CREATE_NEW_DEPARTMENT,
    loadChildren: () =>
      import('./create-department/create-department.module').then(
        m => m.CreateDepartmentModule
      ),
    data: { breadcrumb: 'CREATE_NEW' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentRoutingModule {}

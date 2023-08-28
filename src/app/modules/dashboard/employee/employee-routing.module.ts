import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { ImportEmployeesComponent } from '@shared/modules/import-employees/import-employees.component';
import { TodoComponent } from '@shared/modules/todo/todo.component';
import { AppRoutes } from '@core/types/app-route.type';

const routes: AppRoutes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    children: [
      {
        path: NavigationPaths.EMPTY_PATH,
        component: EmployeeComponent,
        children: [
          {
            path: NavigationPaths.EMPTY_PATH,
            loadChildren: () =>
              import('./employees-type/employees-type.module').then(
                (m) => m.EmployeesTypeModule
              ),
            data: {
              breadcrumb: 'EMPLOYEES_TYPE',
            },
          },
          {
            path: NavigationPaths.EMPLOYEES,
            loadChildren: () =>
              import('./employees/employees.module').then(
                (m) => m.EmployeesModule
              ),
            data: {
              breadcrumb: 'EMPLOYEES_RECORD',
            },
          },
          {
            path: NavigationPaths.IMPORT_EMPLOYEES,
            component: ImportEmployeesComponent,
            data: {
              breadcrumb: 'IMPORT_EMPLOYEES',
              title: 'IMPORT_EMPLOYEES',
            },
          },
          {
            path: NavigationPaths.INFO_EMPLOYEE,
            loadChildren: () =>
              import('./info-employee/info-employee.module').then(
                m => m.InfoEmployeeModule
              ),
            data: {
              breadcrumb: 'INFO_EMPLOYEE',
              title: 'INFO_EMPLOYEE',
            },
          },
          {
            path: '**',
            component: TodoComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}

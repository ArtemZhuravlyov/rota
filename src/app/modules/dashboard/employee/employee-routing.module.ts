import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { ImportEmployeesComponent } from "@shared/modules/import-employees/import-employees.component";
import { TodoComponent } from '@shared/modules/todo/todo.component';

const routes: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    children: [
      {
        path: NavigationPaths.EMPTY_PATH,
        component: EmployeeComponent,
        children: [
          {
            path: NavigationPaths.EMPTY_PATH,
            loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule),
            data: {
              breadcrumb: 'EMPLOYEES_LIST',
            },
          },
          {
            path: NavigationPaths.CREATE_NEW_EMPLOYEE,
            loadChildren: () => import('./create-employee/create-employee.module').then(m => m.CreateEmployeeModule),
            data: {
              breadcrumb: 'CREATE_NEW',
            },
          },
          {
            path: NavigationPaths.IMPORT_EMPLOYEES,
            component: ImportEmployeesComponent,
            data: { breadcrumb: 'IMPORT_EMPLOYEES', title: 'IMPORT_EMPLOYEES' }
          },
          {
            path: '**',
            component: TodoComponent
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

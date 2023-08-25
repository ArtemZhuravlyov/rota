import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesTypeComponent } from '@app/modules/dashboard/employee/employees-type/employees-type.component';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: EmployeesTypeComponent,
  },
  {
    path: NavigationPaths.CREATE_NEW_EMPLOYEE_TYPE,
    loadChildren: () =>
      import(
        '../create-employee-type/create-employee-type.module'
      ).then((m) => m.CreateEmployeeTypeModule),
    data: {
      breadcrumb: 'CREATE_NEW',
    },
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class EmployeesTypeRoutingModule {}

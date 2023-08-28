import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeesTypeComponent } from '@app/modules/dashboard/employee/employees-type/employees-type.component';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { AppRoutes } from '@core/types/app-route.type';
import { employeesTypeResolverData } from '@modules/dashboard/employee/employees-type/employees-type.resolver';
import { EmploymentTypes } from '@core/types/employment-type.model';

export type EmployeeTypeRouteData = {
  employeeTypeData: EmploymentTypes | null;
};

export const ROUTES: AppRoutes = [
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
      ).then(m => m.CreateEmployeeTypeModule),
    data: {
      breadcrumb: 'CREATE_NEW',
    },
  },
  {
    path: `${NavigationPaths.EDIT_EMPLOYEE_TYPE}/:employeeTypeId`,
    loadChildren: () =>
      import(
        '../create-employee-type/create-employee-type.module'
      ).then(m => m.CreateEmployeeTypeModule),
    resolve: employeesTypeResolverData(),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class EmployeesTypeRoutingModule {}

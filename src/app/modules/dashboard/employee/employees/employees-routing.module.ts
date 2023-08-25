import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from '@app/modules/dashboard/employee/employees/employees.component';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: EmployeesComponent,
  },
  {
    path: NavigationPaths.CREATE_NEW_EMPLOYEE,
    loadChildren: () =>
      import('../create-employee/create-employee.module').then(
        (m) => m.CreateEmployeeModule
      ),
    data: {
      breadcrumb: 'CREATE_NEW',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}

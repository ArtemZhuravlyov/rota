import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeesRecordComponent } from '@modules/dashboard/employee/employees-record/employees-record.component';
import { AppRoutes } from '@core/types/app-route.type';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';

export const ROUTES: AppRoutes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    pathMatch: 'full',
    component: EmployeesRecordComponent,
  },
  {
    path: NavigationPaths.CREATE_NEW_EMPLOYEE,
    loadChildren: () =>
      import('../create-employee/create-employee.module').then(
        m => m.CreateEmployeeModule
      ),
    data: {
      breadcrumb: 'CREATE_NEW',
    },
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class EmployeesRecordRoutingModule {}

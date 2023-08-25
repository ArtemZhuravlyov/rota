import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from '@app/modules/dashboard/employee/employees/employees.component';
import { AppRoutes } from '@core/types/app-route.type';

export const ROUTES: AppRoutes = [
  {
    path: '',
    pathMatch: 'full',
    component: EmployeesComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}

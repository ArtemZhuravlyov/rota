import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { NavigationPaths } from '../../core/enums/navigation-paths.enum';

const routes: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: DashboardLayoutComponent,
    children: [
      {
        path: NavigationPaths.EMPTY_PATH,
        pathMatch: 'full',
        redirectTo: NavigationPaths.EMPLOYEE
      },
      {
        path: NavigationPaths.EMPLOYEE,
        loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

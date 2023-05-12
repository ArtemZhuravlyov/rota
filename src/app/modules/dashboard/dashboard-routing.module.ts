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
        path: NavigationPaths.COMPANY,
        loadChildren: () => import('./company/company.module').then(m => m.CompanyModule)
      },
      {
        path: NavigationPaths.EMPLOYEE,
        loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
      },
      {
        path: NavigationPaths.DOCUMENTS,
        loadChildren: () => import('./documents/documents.module').then(m => m.DocumentsModule)
      },
      {
        path: NavigationPaths.USER_ACCOUNT,
        loadChildren: () => import('./user-account/user-account.module').then(m => m.UserAccountModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

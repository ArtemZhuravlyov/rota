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
        redirectTo: NavigationPaths.EMPLOYEE,
      },
      {
        path: NavigationPaths.COMPANY,
        loadChildren: () => import('./company/company.module').then(m => m.CompanyModule),
        data: {breadcrumb: 'COMPANY'},
      },
      {
        path: NavigationPaths.EMPLOYEE,
        loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
        data: {breadcrumb: 'EMPLOYEE'},
      },
      {
        path: NavigationPaths.DOCUMENTS,
        loadChildren: () => import('./documents/documents.module').then(m => m.DocumentsModule),
        data: {breadcrumb: 'DOCUMENTS'},
      },
      {
        path: NavigationPaths.USER_ACCOUNT,
        loadChildren: () => import('./user-account/user-account.module').then(m => m.UserAccountModule),
        data: {breadcrumb: 'USER_ACCOUNT'},
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

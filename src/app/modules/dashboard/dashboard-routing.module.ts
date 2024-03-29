import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { TodoComponent } from '@shared/modules/todo/todo.component';
import { AppRoutes } from '@core/types/app-route.type';

const routes: AppRoutes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: DashboardLayoutComponent,
    children: [
      {
        path: NavigationPaths.EMPTY_PATH,
        pathMatch: 'full',
        redirectTo: NavigationPaths.COMPANY,
      },
      {
        path: NavigationPaths.COMPANY,
        loadChildren: () =>
          import('./company/company.module').then(
            m => m.CompanyModule
          ),
        data: { breadcrumb: 'COMPANY' },
      },
      {
        path: NavigationPaths.EMPLOYEES,
        loadChildren: () =>
          import('./employee/employee.module').then(
            m => m.EmployeeModule
          ),
        data: { breadcrumb: 'EMPLOYEES' },
      },
      {
        path: NavigationPaths.DOCUMENTS,
        loadChildren: () =>
          import('./documents/documents.module').then(
            m => m.DocumentsModule
          ),
        data: { breadcrumb: 'DOCUMENTS' },
      },
      {
        path: NavigationPaths.USER_ACCOUNT,
        loadChildren: () =>
          import('./user-account/user-account.module').then(
            m => m.UserAccountModule
          ),
        data: { breadcrumb: 'USER_ACCOUNT' },
      },
      {
        path: NavigationPaths.SETTINGS,
        loadChildren: () =>
          import('./settings/settings.module').then(
            m => m.SettingsModule
          ),
        data: { breadcrumb: 'SETTINGS' },
      },
      {
        path: NavigationPaths.ENGAGEMENT,
        loadChildren: () =>
          import('./engagement/engagement.module').then(
            m => m.EngagementModule
          ),
        data: { breadcrumb: 'ENGAGEMENT' },
      },
      {
        path: '**',
        component: TodoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

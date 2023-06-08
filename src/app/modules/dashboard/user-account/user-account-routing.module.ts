import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from "@core/enums/navigation-paths.enum";
import { UserAccountComponent } from "./user-account.component";
import { ImportEmployeesComponent } from "@shared/modules/import-employees/import-employees.component";

const routes: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    children: [
      {
        path: NavigationPaths.EMPTY_PATH,
        component: UserAccountComponent,
        children: [
          {
            path: NavigationPaths.EMPTY_PATH,
            redirectTo: NavigationPaths.USER,
            pathMatch: 'full'
          },
          {
            path: NavigationPaths.USER,
            loadChildren: () => import('./user/user.module').then(m => m.UserModule),
            data: {breadcrumb: 'USER'}
          },
          {
            path: NavigationPaths.ROLE,
            loadChildren: () => import('./role/role.module').then(m => m.RoleModule),
            data: {breadcrumb: 'ROLE'}
          },
          {
            path: NavigationPaths.IMPORT_USER,
            component: ImportEmployeesComponent,
            data: { breadcrumb: 'IMPORT_USER', title: 'IMPORT_USER' }
          },
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAccountRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from "../../../core/enums/navigation-paths.enum";
import { UserAccountComponent } from "./user-account.component";
import { UserComponent } from "./user/user.component";
import { RoleComponent } from "./role/role.component";

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
            component: UserComponent
          },
          {
            path: NavigationPaths.ROLE,
            component: RoleComponent,
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

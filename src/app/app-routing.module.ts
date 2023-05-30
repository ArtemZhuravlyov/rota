import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { authGuard } from "@core/guards/auth.guard";

const routes: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    pathMatch: 'full',
    redirectTo: NavigationPaths.DASHBOARD
  },
  {
    path: NavigationPaths.HOME,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    canActivate: [authGuard]
  },
  {
    path: NavigationPaths.LOGIN,
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: NavigationPaths.DASHBOARD,
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

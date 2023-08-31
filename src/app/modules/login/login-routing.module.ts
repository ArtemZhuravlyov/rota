import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { CompanyComponent } from './company/company.component';
import { PasswordRecoveryComponent } from '@app/modules/login/password-recovery/password-recovery.component';
import { PasswordRecoverySuccessComponent } from '@app/modules/login/password-recovery-success/password-recovery-success.component';
import { AppRoutes } from '@core/types/app-route.type';

const routes: AppRoutes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: LoginLayoutComponent,
    children: [
      {
        path: NavigationPaths.EMPTY_PATH,
        redirectTo: NavigationPaths.SIGN_IN,
        pathMatch: 'full',
      },
      {
        path: NavigationPaths.SIGN_IN,
        component: SignInComponent,
      },
      {
        path: NavigationPaths.REGISTRATION,
        component: RegistrationComponent,
      },
      {
        path: NavigationPaths.REGISTRATION_COMPANY,
        component: CompanyComponent,
      },
      {
        path: NavigationPaths.PASSWORD_RECOVERY,
        component: PasswordRecoveryComponent,
      },
      {
        path: NavigationPaths.PASSWORD_RECOVERY_SUCCESS,
        component: PasswordRecoverySuccessComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}

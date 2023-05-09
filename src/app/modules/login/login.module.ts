import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    SignInComponent,
    LoginLayoutComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormBuilderModule } from "../../shared/modules/form-builder/form-builder.module";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../../shared/modules/material.module";
import { LoginPageModule } from "../../shared/modules/login-page/login-page.module";
import { CompanyComponent } from './company/company.component';
import { ButtonModule } from "../../shared/modules/button/button.module";

@NgModule({
  declarations: [
    SignInComponent,
    LoginLayoutComponent,
    RegistrationComponent,
    CompanyComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    LoginRoutingModule,
    FormBuilderModule,
    MaterialModule,
    LoginPageModule,
    ButtonModule
  ],
})
export class LoginModule { }

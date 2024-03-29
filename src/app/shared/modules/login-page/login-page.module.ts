import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { TranslateModule } from "@ngx-translate/core";
import { RouterLink } from "@angular/router";

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  exports: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterLink
  ]
})
export class LoginPageModule { }

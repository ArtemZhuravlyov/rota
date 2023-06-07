import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { PageHeaderModule } from "@shared/modules/page-header/page-header.module";
import { ButtonModule } from "@shared/modules/button/button.module";

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    PageHeaderModule,
    ButtonModule,
  ]
})
export class UserModule { }

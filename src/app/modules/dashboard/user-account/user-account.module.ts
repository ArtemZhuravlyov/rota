import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountRoutingModule } from './user-account-routing.module';
import { UserAccountComponent } from './user-account.component';
import { SubMenuModule } from "../../../shared/modules/sub-menu/sub-menu.module";
import { MaterialModule } from "../../../shared/modules/material.module";


@NgModule({
  declarations: [
    UserAccountComponent
  ],
  imports: [
    CommonModule,
    UserAccountRoutingModule,
    SubMenuModule,
    MaterialModule
  ]
})
export class UserAccountModule { }

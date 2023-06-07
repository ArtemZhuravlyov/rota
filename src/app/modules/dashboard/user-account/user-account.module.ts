import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountRoutingModule } from './user-account-routing.module';
import { UserAccountComponent } from './user-account.component';
import { SubMenuModule } from "@shared/modules/sub-menu/sub-menu.module";
import { MaterialModule } from "@shared/modules/material.module";
import { SubMenuButtonModule } from "@shared/modules/sub-menu-button/sub-menu-button.module";
import { UserModule } from "@app/modules/dashboard/user-account/user/user.module";
import { ImportEmployeesModule } from "@shared/modules/import-employees/import-employees.module";


@NgModule({
  declarations: [
    UserAccountComponent
  ],
  imports: [
    CommonModule,
    UserAccountRoutingModule,
    SubMenuModule,
    MaterialModule,
    SubMenuButtonModule,
    UserModule,
    ImportEmployeesModule
  ]
})
export class UserAccountModule {
}

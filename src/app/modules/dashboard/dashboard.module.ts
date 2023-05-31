import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '@shared/modules/material.module';
import { HeaderModule } from "@shared/modules/header/header.module";
import { TranslateModule } from "@ngx-translate/core";
import { SearchInputModule } from "@shared/modules/search-input/search-input.module";
import { MenuTogglerModule } from "@shared/modules/menu-toggler/menu-toggler.module";

@NgModule({
  declarations: [
    DashboardLayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HeaderModule,
    MaterialModule,
    TranslateModule,
    SearchInputModule,
    MenuTogglerModule,
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { RouterOutlet } from "@angular/router";
import { SubMenuButtonModule } from "@shared/modules/sub-menu-button/sub-menu-button.module";
import { SubMenuModule } from "@shared/modules/sub-menu/sub-menu.module";
import { SettingsRoutingModule } from "@app/modules/dashboard/settings/settings-routing.module";
import { SettingsSelectionComponent } from './settings-selection/settings-selection.component';
import { MaterialModule } from "@shared/modules/material.module";
import { ButtonModule } from "@shared/modules/button/button.module";
import { PageHeaderModule } from "@shared/modules/page-header/page-header.module";
import { TranslateModule } from "@ngx-translate/core";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    SettingsComponent,
    SettingsSelectionComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    SubMenuButtonModule,
    SubMenuModule,
    SettingsRoutingModule,
    MaterialModule,
    ButtonModule,
    PageHeaderModule,
    TranslateModule,
    FormsModule,
  ]
})
export class SettingsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header.component";
import { ButtonModule } from "../button/button.module";
import { MatLegacyButtonModule } from "@angular/material/legacy-button";
import { MatIconModule } from "@angular/material/icon";
import {DropdownMenuModule} from "@shared/modules/dropdown-menu/dropdown-menu.module";
import {TranslateModule} from "@ngx-translate/core";
import {DropdownModule} from "@shared/modules/dropdown/dropdown.module";
import {MatBadgeModule} from "@angular/material/badge";
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MatLegacyButtonModule,
    MatIconModule,
    DropdownMenuModule,
    TranslateModule,
    DropdownModule,
    MatBadgeModule,
    MatMenuModule,
    MatListModule,
  ]
})
export class HeaderModule { }

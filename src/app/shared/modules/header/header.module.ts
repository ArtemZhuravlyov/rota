import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header.component";
import { ButtonModule } from "../button/button.module";
import { MatLegacyButtonModule } from "@angular/material/legacy-button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent
  ],
    imports: [
        CommonModule,
        ButtonModule,
        MatLegacyButtonModule,
        MatIconModule
    ]
})
export class HeaderModule { }

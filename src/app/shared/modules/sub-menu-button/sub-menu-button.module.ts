import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubMenuButtonComponent } from "./sub-menu-button.component";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";



@NgModule({
  declarations: [SubMenuButtonComponent],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    TranslateModule
  ],
  exports: [SubMenuButtonComponent]
})
export class SubMenuButtonModule { }

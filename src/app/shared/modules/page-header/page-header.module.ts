import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header.component';
import { TranslateModule } from "@ngx-translate/core";
import { RouterLink } from "@angular/router";
import { MaterialModule } from "../material.module";
import { PageSubHeaderComponent } from './page-sub-header/page-sub-header.component';
import { ButtonModule } from "../button/button.module";



@NgModule({
    declarations: [
        PageHeaderComponent,
        PageSubHeaderComponent
    ],
    exports: [
        PageHeaderComponent
    ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterLink,
    MaterialModule,
    ButtonModule
  ]
})
export class PageHeaderModule { }

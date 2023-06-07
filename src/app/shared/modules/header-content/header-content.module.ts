import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContentComponent } from './header-content.component';
import { TranslateModule } from "@ngx-translate/core";



@NgModule({
  declarations: [
    HeaderContentComponent
  ],
  exports: [
    HeaderContentComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class HeaderContentModule { }

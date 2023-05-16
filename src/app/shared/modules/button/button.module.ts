import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { MaterialModule } from '../material.module';
import { MatBadgeModule } from "@angular/material/badge";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatBadgeModule,
    TranslateModule
  ],
  exports: [ ButtonComponent ]
})
export class ButtonModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { MaterialModule } from '../material.module';
import { MatBadgeModule } from "@angular/material/badge";

@NgModule({
  declarations: [ButtonComponent],
    imports: [
        CommonModule,
        MaterialModule,
        MatBadgeModule
    ],
  exports: [ ButtonComponent ]
})
export class ButtonModule { }

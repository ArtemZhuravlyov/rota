import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCardComponent } from './form-card.component';
import {MatMenuModule} from "@angular/material/menu";



@NgModule({
    declarations: [
        FormCardComponent
    ],
    exports: [
        FormCardComponent
    ],
  imports: [
    CommonModule,
    MatMenuModule
  ]
})
export class FormCardModule { }

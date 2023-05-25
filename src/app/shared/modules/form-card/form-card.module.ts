import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCardComponent } from './form-card.component';



@NgModule({
    declarations: [
        FormCardComponent
    ],
    exports: [
        FormCardComponent
    ],
    imports: [
        CommonModule
    ]
})
export class FormCardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrustedDeviceComponent } from './trusted-device.component';
import { ButtonModule } from "@shared/modules/button/button.module";
import { MaterialModule } from "@shared/modules/material.module";



@NgModule({
    declarations: [
        TrustedDeviceComponent
    ],
    exports: [
        TrustedDeviceComponent
    ],
  imports: [
    CommonModule,
    ButtonModule,
    MaterialModule
  ]
})
export class TrustedDeviceModule { }

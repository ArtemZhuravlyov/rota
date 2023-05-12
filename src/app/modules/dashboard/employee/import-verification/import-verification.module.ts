import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportVerificationRoutingModule } from './import-verification-routing.module';
import { ImportVerificationComponent } from './import-verification.component';


@NgModule({
  declarations: [
    ImportVerificationComponent
  ],
  imports: [
    CommonModule,
    ImportVerificationRoutingModule
  ]
})
export class ImportVerificationModule { }

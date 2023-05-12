import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmploymentTypeRoutingModule } from './employment-type-routing.module';
import { EmploymentTypeComponent } from './employment-type.component';


@NgModule({
  declarations: [
    EmploymentTypeComponent
  ],
  imports: [
    CommonModule,
    EmploymentTypeRoutingModule
  ]
})
export class EmploymentTypeModule { }

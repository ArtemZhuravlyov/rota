import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDocumentRoutingModule } from './employee-document-routing.module';
import { EmployeeDocumentComponent } from './employee-document.component';


@NgModule({
  declarations: [
    EmployeeDocumentComponent
  ],
  imports: [
    CommonModule,
    EmployeeDocumentRoutingModule
  ]
})
export class EmployeeDocumentModule { }

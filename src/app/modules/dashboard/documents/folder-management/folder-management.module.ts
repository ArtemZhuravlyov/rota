import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FolderManagementRoutingModule } from './folder-management-routing.module';
import { FolderManagementComponent } from './folder-management.component';


@NgModule({
  declarations: [
    FolderManagementComponent
  ],
  imports: [
    CommonModule,
    FolderManagementRoutingModule
  ]
})
export class FolderManagementModule { }

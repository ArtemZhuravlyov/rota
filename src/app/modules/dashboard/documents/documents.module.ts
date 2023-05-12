import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsComponent } from "./documents.component";
import { SubMenuModule } from "../../../shared/modules/sub-menu/sub-menu.module";
import { MaterialModule } from "../../../shared/modules/material.module";


@NgModule({
  declarations: [DocumentsComponent],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    SubMenuModule,
    MaterialModule
  ]
})
export class DocumentsModule { }

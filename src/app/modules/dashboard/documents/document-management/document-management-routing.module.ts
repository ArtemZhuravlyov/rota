import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from "../../../../core/enums/navigation-paths.enum";
import { DocumentManagementComponent } from "./document-management.component";
import {
  CreateDocumentComponent
} from "@app/modules/dashboard/documents/document-management/create-folder/create-document.component";
import {
  UploadDocumentComponent
} from "@app/modules/dashboard/documents/document-management/upload-document/upload-document.component";

const routes: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: DocumentManagementComponent,
  },
  {
    path: NavigationPaths.CREATE_FOLDER,
    component: CreateDocumentComponent,
    data: {breadcrumb: 'CREATE_NEW_FOLDER'}
  },
  {
    path: NavigationPaths.UPLOAD_DOCUMENT,
    component: UploadDocumentComponent,
    data: {breadcrumb: 'UPLOAD_DOCUMENT'}
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentManagementRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationPaths } from '../../../../core/enums/navigation-paths.enum';
import { DocumentManagementComponent } from './document-management.component';
import { CreateDocumentComponent } from '@app/modules/dashboard/documents/document-management/create-folder/create-document.component';
import { UploadDocumentComponent } from '@app/modules/dashboard/documents/document-management/upload-document/upload-document.component';
import { AppRoutes } from '@core/types/app-route.type';
import { FolderInfoComponent } from '@modules/dashboard/documents/document-management/folder-info/folder-info.component';
import { EditFolderComponent } from '@modules/dashboard/documents/document-management/edit-folder/edit-folder.component';

const routes: AppRoutes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: DocumentManagementComponent,
  },
  {
    path: NavigationPaths.CREATE_FOLDER,
    component: CreateDocumentComponent,
    data: { breadcrumb: 'CREATE_NEW_FOLDER' },
  },
  {
    path: NavigationPaths.EDIT_FOLDER,
    component: EditFolderComponent,
    data: { breadcrumb: 'EDIT_FOLDER', title: 'EDIT_FOLDER' },
  },
  {
    path: `${NavigationPaths.FOLDER_DETAILS}/:id`,
    component: FolderInfoComponent,
    data: { breadcrumb: 'FOLDER_DETAILS' },
  },
  {
    path: NavigationPaths.UPLOAD_DOCUMENT,
    component: UploadDocumentComponent,
    data: { breadcrumb: 'UPLOAD_DOCUMENT' },
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentManagementRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentManagementRoutingModule } from './document-management-routing.module';
import { DocumentManagementComponent } from './document-management.component';
import { PageHeaderModule } from '@shared/modules/page-header/page-header.module';
import { ButtonModule } from '@shared/modules/button/button.module';
import { DataTableModule } from '@shared/modules/data-table/data-table.module';
import { TranslateModule } from '@ngx-translate/core';
import { CreateDocumentComponent } from '@app/modules/dashboard/documents/document-management/create-folder/create-document.component';
import { FormBuilderModule } from '@shared/modules/form-builder/form-builder.module';
import { FormCardModule } from '@shared/modules/form-card/form-card.module';
import { UploadDocumentComponent } from './upload-document/upload-document.component';
import { FolderSubHeaderComponent } from '@shared/modules/page-header/folder-sub-header/folder-sub-header.component';
import { FolderInfoComponent } from './folder-info/folder-info.component';
import { DocumentSubHeaderComponent } from '@shared/modules/page-header/document-sub-header/document-sub-header.component';
import { EditFolderComponent } from './edit-folder/edit-folder.component';

@NgModule({
  declarations: [
    DocumentManagementComponent,
    CreateDocumentComponent,
    UploadDocumentComponent,
    FolderSubHeaderComponent,
    DocumentSubHeaderComponent,
    FolderInfoComponent,
    EditFolderComponent,
  ],
  imports: [
    CommonModule,
    DocumentManagementRoutingModule,
    PageHeaderModule,
    ButtonModule,
    DataTableModule,
    TranslateModule,
    FormBuilderModule,
    FormCardModule,
  ],
})
export class DocumentManagementModule {}

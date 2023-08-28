import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from '../../../core/enums/navigation-paths.enum';
import { DocumentsComponent } from './documents.component';
import { FolderManagementComponent } from './folder-management/folder-management.component';
import { DocumentManagementComponent } from './document-management/document-management.component';
import { EmployeeDocumentComponent } from './employee-document/employee-document.component';
import { TodoComponent } from '@shared/modules/todo/todo.component';
import { AppRoutes } from '@core/types/app-route.type';

const routes: AppRoutes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    children: [
      {
        path: NavigationPaths.EMPTY_PATH,
        component: DocumentsComponent,
        children: [
          {
            path: NavigationPaths.EMPTY_PATH,
            redirectTo: NavigationPaths.FOLDER_MANAGEMENT,
            pathMatch: 'full',
          },
          {
            path: NavigationPaths.FOLDER_MANAGEMENT,
            component: FolderManagementComponent,
          },
          {
            path: NavigationPaths.DOCUMENT_MANAGEMENT,
            loadChildren: () => import('./document-management/document-management.module').then(m => m.DocumentManagementModule),
            data: {breadcrumb: 'DOCUMENT_MANAGEMENT'},
          },
          {
            path: NavigationPaths.EMPLOYEE_DOCUMENT,
            component: EmployeeDocumentComponent,
          },
          {
            path: '**',
            component: TodoComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentsRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from '../../../../core/enums/navigation-paths.enum';
import { DocumentManagementComponent } from './document-management.component';

const routes: AppRoutes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: DocumentManagementComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentManagementRoutingModule {}

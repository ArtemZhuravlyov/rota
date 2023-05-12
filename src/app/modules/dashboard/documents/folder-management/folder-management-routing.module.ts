import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from "../../../../core/enums/navigation-paths.enum";
import { FolderManagementComponent } from "./folder-management.component";

const routes: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: FolderManagementComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FolderManagementRoutingModule { }

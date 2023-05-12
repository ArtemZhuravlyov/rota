import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from "../../../../core/enums/navigation-paths.enum";
import { EmployeeDocumentComponent } from "./employee-document.component";

const routes: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: EmployeeDocumentComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDocumentRoutingModule { }

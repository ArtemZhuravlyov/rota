import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from "../../../../core/enums/navigation-paths.enum";
import { EmployeeRecordComponent } from "./employee-record.component";

const routes: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: EmployeeRecordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRecordRoutingModule { }

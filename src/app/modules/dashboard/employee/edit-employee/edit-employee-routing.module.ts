import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditEmployeeComponent} from "@app/modules/dashboard/employee/edit-employee/edit-employee.component";

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: EditEmployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class EditEmployeeRoutingModule { }

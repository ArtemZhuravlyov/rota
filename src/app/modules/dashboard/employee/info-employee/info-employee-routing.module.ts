import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InfoEmployeeComponent} from "@app/modules/dashboard/employee/info-employee/info-employee.component";

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: InfoEmployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class InfoEmployeeRoutingModule { }

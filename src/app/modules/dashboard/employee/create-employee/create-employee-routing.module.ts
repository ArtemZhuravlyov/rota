import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { NavigationPaths } from "@core/enums/navigation-paths.enum";
import { CreateEmployeeComponent } from "@app/modules/dashboard/employee/create-employee/create-employee.component";

export const ROUTES: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    pathMatch: 'full',
    component: CreateEmployeeComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
})
export class CreateEmployeeRoutingModule { }

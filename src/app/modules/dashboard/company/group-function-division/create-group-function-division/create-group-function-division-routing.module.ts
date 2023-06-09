import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { NavigationPaths } from "@core/enums/navigation-paths.enum";
import {
  CreateGroupFunctionDivisionComponent
} from "@app/modules/dashboard/company/group-function-division/create-group-function-division/create-group-function-division.component";

const ROUTES: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    pathMatch: 'full',
    component: CreateGroupFunctionDivisionComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  exports: [
    RouterModule,
  ]
})
export class CreateGroupFunctionDivisionRoutingModule { }

import {RouterModule, Routes} from "@angular/router";
import {NavigationPaths} from "@core/enums/navigation-paths.enum";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {
  CreateDepartmentComponent
} from "@app/modules/dashboard/company/department/create-department/create-department.component";

const ROUTES: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    pathMatch: 'full',
    component: CreateDepartmentComponent,
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
export class CreateDepartmentRoutingModule { }

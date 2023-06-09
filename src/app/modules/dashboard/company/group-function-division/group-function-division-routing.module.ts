import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from "@core/enums/navigation-paths.enum";
import { GroupFunctionDivisionComponent } from "./group-function-division.component";

const routes: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: GroupFunctionDivisionComponent,
  },
  {
    path: NavigationPaths.CREATE_NEW_GROUP_FUNCTION_DIVISION,
    loadChildren: () =>
      import('./create-group-function-division/create-group-function-division.module')
        .then(m => m.CreateGroupFunctionDivisionModule),
    data: { breadcrumb: 'CREATE_NEW' },
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupFunctionDivisionRoutingModule { }

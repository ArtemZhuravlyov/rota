import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from "../../../../core/enums/navigation-paths.enum";
import { GradeCategoryComponent } from "./grade-category.component";

const routes: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: GradeCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradeCategoryRoutingModule { }

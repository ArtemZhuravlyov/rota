import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from "../../../../core/enums/navigation-paths.enum";
import { PositionComponent } from "./position.component";

const routes: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: PositionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PositionRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from "@core/enums/navigation-paths.enum";
import { UserComponent } from "./user.component";

const routes: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: UserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

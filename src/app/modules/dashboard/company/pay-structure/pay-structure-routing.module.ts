import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from "../../../../core/enums/navigation-paths.enum";
import { PayStructureComponent } from "./pay-structure.component";

const routes: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: PayStructureComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayStructureRoutingModule { }

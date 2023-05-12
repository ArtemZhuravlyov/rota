import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from "../../../../core/enums/navigation-paths.enum";
import { ImportVerificationComponent } from "./import-verification.component";

const routes: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: ImportVerificationComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportVerificationRoutingModule { }

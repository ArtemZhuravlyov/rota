import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from "../../../../core/enums/navigation-paths.enum";
import { WorkScheduleComponent } from "./work-schedule.component";

const routes: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: WorkScheduleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkScheduleRoutingModule { }

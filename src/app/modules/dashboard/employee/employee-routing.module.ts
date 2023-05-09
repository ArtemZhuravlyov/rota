import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { NavigationPaths } from '../../../core/enums/navigation-paths.enum';

const routes: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    children: [
      {
        path: NavigationPaths.EMPTY_PATH,
        component: EmployeeComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

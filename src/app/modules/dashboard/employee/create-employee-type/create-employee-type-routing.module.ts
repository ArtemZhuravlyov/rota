import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeTypeComponent } from '@app/modules/dashboard/employee/create-employee-type/create-employee-type.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CreateEmployeeTypeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateEmployeeTypeRoutingModule {}

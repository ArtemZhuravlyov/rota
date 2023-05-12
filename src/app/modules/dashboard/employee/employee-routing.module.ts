import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { NavigationPaths } from '../../../core/enums/navigation-paths.enum';
import { EmploymentTypeComponent } from "./employment-type/employment-type.component";
import { EmployeeRecordComponent } from "./employee-record/employee-record.component";
import { OrganizationChartComponent } from "./organization-chart/organization-chart.component";
import { ImportVerificationComponent } from "./import-verification/import-verification.component";

const routes: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    children: [
      {
        path: NavigationPaths.EMPTY_PATH,
        component: EmployeeComponent,
        children: [
          {
            path: NavigationPaths.EMPTY_PATH,
            redirectTo: NavigationPaths.EMPLOYMENT_TYPE,
            pathMatch: 'full',
          },
          {
            path: NavigationPaths.EMPLOYMENT_TYPE,
            component: EmploymentTypeComponent
          },
          {
            path: NavigationPaths.EMPLOYEE_RECORD,
            component: EmployeeRecordComponent
          },
          {
            path: NavigationPaths.ORGANIZATION_CHART,
            component: OrganizationChartComponent
          },
          {
            path: NavigationPaths.IMPORT_VERIFICATION,
            component: ImportVerificationComponent,
          },
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

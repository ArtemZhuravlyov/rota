import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from "../../../core/enums/navigation-paths.enum";
import { CompanyComponent } from "./company.component";

const routes: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    children: [
      {
        path: NavigationPaths.EMPTY_PATH,
        component: CompanyComponent,
        children: [
          {
            path: NavigationPaths.EMPTY_PATH,
            loadChildren: () => import('./company-info/company-info.module').then(m => m.CompanyInfoModule),
            data: {breadcrumb: 'COMPANY_LIST'}
          },
          {
            path: NavigationPaths.BANK_ACCOUNT,
            loadChildren: () => import('./bank-account/bank-account.module').then(m => m.BankAccountModule),
            data: {breadcrumb: 'BANK_ACCOUNT'}
          },
          {
            path: NavigationPaths.GROUP,
            loadChildren: () => import('./group/group.module').then(m => m.GroupModule),
            data: {breadcrumb: 'GROUP'}
          },
          {
            path: NavigationPaths.DEPARTMENT,
            loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule),
            data: {breadcrumb: 'DEPARTMENT'}
          },
          {
            path: NavigationPaths.GRADE_CATEGORY,
            loadChildren: () => import('./grade-category/grade-category.module').then(m => m.GradeCategoryModule),
            data: {breadcrumb: 'GRADE_CATEGORY'}
          },
          {
            path: NavigationPaths.POSITION,
            loadChildren: () => import('./position/position.module').then(m => m.PositionModule),
            data: {breadcrumb: 'POSITION'}
          },
          {
            path: NavigationPaths.BENEFIT,
            loadChildren: () => import('./benefit/benefit.module').then(m => m.BenefitModule),
            data: {breadcrumb: 'BENEFIT'}
          },
          {
            path: NavigationPaths.WORK_SCHEDULE,
            loadChildren: () => import('./work-schedule/work-schedule.module').then(m => m.WorkScheduleModule),
            data: {breadcrumb: 'WORK_SCHEDULE'}
          },
          {
            path: NavigationPaths.PAY_STRUCTURE,
            loadChildren: () => import('./pay-structure/pay-structure.module').then(m => m.PayStructureModule),
            data: {breadcrumb: 'PAY_STRUCTURE'}
          },
        ]
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }

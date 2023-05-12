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
            loadChildren: () => import('./company-info/company-info.module').then(m => m.CompanyInfoModule)
          },
          {
            path: NavigationPaths.BANK_ACCOUNT,
            loadChildren: () => import('./bank-account/bank-account.module').then(m => m.BankAccountModule)
          },
          {
            path: NavigationPaths.GROUP,
            loadChildren: () => import('./group/group.module').then(m => m.GroupModule)
          },
          {
            path: NavigationPaths.DEPARTMENT,
            loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule)
          },
          {
            path: NavigationPaths.GRADE_CATEGORY,
            loadChildren: () => import('./grade-category/grade-category.module').then(m => m.GradeCategoryModule)
          },
          {
            path: NavigationPaths.POSITION,
            loadChildren: () => import('./position/position.module').then(m => m.PositionModule)
          },
          {
            path: NavigationPaths.BENEFIT,
            loadChildren: () => import('./benefit/benefit.module').then(m => m.BenefitModule)
          },
          {
            path: NavigationPaths.WORK_SCHEDULE,
            loadChildren: () => import('./work-schedule/work-schedule.module').then(m => m.WorkScheduleModule)
          },
          {
            path: NavigationPaths.PAY_STRUCTURE,
            loadChildren: () => import('./pay-structure/pay-structure.module').then(m => m.PayStructureModule)
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

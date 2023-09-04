import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { EngagementComponent } from '@app/modules/dashboard/engagement/engagement.component';
import { TodoComponent } from '@shared/modules/todo/todo.component';
import { AppRoutes } from '@core/types/app-route.type';

export const ROUTES: AppRoutes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    children: [
      {
        path: NavigationPaths.EMPTY_PATH,
        component: EngagementComponent,
        children: [
          {
            path: NavigationPaths.EMPTY_PATH,
            pathMatch: 'full',
            redirectTo: NavigationPaths.ORGANOGRAM,
          },

          {
            path: '**',
            component: TodoComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class EngagementRoutingModule {}

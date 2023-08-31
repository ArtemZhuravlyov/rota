import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { NgModule } from '@angular/core';
import { SettingsComponent } from '@app/modules/dashboard/settings/settings.component';
import { AppRoutes } from '@core/types/app-route.type';

const routes: AppRoutes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    children: [
      {
        path: NavigationPaths.EMPTY_PATH,
        component: SettingsComponent,
        children: [
          {
            path: NavigationPaths.EMPTY_PATH,
            loadChildren: () =>
              import(
                './settings-selection/settings-selection.module'
              ).then(m => m.SettingsSelectionModule),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}

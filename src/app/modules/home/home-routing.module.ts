import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NavigationPaths } from '../../core/enums/navigation-paths.enum';

const routes: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
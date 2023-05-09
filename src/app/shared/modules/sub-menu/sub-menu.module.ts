import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubMenuComponent } from './sub-menu.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    SubMenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    SubMenuComponent
  ]
})
export class SubMenuModule { }

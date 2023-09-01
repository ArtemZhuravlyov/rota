import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from './click-outide.directive';

@NgModule({
  declarations: [ClickOutsideDirective],
  imports: [CommonModule],
  exports: [ClickOutsideDirective],
})
export class ClickOutsideModule {}

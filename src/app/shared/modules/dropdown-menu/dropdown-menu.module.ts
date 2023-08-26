import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/modules/material.module';
import { DropdownMenuComponent } from './dropdown-menu.component';
import { ButtonModule } from '@shared/modules/button/button.module';

@NgModule({
  declarations: [DropdownMenuComponent],
  exports: [DropdownMenuComponent],
  imports: [CommonModule, MaterialModule, ButtonModule],
})
export class DropdownMenuModule {}

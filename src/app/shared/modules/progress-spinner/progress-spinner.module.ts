import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerComponent } from './progress-spinner.component';
import { MaterialModule } from '@shared/modules/material.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ProgressSpinnerComponent],
  exports: [ProgressSpinnerComponent],
  imports: [CommonModule, MaterialModule, TranslateModule],
})
export class ProgressSpinnerModule {}

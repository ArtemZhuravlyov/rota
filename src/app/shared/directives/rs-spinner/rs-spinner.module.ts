import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RsSpinnerComponent } from '@shared/directives/rs-spinner/rs-spinner.component';
import { RsSpinnerDirective } from '@shared/directives/rs-spinner/rs-spinner.directive';
import { MaterialModule } from '@shared/modules/material.module';

@NgModule({
  declarations: [RsSpinnerComponent, RsSpinnerDirective],
  imports: [CommonModule, MaterialModule],
  exports: [RsSpinnerComponent, RsSpinnerDirective],
})
export class RsSpinnerModule {}

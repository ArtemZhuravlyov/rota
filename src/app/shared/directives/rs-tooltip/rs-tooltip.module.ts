import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RsTooltipComponent } from '@shared/directives/rs-tooltip/rs-tooltip.component';
import { RsTooltipDirective } from '@shared/directives/rs-tooltip/rs-tooltip.directive';

@NgModule({
  declarations: [RsTooltipComponent, RsTooltipDirective],
  imports: [CommonModule],
  exports: [RsTooltipDirective],
})
export class RsTooltipModule {}

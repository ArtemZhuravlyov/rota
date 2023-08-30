import { Component } from '@angular/core';
import { RsTooltipPosition } from '@shared/directives/rs-tooltip/enums/rs-tooltip-position.enum';
import { RsTooltipTheme } from '@shared/directives/rs-tooltip/enums/rs-tooltip-theme.enum';

@Component({
  selector: 'rs-tooltip',
  template: `
    <div
      class="tooltip"
      [ngClass]="['tooltip--' + position, 'tooltip--' + theme]"
      [class.tooltip--visible]="visible"
      [style.left]="left + 'px'"
      [style.color]="textColor"
      [style.top]="top + 'px'"
      [style.z-index]="9999">
      {{ tooltip }}
    </div>
  `,
  styleUrls: ['./rs-tooltip.component.scss'],
})
export class RsTooltipComponent {
  position: RsTooltipPosition = RsTooltipPosition.DEFAULT;
  theme: RsTooltipTheme = RsTooltipTheme.DEFAULT;
  tooltip = '';
  left = 0;
  top = 0;
  visible = false;
  textColor = 'black';
}

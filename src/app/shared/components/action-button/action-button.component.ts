import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionButtonName } from '@shared/components/action-button/enums/action-button-name.enum';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RsTooltipModule } from '@shared/directives/rs-tooltip/rs-tooltip.module';
import { RsTooltipPosition } from '@shared/directives/rs-tooltip/enums/rs-tooltip-position.enum';
import { RsTooltipTheme } from '@shared/directives/rs-tooltip/enums/rs-tooltip-theme.enum';

@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    RsTooltipModule,
  ],
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionButtonComponent {
  @Input() type: ActionButtonName = ActionButtonName.APPLY;
  @Input() disabled = false;
  @Output() btnClick = new EventEmitter();
  protected readonly ActionButtonName = ActionButtonName;
  protected readonly RsTooltipPosition = RsTooltipPosition;
  protected readonly RsTooltipTheme = RsTooltipTheme;
}

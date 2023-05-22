import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonTypeEnum } from '@core/enums/button-type.enum';
import { MenuPositionX, MenuPositionY } from '@angular/material/menu';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownMenuComponent {
  @Input() xPosition: MenuPositionX = 'after';
  @Input() yPosition: MenuPositionY = 'below';
  @Input() menuIcon: string = 'more_vert';
  readonly ButtonTypeEnum = ButtonTypeEnum;
}

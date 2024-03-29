import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { ButtonTypeEnum } from '@core/enums/button-type.enum';
import { MenuPositionX, MenuPositionY } from '@angular/material/menu';
import { Style } from '@core/types/button.interface';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownMenuComponent {
  @Input() disabled = false;
  @Input() xPosition: MenuPositionX = 'after';
  @Input() yPosition: MenuPositionY = 'below';
  @Input() buttonStyleConfig: Style = {} as Style;
  @Input() customClass: string | null = null;
  @Input() menuIcon = 'more-vert';
  readonly ButtonTypeEnum = ButtonTypeEnum;
}

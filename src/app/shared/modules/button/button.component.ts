import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ButtonTypeEnum } from "@core/enums/button-type.enum";
import { ButtonSize, IconColor, IconPosition } from "@core/types/button.interface";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() title!: string;
  @Input() colorTheme: ThemePalette = 'primary';
  @Input() icon!: string;
  @Input() badgeInfo?: string | number;
  @Input() btnType!: keyof typeof ButtonTypeEnum;
  @Input() disabled = false;
  @Input() isIconButton = false;
  @Input() isBadgeShowed = false;
  @Input() iconPosition: IconPosition = 'default';
  @Input() set iconColor(color: IconColor) {
    switch (color) {
      case "gray":
        this._iconColor = '#CDD2D9';
        break;
      case "primary":
        this._iconColor = '#1C9F56';
        break;
      case "white":
        this._iconColor = '#FFFFFF';
        break;
      default:
        this._iconColor = '#221F1F';
    }
  }
  @Input() size: ButtonSize = 'small';

  disabledBtnIconColor =  'gray';
  _iconColor!: string;

  buttonTypeEnum = ButtonTypeEnum;
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ButtonTypeEnum } from "@core/enums/button-type.enum";

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

  buttonTypeEnum = ButtonTypeEnum;
}

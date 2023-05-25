import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { ButtonTypeEnum } from "@core/enums/button-type.enum";
import { ButtonTheme, IconPosition } from "@core/types/button.interface";
import { Style } from "@core/types/style-model";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() title!: string;
  @Input() btnType!: keyof typeof ButtonTypeEnum;
  @Input() colorTheme: ButtonTheme = 'primary';
  @Input() icon!: string;
  @Input() styleConfig: Style = {}
  @Input() badgeInfo?: string | number;
  @Input() isIconButton = false;
  @Input() isBadgeShowed = false;
  @Input() iconPosition: IconPosition = 'after-text';
  @Input() iconStyleConfig: Style = {};
  @Input() disabled = false;
  @Output() btnClick = new EventEmitter<void>;

  @HostListener('click')
  onClick(): void {
    if (!this.disabled) {
      this.btnClick.emit();
    }
  }

  buttonTypeEnum = ButtonTypeEnum;
}

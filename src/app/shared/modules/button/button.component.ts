import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ButtonTypeEnum } from '@core/enums/button-type.enum';
import {
  ButtonTextPosition,
  ButtonTheme,
  IconPosition,
} from '@core/types/button.interface';
import { Style } from '@core/types/style-model';
import { TranslateKey } from '../../../../assets/i18n/enums/translate-key.enum';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnChanges {
  @Input() title!: keyof typeof TranslateKey;
  @Input() btnType!: keyof typeof ButtonTypeEnum;
  @Input() colorTheme: ButtonTheme = 'primary';
  @Input() icon!: string;
  @Input() styleConfig: Style = { height: '50px', width: '150px' };
  @Input() badgeInfo?: string | number;
  @Input() isIconButton = false;
  @Input() isBadgeShowed = false;
  @Input() enableTextAnimation = false;
  @Input() iconPosition: IconPosition = 'afterText';
  @Input() buttonTextPosition: ButtonTextPosition = 'center';
  @Input() iconStyleConfig: Style = {};
  @Input() disabled = false;
  @Output() btnClick = new EventEmitter<void>();

  public buttonClasses = {};
  public buttonItemsClasses = {};

  ngOnChanges(_changes: SimpleChanges) {
    this.buttonClasses = {
      'little-icon-btn': this.btnType === 'LITTLE_ICON',
      'icon-btn': this.btnType === 'ICON',
      primary: this.colorTheme === 'primary',
      warn: this.colorTheme === 'warn',
      link: this.colorTheme === 'link',
      basic: this.colorTheme === 'basic',
      outline: this.colorTheme === 'outline',
      'outline-calm': this.colorTheme === 'outline-calm',
      ghost: this.colorTheme === 'ghost',
      disabled: this.disabled,
    };
    this.buttonItemsClasses = {
      'flex-container': true,
      'full-size': true,
      'text-hover': this.enableTextAnimation,
      left: this.iconPosition === 'left',
      right: this.iconPosition === 'right',
      'justify-content-center': this.buttonTextPosition === 'center',
      'justify-content-between':
        this.buttonTextPosition === 'space-between',
    };
  }

  onClick(): void {
    this.btnClick.emit();
  }

  buttonTypeEnum = ButtonTypeEnum;
}

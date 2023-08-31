import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { Style } from '@core/types/style-model';
import { TranslateKey } from '../../../../assets/i18n/enums/translate-key.enum';

@Component({
  selector: 'app-header-content',
  templateUrl: './header-content.component.html',
  styleUrls: ['./header-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderContentComponent {
  @Input() title!: keyof typeof TranslateKey;
  @Input() subTitle!: keyof typeof TranslateKey;
  @Input() styleConfig: Style = {};
}

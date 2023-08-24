import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { TranslateKey } from '../../../../assets/i18n/enums/translate-key.enum';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {
  @Input() styleConfig: { [key: string]: string } | undefined;
  @Input() showClearButton = true;
  @Output() valueChanged = new EventEmitter();

  protected readonly SEARCH = TranslateKey.SEARCH;
  protected readonly CLEAR = TranslateKey.CLEAR;

  isFocus = false;
}

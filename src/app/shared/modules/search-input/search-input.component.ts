import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { TranslateKey } from '../../../../assets/i18n/enums/translate-key.enum';
import { Style } from '@core/types/style-model';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {
  @Input() styleConfig: Style = {};
  @Input() onlyClose = true;
  @Input() set value(value: string) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  @Output() valueChanged = new EventEmitter<string>();
  @Output() clearClick = new EventEmitter<void>();
  @Output() closeClick = new EventEmitter<void>();

  _value = '';

  protected readonly SEARCH = TranslateKey.SEARCH;
  protected readonly CLEAR = TranslateKey.CLEAR;

  protected isFocus = false;

  protected onClearInput() {
    this.value = '';
    this.clearClick.emit();
  }

  protected onValueChanged(value: string) {
    this.value = value;
    this.valueChanged.emit(this.value);
  }
}

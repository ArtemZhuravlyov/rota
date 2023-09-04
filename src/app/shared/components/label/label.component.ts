import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-label',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent {
  private _value = '';
  private _isFocus = false;
  @Input() name = '';
  @Input() maxLength: number | null = null;
  @Input() set isFocus(isFocus: boolean) {
    this._isFocus = isFocus;
  }
  get isFocus() {
    return this._isFocus;
  }
  @Input() set value(value: string) {
    this._value = value;
  }
  get value() {
    return this._value;
  }

  get valueLength() {
    return this.value.length;
  }
}

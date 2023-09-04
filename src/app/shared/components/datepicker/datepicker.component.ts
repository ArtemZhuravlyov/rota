import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { LabelComponent } from '@shared/components/label/label.component';
import {
  CommonFieldConfigs,
  DatepickerFieldConfig,
} from '@shared/components/form/types/form-field-entryl.type';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { Style } from '@core/types/style-model';
import { TranslateKey } from '../../../../assets/i18n/enums/translate-key.enum';
import { MatNativeDateModule } from '@angular/material/core';
import { DateTime } from 'luxon';
import { isNil } from 'lodash';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatInputModule,
    TranslateModule,
    LabelComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true,
    },
  ],
})
export class DatepickerComponent
  implements
    DatepickerFieldConfig,
    CommonFieldConfigs,
    ControlValueAccessor
{
  @Input() formControl!: FormControl;
  @Input() label: keyof typeof TranslateKey = TranslateKey.EMPTY;
  @Input() placeholder = 'SELECT';
  @Input() styleConfig: Style = {};
  @Input() value: Date | null = null;

  isOpen = false;
  constructor(private cdr: ChangeDetectorRef) {}

  onOpen() {
    this.isOpen = true;
  }

  onClose() {
    this.isOpen = false;
  }

  protected _onChange: any = () => {};
  protected _onTouched: any = () => {};
  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

  writeValue(value: string | null) {
    if (!isNil(value)) {
      this.value = DateTime.fromISO(value).toJSDate();
    }
    this._onChange(this.value);
    this._onTouched();
    this.cdr.detectChanges();
  }
}

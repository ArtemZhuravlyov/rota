import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormControl,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { Style } from '@core/types/style-model';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import {
  CommonFieldConfigs,
  TextareaFormFieldConfig,
} from '@shared/components/form/types/form-field-entryl.type';
import { TranslateKey } from '../../../../assets/i18n/enums/translate-key.enum';
import { LabelComponent } from '@shared/components/label/label.component';
import { Errors } from '@shared/utils/custom-validators/types/custom-validator.type';
import { ErrorComponent } from '@shared/components/error/error.component';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    TranslateModule,
    ReactiveFormsModule,
    LabelComponent,
    ErrorComponent,
  ],
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
})
export class TextareaComponent
  implements
    ControlValueAccessor,
    TextareaFormFieldConfig,
    CommonFieldConfigs
{
  private _value = '';
  @Input() formControl!: FormControl;
  @Input() label: keyof typeof TranslateKey = TranslateKey.EMPTY;
  @Input() id = '';
  @Input() placeholder = 'ENTER';
  @Input() maxLength = 500;
  @Input() styleConfig: Style = {};
  @Input() readonly = false;
  @Input() set value(value: string) {
    this._value = value;
  }
  get value() {
    return this._value;
  }
  isFocus = false;
  setFormValue(value: string) {
    this.value = value;
    this._onChange(this.value);
    this._onTouched();
  }

  protected _onChange: any = () => {};
  protected _onTouched: any = () => {};
  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

  writeValue(obj: any): void {}
}

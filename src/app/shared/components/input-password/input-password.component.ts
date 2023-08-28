import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from '@shared/components/error/error.component';
import {
  ControlValueAccessor,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { LabelComponent } from '@shared/components/label/label.component';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import {
  CommonFieldConfigs,
  PasswordFormFieldConfig,
} from '@shared/components/form/types/form-field-entryl.type';
import { TranslateKey } from '../../../../assets/i18n/enums/translate-key.enum';
import { Style } from '@core/types/style-model';
import { InputType } from '@core/types/form-builder.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-input-password',
  standalone: true,
  imports: [
    CommonModule,
    ErrorComponent,
    FormsModule,
    LabelComponent,
    MatInputModule,
    TranslateModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputPasswordComponent
  implements
    ControlValueAccessor,
    PasswordFormFieldConfig,
    CommonFieldConfigs
{
  @Input() excludeSymbols: string[] = [];
  @Input() label: keyof typeof TranslateKey = TranslateKey.EMPTY;
  @Input() maxLength = 100;
  @Input() placeholder = 'ENTER';
  @Input() readonly = false;
  @Input() styleConfig: Style = {};
  @Input() formControl!: FormControl;
  @Input() set value(value: string) {
    this._value = value;
  }
  get value() {
    return this._value;
  }

  private _value = '';

  isFocus = false;
  inputType: InputType = 'password';

  setFormValue(value: string) {
    this.value = value;
    this._onChange(this.value);
    this._onTouched();
  }
  isFormControlInvalid() {
    return (
      this.formControl.invalid &&
      (this.formControl.dirty || this.formControl.touched)
    );
  }

  isFormControlValid() {
    return this.formControl.valid && this.isFocus;
  }

  protected _onChange: any = () => {};
  protected _onTouched: any = () => {};

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

  writeValue(obj: any): void {}
}

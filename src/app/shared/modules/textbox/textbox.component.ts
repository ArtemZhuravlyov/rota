import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { InputType } from "@core/types/form-builder.model";
import {
  ControlValueAccessor, FormControl,
  NG_VALUE_ACCESSOR,
} from "@angular/forms";

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextboxComponent),
      multi: true,
    },
  ]
})
export class TextboxComponent implements ControlValueAccessor {
  @Input() formControl!: FormControl;
  @Input() label = '';
  @Input() inputType: InputType | undefined = 'text';
  @Input() placeholder: string | undefined = '';
  @Input() width: string | undefined;
  @Input() icon: string | undefined;
  @Input() maxLength: number | undefined;
  @Input() hintText: string | undefined;
  @Input() hintLink: string | undefined;

  isShowPassword = false;
  isFocus = false;
  value = ''
  setFormValue(value: string): void {
    this.onChange(value);
    this.onTouch();
  }
  onChange: any = () => {};
  onTouch: any = () => {};
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  writeValue(obj: any): void { }
}

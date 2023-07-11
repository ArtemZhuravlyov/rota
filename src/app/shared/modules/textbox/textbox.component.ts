import { ChangeDetectionStrategy, Component, forwardRef, Input, OnInit, } from '@angular/core';
import { InputType } from "@core/types/form-builder.model";
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, } from "@angular/forms";
import { Style } from "@core/types/style-model";
import {ButtonTypeEnum} from "@core/enums/button-type.enum";

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
export class TextboxComponent implements ControlValueAccessor, OnInit {
  @Input() formControl!: FormControl;
  @Input() defaultValue: string = '';
  @Input() label = '';
  @Input() inputType: InputType = 'text';
  @Input() placeholder: string = '';
  @Input() icon!: string;
  @Input() maxLength!: number;
  @Input() hintText: string | undefined;
  @Input() hintLink: string | string[] | undefined;
  @Input() hintMenu: boolean = false;
  @Input() hintHeading = '';
  @Input() hintDescription = '';
  @Input() styleConfig: Style = {};
  @Input() extendedValidation = false;
  @Input() button!: string;
  @Input() dataType = 'number';

  isShowPassword = false;
  isFocus = false;
  value = '';

  buttonTypeEnum = ButtonTypeEnum;

  ngOnInit() {
    this.formControl.setValue(this.defaultValue);
  }

  setFormValue(value: string): void {
    this.value = value;
    if (this.dataType === 'number') {
      this.onChange(parseInt(value, 10));
    } else {
      this.onChange(value);
    }

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

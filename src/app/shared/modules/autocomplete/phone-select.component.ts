import {ChangeDetectionStrategy, Component, forwardRef, Input, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {DropdownOptions} from "@core/types/form-builder.model";
import {Observable} from "rxjs";

interface PhoneType {
  dialingCode: string;
  countryFlag: string;
}
@Component({
  selector: 'app-phone-select',
  templateUrl: './phone-select.component.html',
  styleUrls: ['./phone-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneSelectComponent),
      multi: true,
    },
  ]
})
export class PhoneSelectComponent implements ControlValueAccessor{

  @Input() title = ''
  @Input() data!: DropdownOptions[] & Observable<DropdownOptions[]>;
  @Input() valueField = 'value';
  @Input() textField = 'displayName';
  @Input() placeholder!: string;
  @Input() icon!: string;

  @ViewChild('auto') autoComplete: any;

  selectedValue: string = '';
  selectedPhone: PhoneType | null = null;

  onPhoneSelection(event: any): void {
    this.selectedPhone = event?.option?.value;
  }
  setFormValue(value: string): void {
    this.onChange(this.selectedPhone?.dialingCode + value);
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

  getOptionText() {
    return '';
  }

}

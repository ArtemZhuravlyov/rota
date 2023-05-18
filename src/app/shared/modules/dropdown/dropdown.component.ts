import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { DropdownOptions } from "@core/types/form-builder.model";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true,
    },
  ]
})
export class DropdownComponent implements ControlValueAccessor {
  @Input() title = ''
  @Input() data!: DropdownOptions[] & Observable<DropdownOptions[]>;
  @Input() valueField = 'value';
  @Input() textField = 'displayName';

  isObservable(data: any) {
    return data instanceof Observable;
  }

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

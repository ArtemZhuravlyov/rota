import {ChangeDetectionStrategy, Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Style} from "@core/types/style-model";
import {DropdownOptions} from "@core/types/form-builder.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true,
    }
  ]
})
export class DatepickerComponent implements ControlValueAccessor {
  @Input() title = '';
  @Input() data!: DropdownOptions[] & Observable<DropdownOptions[]>;
  @Input() placeholder!: string;
  @Input() label!: string;
  @Input() styleConfig: Style = {};

  private onChange!: Function;
  private onTouch!: Function;

  constructor() {
  }

  writeValue(obj: Date): void { }
  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: Function): void {
    this.onTouch = fn;
  }
  dateValueChanged(event: any): void {
    this.data = event.value.toISOString();
    this.onChange(this.data);
    this.onTouch();
  }
}

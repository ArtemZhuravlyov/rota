import {ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import { DropdownOptions } from "@core/types/form-builder.model";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Observable } from "rxjs";
import { Style } from "@core/types/style-model";

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
  @Input() iconField = 'icon';
  @Input() filterable = true;
  @Input() styleConfig: Style = {};
  @Output() selectChanged = new EventEmitter();

  selectedValue: string = '';
  currentIcon: string | null = null;
  searchValue: string = '';
  isOpen = false;

  isObservable(data: any) {
    return data instanceof Observable;
  }

  setFormValue(data: DropdownOptions) {
    console.log(1)
    this.currentIcon = data[this.iconField] as string;
    this.selectedValue = data[this.valueField] as string;
    this.selectChanged.emit(this.selectedValue);
    this.onChange(data[this.valueField]);
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

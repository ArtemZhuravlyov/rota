import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { isEmpty, isNil } from 'lodash';
import {
  CommonFieldConfigs,
  DropdownFormFieldConfig,
} from '@shared/components/form/types/form-field-entryl.type';
import { ListItemInput } from '@shared/components/input-dropdown/list-dropdown-content.type';
import { Style } from '@core/types/style-model';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { CountryFlagModule } from '@shared/pipes/country-flag/country-flag.module';
import { FilterModule } from '@shared/pipes/filter/filter.module';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { SearchInputModule } from '@shared/modules/search-input/search-input.module';
@Component({
  selector: 'app-input-dropdown',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    TranslateModule,
    ReactiveFormsModule,
    CountryFlagModule,
    FilterModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    SearchInputModule,
  ],
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDropdownComponent
  implements
    ControlValueAccessor,
    CommonFieldConfigs,
    DropdownFormFieldConfig
{
  private _data: ListItemInput[] = [];
  private _value: ListItemInput | null = null;
  private sourceDataType = 'object';

  @Input() formControl!: FormControl;
  @Input() idField = 'id';
  @Input() nameField = 'name';
  @Input() placeholder = 'SELECT';
  @Input() styleConfig: Style = {};
  @Input() set value(value: any) {
    this._value = !isNil(value) ? this.deobjectify(value) : null;
    this.preselectedValue = this._value;
  }

  get value() {
    return this._value;
  }
  @Input() set data(data: Array<any>) {
    if (!isNil(data) && !isEmpty(data)) {
      this.sourceDataType = typeof data[0];
      this._data = data.map(item => this.deobjectify(item));
    } else {
      this._data = [];
    }
  }

  get data() {
    return this._data;
  }

  preselectedValue: ListItemInput | null = null;
  showDropdown = false;

  constructor(private cdr: ChangeDetectorRef) {}

  protected _onChange: any = () => {};
  protected _onTouched: any = () => {};

  writeValue(value: any) {
    if (!isNil(value)) {
      this.value = this.deobjectify(value);
    }
    this._onChange(value);
    this.cdr.detectChanges();
  }
  registerOnChange(fn: any) {
    this._onChange = fn;
  }
  registerOnTouched(fn: any) {
    this._onTouched = fn;
  }

  private deobjectify(item: any) {
    if (typeof item === 'string' || typeof item === 'number') {
      return new ListItemInput(item);
    } else {
      return new ListItemInput({
        id: item[this.idField],
        name: item[this.nameField],
      });
    }
  }

  public onSelectItem(item: ListItemInput) {
    this.showDropdown = false;
    this.value = item;
    this._onTouched();
    this._onChange(this.emittedValue(item));
  }

  emittedValue(val: any) {
    if (!isNil(val)) {
      return this.objectify(val);
    }
    return null;
  }

  private objectify(val: ListItemInput) {
    if (this.sourceDataType === 'object') {
      const obj: { [key: string]: any } = {};
      obj[this.idField] = val.id;
      obj[this.nameField] = val.name;
      return obj;
    }
    if (this.sourceDataType === 'number') {
      return Number(val.id);
    } else {
      return val.name;
    }
  }
}

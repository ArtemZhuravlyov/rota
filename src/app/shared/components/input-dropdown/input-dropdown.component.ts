import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ControlValueAccessor,
  FormControl,
  FormsModule,
  NG_VALUE_ACCESSOR,
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
import { FilterModule } from '@shared/pipes/filter/filter.module';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { SearchInputModule } from '@shared/modules/search-input/search-input.module';
import { SimplebarAngularModule } from 'simplebar-angular';
import { TriangleBorderModule } from '@shared/directives/triangel-border/triangle-border.module';
import { ClickOutsideModule } from '@shared/directives/click-outside/click-outside.module';
import { LabelComponent } from '@shared/components/label/label.component';
import { TranslateKey } from '../../../../assets/i18n/enums/translate-key.enum';
import { ErrorComponent } from '@shared/components/error/error.component';
@Component({
  selector: 'app-input-dropdown',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    TranslateModule,
    ReactiveFormsModule,
    FilterModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    SearchInputModule,
    SimplebarAngularModule,
    TriangleBorderModule,
    ClickOutsideModule,
    LabelComponent,
    ErrorComponent,
    NgOptimizedImage,
  ],
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDropdownComponent),
      multi: true,
    },
  ],
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

  @Input() label: keyof typeof TranslateKey = TranslateKey.EMPTY;
  @Input() formControl!: FormControl;
  @Input() idField = 'id';
  @Input() nameField = 'name';
  @Input() imgSrcFiled = 'imgSrc';
  @Input() filtered = false;
  @Input() placeholder = 'SELECT';
  @Input() styleConfig: Style = {};
  @Input() set value(value: any) {
    this._value =
      !isNil(value) || !isEmpty(value)
        ? this.deobjectify(value)
        : null;
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
    this.filteredData = this._data;
  }

  get data() {
    return this._data;
  }

  filteredData: ListItemInput[] = [];
  selectedItem: ListItemInput | null = null;
  preselectedValue: ListItemInput | null = null;
  showDropdown = false;
  arrow: 'arrow' | 'up-arrow' = 'arrow';
  constructor(private cdr: ChangeDetectorRef) {}

  protected _onChange: any = () => {};
  protected _onTouched: any = () => {};

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
    this.arrow = this.showDropdown ? 'up-arrow' : 'arrow';
  }

  onClickOutside() {
    this.showDropdown = false;
    this.arrow = 'arrow';
  }

  getSelectedItemStyle() {
    if (!isNil(this.selectedItem?.imgSrc))
      return {
        background: `url(${this.selectedItem?.imgSrc}) no-repeat scroll 17px 9px`,
        'padding-left': '55px',
      };
    return {};
  }

  onSearchFilter(searchInput: string) {
    this.filteredData = this.data.filter(item => {
      return item.name
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
  }

  isSelectedValueExist() {
    return !isNil(this.selectedItem);
  }

  isFormControlInvalid() {
    return (
      this.formControl.invalid &&
      (this.formControl.dirty || this.formControl.touched)
    );
  }

  writeValue(value: any) {
    if (!isNil(value) || !isEmpty(value)) {
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
      console.log(this.nameField);
      return new ListItemInput({
        id: item[this.idField],
        name: item[this.nameField],
        imgSrc: item[this.imgSrcFiled],
      });
    }
  }

  public onSelectItem(item: ListItemInput) {
    this.selectedItem = item;
    this.toggleDropdown();
    this.value = item;
    this._onTouched();
    this._onChange(this.emittedValue(item));
  }

  private emittedValue(val: any) {
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
      obj[this.imgSrcFiled] = val.imgSrc;
      return obj;
    }
    if (this.sourceDataType === 'number') {
      return Number(val.id);
    } else {
      return val.name;
    }
  }
}

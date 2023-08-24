import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { DropdownOptions } from '@core/types/form-builder.model';
import { Observable, Subject, takeUntil } from 'rxjs';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Style } from '@core/types/style-model';
import { TranslateKey } from '../../../../assets/i18n/enums/translate-key.enum';

interface Dropdown {
  currencyCode: string;
  countryFlag: string;
}

interface PreSelectedValue {
  displayName: string;
  value: string;
}
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
  ],
})
export class DropdownComponent implements ControlValueAccessor {
  protected readonly NOT_FOUND = TranslateKey.NOT_FOUND;

  @Input() formControl!: FormControl;
  @Input() title = '';
  @Input() additionalTitle = '';
  @Input() data!: DropdownOptions[] & Observable<DropdownOptions[]>;
  @Input() valueField = 'value';
  @Input() textField = 'displayName';
  @Input() iconField = 'icon';
  @Input() filterable = true;
  @Input() styleConfig: Style = {};
  @Output() selectChanged = new EventEmitter();
  @Input() placeholder!: string;
  @Input() checkbox!: boolean;
  @Input() hintMenu = false;
  @Input() hintHeading = '';
  @Input() hintDescription = '';

  selectedValue = '';
  currentIcon: string | null = null;
  searchValue = '';
  isOpen = false;
  selectedDropdown: Dropdown | null = null;
  preselectedValue = '';
  notifier: Subject<void> = new Subject<void>();

  ngAfterViewChecked() {
    this.setPreselectedValue();
  }

  isObservable(data: any) {
    return data instanceof Observable;
  }

  setFormValue(data: DropdownOptions) {
    this.currentIcon = data[this.iconField] as string;
    this.selectedValue = data[this.valueField] as string;
    this.selectedDropdown = {
      currencyCode: data['currencyCode']
        ? data['currencyCode'].toString()
        : '',
      countryFlag: data['countryFlag']
        ? data['countryFlag'].toString()
        : '',
    };
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
  writeValue(obj: any): void {}

  setPreselectedValue() {
    if (this.data) {
      if (Array.isArray(this.data)) {
        this.data.find((data: any) => {
          if (data.preSelected) {
            this.preselectedValue = data.value;
          }
        });
      } else {
        (this.data as Observable<any>).subscribe(data => {
          data.find((data: any) => {
            if (data.preSelected) {
              this.preselectedValue = data.value;
            }
          });
          takeUntil(this.notifier);
        });
      }
    }
  }
}

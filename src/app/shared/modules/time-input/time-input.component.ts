import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from "@angular/forms";
import { MatSlideToggleChange } from "@angular/material/slide-toggle";

@Component({
  selector: 'app-time-input',
  templateUrl: './time-input.component.html',
  styleUrls: ['./time-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimeInputComponent),
      multi: true,
    },
  ]
})
export class TimeInputComponent {
  @Input() formControl!: FormControl;
  @Input() label = '';
  time = ''

  setFormValue(): void {
    console.log(this.time, 'tiemeee');
    this.onChange(this.time);
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

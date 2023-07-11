import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from "@angular/forms";
import { MatSlideToggleChange } from "@angular/material/slide-toggle";

@Component({
  selector: 'app-text-toggle',
  templateUrl: './text-toggle.component.html',
  styleUrls: ['./text-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextToggleComponent),
      multi: true,
    },
  ]
})
export class TextToggleComponent {
  @Input() formControl!: FormControl;
  @Input() label = '';
  @Input() toggleText = '';

  setFormValue(event: MatSlideToggleChange): void {
    this.onChange(event?.checked);
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

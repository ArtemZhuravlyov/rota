import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileInputComponent),
      multi: true,
    },
  ]
})
export class FileInputComponent {
  @Input() formControl!: FormControl;
  @Input() label = '';
  @Input() maxFile = '';

  selectedFileSize = '';
  selectedFiletype = '';
  selectedFileSrc = '';
  selectedFile!: any;
  inputIsError = false;
  allowedFileTypes = ['image/png', '.svg', '.jpeg']

  buttonStyleConfig = {
    mobileBtn: {
      background: '#F0FFF7',
      'border-radius': '99px',
      padding: '0',
      border: '1px solid #1C9F5680',
      height: '32px',
      width: '32px',
    },
  }
  selectFile(inputFile: any) {
    this.selectedFile = inputFile.files[0];
    const { name, size, type } = this.selectedFile;


    this.onChange(this.selectedFile);
    this.onTouch();

    this.selectedFileSize = Number((size / 10 ** 6).toFixed(1))
      ? `${(size / 10 ** 6).toFixed(1)}mb`
      : `${(size / 10 ** 3).toFixed(1)}kb`;

    console.log(type, 'FILE TYPE');
    if (!this.allowedFileTypes.includes(type)) {
      this.selectedFiletype = type;
      this.inputIsError = true;
    } else {
      this.inputIsError = false;
    }
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

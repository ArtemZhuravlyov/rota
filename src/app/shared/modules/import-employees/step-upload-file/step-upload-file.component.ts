import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import { MatStepper } from "@angular/material/stepper";
import { FormGroup } from "@angular/forms";
import { EmployeeService } from "@core/services/employee/employee.service";
import { AuthService } from "@core/services/account/auth.service";
import { CompanyService } from "@core/services/company/company.service";
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-step-upload-file',
  templateUrl: './step-upload-file.component.html',
  styleUrls: ['./step-upload-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepUploadFileComponent {
  @Input() formGroup!: FormGroup;
  @Output() fileData = new EventEmitter();

  items: { title: string, subTitle: string, isDownload?: boolean }[] = [
    { title: 'DOWNLOAD_TEMPLATE', subTitle: 'TEMPLATE_SPREADSHEET', isDownload: true },
    { title: 'UPLOAD_SPREADSHEET', subTitle: 'TEMPLATE_SPREADSHEET' },
  ];

  selectedFileSize = '';
  selectedFiletype = '';
  selectedFileSrc = '';
  selectedFile!: any;
  inputIsError = false;

  allowedFileTypes = [
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ];

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

  constructor(
    private matStepper: MatStepper,
    private employeeService: EmployeeService,
    private authService: AuthService,
    private companyService: CompanyService,
  ) {
  }

  selectFile(inputFile: any) {
    this.selectedFile = inputFile.files[0];
    const { name, size, type } = this.selectedFile;
    this.getFileData(this.selectedFile);
    const fileFormControl = this.formGroup.get('file')!;
    this.selectedFileSrc = fileFormControl.value;
    fileFormControl.patchValue(name);

    this.selectedFileSize = Number((size / 10 ** 6).toFixed(1))
      ? `${(size / 10 ** 6).toFixed(1)}mb`
      : `${(size / 10 ** 3).toFixed(1)}kb`;

    if (!this.allowedFileTypes.includes(type)) {
      this.selectedFiletype = type;
      this.inputIsError = true;
    } else {
      this.inputIsError = false;
    }
  }

  stepNext(): void {
    const { companyId, userId } = this.authService.getCurrentUser();
    const formData = new FormData();
    formData.append('file', this.selectedFile)
    this.employeeService.recordFile(userId, companyId, formData).subscribe(() => {
      this.matStepper.next();
    });
  }

  downloadTemplate(): void {
    this.companyService.exportTemplate().subscribe();
  }

  getFileData(file: File): void {
    const reader: FileReader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (e: any) => {
      const binarystr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);
      console.log(data)
      this.fileData.emit(data);
    };
  }
}

import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {errorTableConfig} from "@shared/modules/import-employees/modal/config/error-table.config";
import {companyListConfig} from "@app/modules/dashboard/company/configs/company-list.config";

export interface DialogData {
  errors: string;
}


@Component({
  selector: 'app-error-fix.modal',
  templateUrl: './error-fix.modal.component.html',
  styleUrls: ['./error-fix.modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorFixModalComponent {
  readonly errorTableConfig = errorTableConfig;
  readonly companyListConfig = companyListConfig;

  constructor(
    public dialogRef: MatDialogRef<ErrorFixModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
  }


}

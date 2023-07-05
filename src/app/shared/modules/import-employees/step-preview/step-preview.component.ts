import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatStepper} from "@angular/material/stepper";
import {Subject} from "rxjs";
import {FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ErrorFixModalComponent} from "@shared/modules/import-employees/modal/error-fix.modal/error-fix.modal.component";

@Component({
  selector: 'app-step-preview',
  templateUrl: './step-preview.component.html',
  styleUrls: ['./step-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepPreviewComponent {
  @Input() form!: FormGroup;
  errors = ['Date Of Birth', 'Employee Number', 'Hire Date', 'State']
  recordsCount = 350;
  errorsCount = 32;

  importProgress = 50;

  importRecords$ = new Subject<any[]>()

  constructor(
    private matStepper: MatStepper,
    public dialog: MatDialog
  ) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ErrorFixModalComponent, {
      width: '1000px',
      height: '350px',
      data: {
        errors: [
          {
            rowId: 33333,
            employeeNumber: 233 - 444 - 2224,
            dateOfBirth:  'ff',
          },
          {
            rowId: 33333,
            employeeNumber: 233 - 444 - 2224,
            dateOfBirth:  'ff',
          },
          {
            rowId: 33333,
            employeeNumber: 233 - 444 - 2224,
            dateOfBirth: 'ff',
          }
        ],
        totalCount: 3
      },
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  back(): void {
    this.matStepper.previous();
  }

  onImportRecords(): void {
    this.importRecords$.next(['trs'])
    this.form.disable();
  }
}

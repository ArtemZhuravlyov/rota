import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatStepper } from "@angular/material/stepper";
import { Subject } from "rxjs";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-step-preview',
  templateUrl: './step-preview.component.html',
  styleUrls: ['./step-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepPreviewComponent {
  @Input() form!: FormGroup;
  errors = ['test','test','test','test']
  recordsCount = 350;
  errorsCount = 32;

  importRecords$ = new Subject<any[]>()

  constructor(
    private matStepper: MatStepper,
  ) {
  }

  back(): void {
    this.matStepper.previous();
  }

  onImportRecords(): void {
    this.importRecords$.next(['trs'])
    this.form.disable();
  }
}

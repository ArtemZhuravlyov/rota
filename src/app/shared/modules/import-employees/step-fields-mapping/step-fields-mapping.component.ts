import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatStepper } from "@angular/material/stepper";
import { DropdownOptions } from "@core/types/form-builder.model";

@Component({
  selector: 'app-step-fields-mapping',
  templateUrl: './step-fields-mapping.component.html',
  styleUrls: ['./step-fields-mapping.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepFieldsMappingComponent implements OnInit, OnChanges {
  @Input() form!: FormGroup;
  @Input() fileData!: any[];
  @Input() rotaSheetFields: { fieldName: string, type: string }[] = [];

  columnNames = ['RotaSheetField', 'Mapping', 'Upload file Headers']
  fileFields: DropdownOptions[] = [];

  constructor(
    public matStepper: MatStepper,
  ) {
  }

  ngOnInit() {
    this.rotaSheetFields.forEach((field) => {
      this.form.addControl(field.fieldName, new FormControl('', Validators.required));
    })
    this.form.valueChanges.subscribe((v) => console.log(v))
  }

  ngOnChanges(): void {
    if (this.fileData) {
      Object.keys(this.fileData[0]).forEach((key) => this.fileFields.push({displayName: key, value: key}));
    }
  }

  nextStep(): void {
    this.matStepper.next();
  }
}

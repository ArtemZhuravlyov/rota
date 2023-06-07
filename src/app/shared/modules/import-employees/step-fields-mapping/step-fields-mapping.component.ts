import {ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {MatStepper} from "@angular/material/stepper";
import {DropdownOptions} from "@core/types/form-builder.model";

@Component({
  selector: 'app-step-fields-mapping',
  templateUrl: './step-fields-mapping.component.html',
  styleUrls: ['./step-fields-mapping.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepFieldsMappingComponent implements OnChanges {
  @Input() form!: FormGroup;
  @Input() fileData!: any[];
  @Input() rotaSheetFields: { name: string, type?: string }[] = [
    {
      name: 'Username',
      type: ''
    },
    {
      name: 'Lastname',
      type: ''
    }
  ]

  columnNames = ['RotaSheetField', 'Mapping', 'Upload file Headers']
  fileFields: DropdownOptions[] = [];

  constructor(
    private matStepper: MatStepper,
  ) {
  }

  back(): void {
    this.matStepper.previous();
  }

  ngOnChanges(): void {
    if (this.fileData) {
      Object.keys(this.fileData[0]).forEach((key) => this.fileFields.push({displayName: key, value: key}));
    }
  }

  getType(field: any): string {
    switch (field) {
      case typeof field === 'string':
        return 'SINGLE_TEXT'
      case typeof field === 'number':
        return 'NUMBER';
      case field instanceof Date:
        return 'DATE';
      default:
        return "SINGLE_TEXT";
    }
  }
}

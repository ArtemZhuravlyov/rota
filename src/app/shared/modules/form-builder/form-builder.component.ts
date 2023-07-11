import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormField } from "@core/types/form-builder.model";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ComponentTypeEnum } from "@core/enums/component-type.enum";
import { Style } from "@core/types/style-model";

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormBuilderComponent implements OnInit {
  @Input() formFields: FormField[] = [];
  @Input() styleConfig: Style = {};
  @Input() actionButtonIncluded: boolean = true;
  @Output() createdForm = new EventEmitter();
  @Output() selectedFormValue = new EventEmitter();

  form!: FormGroup;
  componentType = ComponentTypeEnum;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createFormBuilder();
    this.generateFormFields();
    this.addValidatorsForFormField();
    this.addDisabledForFormField();
  }

  private createFormBuilder(): void {
   this.form = this.fb.group({});
   this.createdForm.emit(this.form);
  }

  private generateFormFields(): void {
    this.formFields.forEach((field) => {
      this.form.addControl(field.key, new FormControl(null, { validators: field.validators ?? [] }));
    });
  }

  private addValidatorsForFormField(): void {
    this.formFields.forEach(field => this.form.addValidators(field.formValidators ?? []));
  }

  private addDisabledForFormField(): void {
    this.formFields.forEach(field => {
      if (field.disabled) {
        this.form.controls[field.key].disable();
      }
    })
  }

  selectChanged(value: any, key: any){
    this.selectedFormValue.emit({key, value})
  }
}

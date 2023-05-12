import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormData, FormField } from "../../../core/types/form-builder.model";
import { FormBuilder, FormControl, UntypedFormGroup } from "@angular/forms";
import { ComponentTypeEnum } from "../../../core/enums/component-type.enum";

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormBuilderComponent implements OnInit {
  @Input() formFields: FormField[] = [];
  @Input() formData: FormData = {};
  @Output() valueChangeWhenFormIsValid = new EventEmitter();
  @Output() isValid = new EventEmitter<boolean>();

  form!: UntypedFormGroup;

  componentType = ComponentTypeEnum;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createFormBuilder();
    this.generateFormFields();
    this.subscriberOnChangeFormValue();
    this.addValidatorsForFormField();
  }

  private createFormBuilder(): void {
   this.form = this.fb.group({});
  }

  private generateFormFields(): void {
    this.formFields.forEach((field) => {
      this.form.addControl(field.key, new FormControl('', field.validators ?? []));
    });
  }

  private addValidatorsForFormField(): void {
    this.formFields.forEach(field => this.form.addValidators(field.formValidators ?? [])) // todo
  }

  private subscriberOnChangeFormValue(): void {
    this.form.valueChanges.subscribe((v) => {
        this.valueChangeWhenFormIsValid.emit(v);
        this.isValid.emit(this.form.valid);
    });
  }
}

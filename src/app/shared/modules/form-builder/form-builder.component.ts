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
  @Output() createdForm = new EventEmitter();

  form!: FormGroup;
  componentType = ComponentTypeEnum;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createFormBuilder();
    this.generateFormFields();
    this.addValidatorsForFormField();
  }

  private createFormBuilder(): void {
   this.form = this.fb.group({});
   this.createdForm.emit(this.form);
  }

  private generateFormFields(): void {
    this.formFields.forEach((field) => {
      this.form.addControl(field.key, new FormControl('', { validators: field.validators ?? [] }));
    });
  }

  private addValidatorsForFormField(): void {
    this.formFields.forEach(field => this.form.addValidators(field.formValidators ?? []));
  }
}

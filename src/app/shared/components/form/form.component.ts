import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Style } from '@core/types/style-model';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormFieldEntry } from '@shared/components/form/types/form-field-entryl.type';
import { ComponentTypeEnum } from '@core/enums/component-type.enum';
import { TranslateModule } from '@ngx-translate/core';
import { FormFiledTypeName } from '@shared/components/form/types/form-filed-type-name';
import { InputComponent } from '@shared/components/input/input.component';
import { TextareaComponent } from '@shared/components/textarea/textarea.component';
import { InputPasswordComponent } from '@shared/components/input-password/input-password.component';
import { InputDropdownComponent } from '@shared/components/input-dropdown/input-dropdown.component';
import { DatepickerComponent } from '@shared/components/datepicker/datepicker.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    InputComponent,
    TextareaComponent,
    InputPasswordComponent,
    InputDropdownComponent,
    DatepickerComponent,
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {
  @Input() formFields: FormFieldEntry[] = [];
  @Input() styleConfig: Style = {};
  @Input() actionButtonIncluded = true;
  @Output() createdForm = new EventEmitter();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createFormBuilder();
    this.generateFormFields();
  }

  private createFormBuilder(): void {
    this.form = this.fb.group({});
    this.createdForm.emit(this.form);
  }

  private generateFormFields(): void {
    this.formFields.forEach(field => {
      this.form.addControl(
        field.key,
        new FormControl(field.config.value ?? null, {
          validators: field.validators ?? [],
        })
      );
    });
  }

  protected readonly ComponentTypeEnum = ComponentTypeEnum;
  protected readonly FormControlNameEnum = FormFiledTypeName;
}

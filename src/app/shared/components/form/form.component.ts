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
import { DatepickerModule } from '@shared/modules/datepicker/datepicker.module';
import { DropdownModule } from '@shared/modules/dropdown/dropdown.module';
import { FileInputModule } from '@shared/modules/file-input/file-input.module';
import { PhoneSelectModule } from '@shared/modules/autocomplete/phone-select.module';
import { TextToggleModule } from '@shared/modules/text-checkbox/text-toggle.module';
import { TextboxModule } from '@shared/modules/textbox/textbox.module';
import { TimeInputModule } from '@shared/modules/time-input/time-input.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormFiledTypeName } from '@shared/components/form/types/form-filed-type-name';
import { InputComponent } from '@shared/components/input/input.component';
import { TextareaComponent } from '@shared/components/textarea/textarea.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DatepickerModule,
    DropdownModule,
    FileInputModule,
    PhoneSelectModule,
    TextToggleModule,
    TextboxModule,
    TimeInputModule,
    TranslateModule,
    InputComponent,
    TextareaComponent,
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

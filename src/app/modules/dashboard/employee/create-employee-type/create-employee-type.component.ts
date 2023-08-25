import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ButtonTypeEnum } from '@core/enums/button-type.enum';
import { EmploymentTypeService } from '@core/services/company/employment-type/employment-type.service';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { FormFieldEntry } from '@shared/components/form/types/form-field-entryl.type';
import { FormFiledTypeName } from '@shared/components/form/types/form-filed-type-name';
import { TranslateKey } from '../../../../../assets/i18n/enums/translate-key.enum';
import { CustomValidators } from '@shared/utils/custom-validators/custom-validators';

@Component({
  selector: 'app-create-employee-type',
  templateUrl: './create-employee-type.component.html',
  styleUrls: ['./create-employee-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEmployeeTypeComponent {
  form!: FormGroup<{
    name: FormControl<string>;
    description: FormControl<string>;
  }>;

  data: FormFieldEntry[] = [
    {
      type: FormFiledTypeName.INPUT,
      key: 'name',
      validators: [CustomValidators.required],
      config: {
        inputType: 'text',
        styleConfig: {
          width: '480px',
          height: '52px',
        },
        label: TranslateKey.NAME,
        maxLength: 100,
        placeholder: 'ENTER',
        value: '',
        readonly: false,
      },
    },
    {
      type: FormFiledTypeName.TEXTAREA,
      key: 'description',
      validators: [
        CustomValidators.required,
        CustomValidators.excludeSymbolsValidator({
          symbols: ['`'],
        }),
      ],
      config: {
        styleConfig: { width: '480px', height: '100px' },
        label: TranslateKey.DESCRIPTION,
        maxLength: 500,
        placeholder: 'ENTER',
        value: '',
        readonly: false,
      },
    },
  ];
  protected readonly ButtonTypeEnum = ButtonTypeEnum;

  constructor(
    private readonly employmentTypeService: EmploymentTypeService
  ) {}

  onSaveClick() {
    const values = this.form.getRawValue();
    console.log(values);
    this.form.disable();
    this.employmentTypeService
      .creteNewEmploymentType(values)
      .subscribe({
        next: () => {
          this.form.enable();
          this.form.reset();
        },
        error: () => {
          this.form.enable();
        },
      });
  }

  protected readonly NavigationPaths = NavigationPaths;
}

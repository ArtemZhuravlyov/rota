import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { ButtonTypeEnum } from '@core/enums/button-type.enum';
import { FormField } from '@core/types/form-builder.model';
import { FormGroup } from '@angular/forms';
import { benefitCreateFormConfig } from '@modules/dashboard/company/benefit/config/benefit-create-form.config';

@Component({
  selector: 'app-new-benefit',
  templateUrl: './new-benefit.component.html',
  styleUrls: ['./new-benefit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewBenefitComponent {
  protected readonly NavigationPaths = NavigationPaths;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  formFields: FormField[] = benefitCreateFormConfig;
  form!: FormGroup;

  ngOnInit() {
    console.log('new benefit on init');
  }
  createbenefit() {}
}

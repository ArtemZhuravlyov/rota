import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { ButtonTypeEnum } from '@core/enums/button-type.enum';
import { FormGroup } from '@angular/forms';
import { benefitCreateFormConfig } from '@modules/dashboard/company/benefit/config/benefit-create-form.config';
import { GradeCategoryService } from '@core/services/company/grade-category/grade-category.service';
import { Observable } from 'rxjs';
import { CompanyResponse } from '@core/types/company.interface';

@Component({
  selector: 'app-new-benefit',
  templateUrl: './new-benefit.component.html',
  styleUrls: ['./new-benefit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewBenefitComponent implements OnInit {
  protected readonly NavigationPaths = NavigationPaths;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  formField = benefitCreateFormConfig;
  form!: FormGroup;
  //todo grades response type
  grades$!: Observable<any>;

  constructor(private gradeCategoryService: GradeCategoryService) {}

  ngOnInit(): void {
    this.grades$ = this.gradeCategoryService.getGradeCategoriesList();
    this.grades$.subscribe(() => {});
    this.formField.map(item => {
      if (item.key === 'grade_category') {
        item.config.data = '';
      }
    });
    console.log(this.grades$);
  }
  createbenefit() {}
}

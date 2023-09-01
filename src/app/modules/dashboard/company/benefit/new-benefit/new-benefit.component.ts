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
import { finalize, Observable } from 'rxjs';
import { CompanyResponse } from '@core/types/company.interface';
import { FormFiledTypeName } from '@shared/components/form/types/form-filed-type-name';
import { GradeCategoryResponse } from '@core/types/grade-category.model';
import { BenefitService } from '@modules/dashboard/company/benefit/benefit.service';
import { Router } from '@angular/router';

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
  grades$!: Observable<GradeCategoryResponse>;

  constructor(
    private gradeCategoryService: GradeCategoryService,
    private benefitService: BenefitService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.grades$ = this.gradeCategoryService.getGradeCategoriesList();
    this.grades$.subscribe(() => {});
    this.formField.map(item => {
      if (
        item.key === 'gradeCategory' &&
        item.type === FormFiledTypeName.DROPDOWN
      ) {
        this.grades$.subscribe(
          data => (item.config.data = data.gradeCategories)
        );
      }
    });
  }
  createBenefit() {
    console.log(this.form.getRawValue());
    const body = {
      ...this.form.getRawValue(),
      gradeCategoryId: this.form.getRawValue().gradeCategory.id,
    };
    this.benefitService
      .createBenefit(body)
      .pipe(
        finalize(() => {
          this.router.navigate([NavigationPaths.BACK]);
        })
      )
      .subscribe();
  }
}

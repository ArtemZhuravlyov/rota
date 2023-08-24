import { ChangeDetectionStrategy, Component } from '@angular/core';
import { gradeCategoryFormConfig } from '@app/modules/dashboard/company/grade-category/configs/grade-category-form.config';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { FormGroup } from '@angular/forms';
import { GradeCategoryService } from '@core/services/company/grade-category/grade-category.service';
import { tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateKey } from '../../../../../../assets/i18n/enums/translate-key.enum';

@Component({
  selector: 'app-create-grade-category',
  templateUrl: './create-grade-category.component.html',
  styleUrls: ['./create-grade-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateGradeCategoryComponent {
  protected readonly NavigationPaths = NavigationPaths;
  protected readonly ADD_INFORMATION = TranslateKey.ADD_INFORMATION;
  protected readonly gradeCategoryFormConfig =
    gradeCategoryFormConfig;

  form!: FormGroup;

  constructor(
    private readonly gradeCategoryService: GradeCategoryService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  createGradeCategory(form: FormGroup) {
    this.gradeCategoryService
      .createGradeCategory(form.getRawValue())
      .pipe(
        tap(() =>
          this.router.navigate([NavigationPaths.BACK], {
            relativeTo: this.route,
          })
        )
      )
      .subscribe();
  }
}

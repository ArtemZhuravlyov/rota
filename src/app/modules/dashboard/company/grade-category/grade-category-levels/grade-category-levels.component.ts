import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { GradeCategoryService } from '@core/services/company/grade-category/grade-category.service';
import { map, switchMap } from 'rxjs';
import { GradeCategory } from '@core/types/grade-category.model';
import { gradeLevelsTableConfig } from '@app/modules/dashboard/company/grade-category/configs/grade-levels-table.config';
import { TableAction } from '@core/types/data-table';
import { gradeLevelsFormConfig } from '@app/modules/dashboard/company/grade-category/configs/grade-levels-form.config';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { ActionButtonName } from '@shared/components/action-button/enums/action-button-name.enum';
import { ActionButton } from '@shared/components/action-button/types/action-button.type';

@Component({
  selector: 'app-grade-category-levels',
  templateUrl: './grade-category-levels.component.html',
  styleUrls: ['./grade-category-levels.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GradeCategoryLevelsComponent implements OnInit {
  protected readonly gradeLevelsTableConfig = gradeLevelsTableConfig;
  protected readonly gradeLevelsFormConfig = gradeLevelsFormConfig;
  protected readonly NavigationPaths = NavigationPaths;

  gradeCategoryId$ = this.gradeCategoryService.selectedGrade$.pipe(
    map((grade: GradeCategory) => grade.id)
  );

  gradeCategoryLevels$ = this.gradeCategoryId$.pipe(
    switchMap((id: string) =>
      this.gradeCategoryService.getGradeCategoryLevels(id)
    ),
    map(levels => {
      if (levels == null || levels == undefined) {
        return {} as any;
      } else {
        return { gradeCategoryLevels: [...levels] };
      }
    })
  );

  gradeCategoryId = '';

  actionConfig: ActionButton[] = [
    { type: ActionButtonName.DELETE, disabled: false },
  ];

  constructor(
    private readonly gradeCategoryService: GradeCategoryService
  ) {}

  ngOnInit() {
    this.gradeCategoryId$.subscribe(r => (this.gradeCategoryId = r));
    this.gradeCategoryLevels$.subscribe(r =>
      console.log('levels', r)
    );
  }

  onActionClicked(event: TableAction) {
    if (event.action === 'delete') {
      this.gradeCategoryService
        .deleteGradeLevel(event.payload.id)
        .subscribe();
    }
  }
}

import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {GradeCategoryService} from "@core/services/company/grade-category/grade-category.service";
import {map, switchMap, tap} from "rxjs";
import {GradeCategory} from "@core/types/grade-category.model";
import {gradeLevelsTableConfig} from "@app/modules/dashboard/company/grade-category/configs/grade-levels-table.config";
import {TableAction, TableActionTypes} from "@core/types/data-table";
import {gradeLevelsFormConfig} from "@app/modules/dashboard/company/grade-category/configs/grade-levels-form.config";
import {FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NavigationPaths} from "@core/enums/navigation-paths.enum";

@Component({
  selector: 'app-grade-category-levels',
  templateUrl: './grade-category-levels.component.html',
  styleUrls: ['./grade-category-levels.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class GradeCategoryLevelsComponent implements OnInit{

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
      if (levels == null || levels == undefined){
      return {} as any
      } else {
        return ({gradeCategoryLevels: [...levels]})
      }
    })
  );

  gradeCategoryId = '';

  actionConfig = [
    { icon: 'delete', type: TableActionTypes.DELETE, styleConfig: {
        'width': '30px',
        'height': '30px',
        'background': '#FFFFFF',
        'border': '1px solid #E4EDF4',
        'color': '#FF0000'} },
  ];

  constructor(
    private readonly gradeCategoryService: GradeCategoryService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
   this.gradeCategoryId$.subscribe(r => this.gradeCategoryId = r);
   this.gradeCategoryLevels$.subscribe(r => console.log('levels', r))
  }

  onActionClicked(event: TableAction){
    if (event.action === 'delete'){
      this.gradeCategoryService.deleteGradeLevel(event.payload.id).subscribe()
    }
    if (event.action === 'add') {
      let newGradeLevel = {};
      event.payload.map((form: FormGroup) => form.getRawValue()).forEach((object:any) =>
        newGradeLevel = {...newGradeLevel, ...object});
      this.gradeCategoryService.createGradeLevel(this.gradeCategoryId, newGradeLevel).pipe(
        tap(() => this.router.navigate(
          [NavigationPaths.BACK],
          { relativeTo: this.route }
        )),
      ).subscribe();
    }
  }
}

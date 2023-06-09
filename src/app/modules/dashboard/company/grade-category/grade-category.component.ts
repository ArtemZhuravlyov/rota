import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationPaths } from "@core/enums/navigation-paths.enum";
import { ButtonTypeEnum } from "@core/enums/button-type.enum";
import {
  gradeCategoryTableConfig
} from "@app/modules/dashboard/company/grade-category/configs/grade-category-table.config";
import { TableAction } from "@core/types/data-table";
import { PageEvent } from "@angular/material/paginator";
import { BehaviorSubject, switchMap } from "rxjs";
import { toSignal } from "@angular/core/rxjs-interop";
import { GradeCategoryService } from "@core/services/company/grade-category/grade-category.service";

const INITIAL_PAGE = {
  pageSize: 2,
  pageIndex: 1,
};

@Component({
  selector: 'app-grade-category',
  templateUrl: './grade-category.component.html',
  styleUrls: ['./grade-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GradeCategoryComponent {

  protected readonly NavigationPaths = NavigationPaths;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly gradeCategoryTableConfig = gradeCategoryTableConfig;
  private readonly _currentPage$ = new BehaviorSubject(INITIAL_PAGE);
  private readonly currentPage = this._currentPage$.asObservable();

  gradeCategoriesList = toSignal(
    this.currentPage.pipe(
      switchMap(({ pageSize, pageIndex }) =>
        this.gradeCategoryService.getGradeCategoriesList(pageSize, pageIndex)
      ),
    )
  );

  constructor(private readonly gradeCategoryService: GradeCategoryService) {}

  onActionClicked($event: TableAction): void {

  }

  onPageChange(currentPage: PageEvent): void {
    const nextPage = { ...currentPage, pageIndex: ++currentPage.pageIndex };
    this._currentPage$.next(nextPage);
  }
}

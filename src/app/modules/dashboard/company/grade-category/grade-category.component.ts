import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { ButtonTypeEnum } from '@core/enums/button-type.enum';
import { gradeCategoryTableConfig } from '@app/modules/dashboard/company/grade-category/configs/grade-category-table.config';
import {
  TableAction,
  TableActionTypes,
} from '@core/types/data-table';
import { PageEvent } from '@angular/material/paginator';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { GradeCategoryService } from '@core/services/company/grade-category/grade-category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PrintService } from '@core/services/print/print.service';
import { ActionButtonName } from '@shared/components/action-button/enums/action-button-name.enum';
import { ActionButton } from '@shared/components/action-button/types/action-button.type';

const INITIAL_PAGE = {
  pageSize: 2,
  pageIndex: 1,
};

@Component({
  selector: 'app-grade-category',
  templateUrl: './grade-category.component.html',
  styleUrls: ['./grade-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GradeCategoryComponent implements OnInit {
  protected readonly NavigationPaths = NavigationPaths;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly gradeCategoryTableConfig =
    gradeCategoryTableConfig;
  protected readonly isPrinting$ = this.printService.isPrinting$;
  private readonly _currentPage$ = new BehaviorSubject(INITIAL_PAGE);
  private readonly currentPage = this._currentPage$.asObservable();
  exporting$ = new BehaviorSubject([]);
  gradeCategoriesList$!: Observable<any>;
  selectedTableAccs$ =
    this.gradeCategoryService.selectedTableAccounts$;

  actionConfig: ActionButton[] = [
    { type: ActionButtonName.VIEW_DETAILS, disabled: false },
    { type: ActionButtonName.DELETE, disabled: false },
  ];

  constructor(
    private readonly gradeCategoryService: GradeCategoryService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly printService: PrintService
  ) {}

  ngOnInit() {
    this.gradeCategoriesList$ = this.currentPage.pipe(
      switchMap(({ pageSize, pageIndex }) =>
        this.gradeCategoryService.getGradeCategoriesList(
          pageSize,
          pageIndex
        )
      )
    );
  }

  onActionClicked(event: TableAction): void {
    switch (event.action) {
      case TableActionTypes.DELETE:
        this.gradeCategoryService
          .deleteGradeCategory(event.payload.id)
          .subscribe();
        break;
      case TableActionTypes.EXPORT:
        const exportTable =
          this.gradeCategoryService.selectedTableAccounts.map(
            (r: any) => ({
              Name: r.name,
              NumberOfJobRole: r.positionCount,
            })
          );
        this.exporting$.next(exportTable);
        break;
    }
  }

  onPageChange(currentPage: PageEvent): void {
    const nextPage = {
      ...currentPage,
      pageIndex: ++currentPage.pageIndex,
    };
    this._currentPage$.next(nextPage);
  }

  @HostListener('window:afterprint', ['$event'])
  onPrintWindowClosed(): void {
    this.printService.isPrinting$.next(false);
    this.gradeCategoriesList$ = this.currentPage.pipe(
      switchMap(({ pageSize, pageIndex }) =>
        this.gradeCategoryService.getGradeCategoriesList(
          pageSize,
          pageIndex
        )
      )
    );
  }

  onSelectedTableItems(items: any) {
    this.gradeCategoryService.selectedTableAccounts = [
      ...items.values(),
    ];
    this.gradeCategoryService.selectedTableAccounts$.next([
      ...items.values(),
    ]);
  }
}

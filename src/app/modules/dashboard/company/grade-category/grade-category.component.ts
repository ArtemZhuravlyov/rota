import {ChangeDetectionStrategy, Component, effect, HostListener, OnInit} from '@angular/core';
import { NavigationPaths } from "@core/enums/navigation-paths.enum";
import { ButtonTypeEnum } from "@core/enums/button-type.enum";
import {
  gradeCategoryTableConfig
} from "@app/modules/dashboard/company/grade-category/configs/grade-category-table.config";
import {TableAction, TableActionTypes} from "@core/types/data-table";
import { PageEvent } from "@angular/material/paginator";
import {BehaviorSubject, map, Observable, of, switchMap} from "rxjs";
import { GradeCategoryService } from "@core/services/company/grade-category/grade-category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PrintService} from "@core/services/print/print.service";

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
export class GradeCategoryComponent implements OnInit{

  protected readonly NavigationPaths = NavigationPaths;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly gradeCategoryTableConfig = gradeCategoryTableConfig;
  protected readonly isPrinting$ = this.printService.isPrinting$;
  private readonly _currentPage$ = new BehaviorSubject(INITIAL_PAGE);
  private readonly currentPage = this._currentPage$.asObservable();
  exporting$ = new BehaviorSubject([]);
  gradeCategoriesList$!: Observable<any>;
  selectedTableAccs$ = this.gradeCategoryService.selectedTableAccounts$

  actionConfig = [
    { icon: 'eye', type: TableActionTypes.VIEW, styleConfig: {
        'width': '30px',
        'height': '30px',
        'background': '#FFFFFF',
        'border': '1px solid #E4EDF4',
        'color': '#91ACC2'
      } },
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
    private readonly activatedRoute: ActivatedRoute,
    private readonly printService: PrintService
  ) {}

  ngOnInit() {
    this.gradeCategoriesList$ = this.currentPage.pipe(
      switchMap(({ pageSize, pageIndex }) =>
        this.gradeCategoryService.getGradeCategoriesList(pageSize, pageIndex)
      ),
    );
  }

  onActionClicked(event: TableAction): void {
    switch (event.action) {
      case TableActionTypes.DELETE:
        this.gradeCategoryService.deleteGradeCategory(event.payload.id).subscribe()
        break;
      case TableActionTypes.ADD:
        console.log('add')
        break;
      case TableActionTypes.PRINT:
        let selectedAccounts$ = of(this.gradeCategoryService.selectedTableAccounts).pipe(
          map((accounts: any) => ({
            gradeCategories: accounts,
            totalCount: accounts.length
          })));
        this.gradeCategoriesList$ = selectedAccounts$;
        this.printService.isPrinting$.next(true);
        setTimeout(() => window.print(), 100)
        break;
      case TableActionTypes.EXPORT:
        let exportTable = this.gradeCategoryService.selectedTableAccounts.map(
          (r:any) => ({
            Name: r.name,
            NumberOfJobRole: r.positionCount
          })
        )
        this.exporting$.next(exportTable);
        break;
      case TableActionTypes.IMPORT:
        console.log('import', event.action);
        break;

      case TableActionTypes.VIEW:
        this.gradeCategoryService.selectedGrade$.next(event.payload);
        this.router.navigate([NavigationPaths.GRADE_CATEGORY_LEVELS], {relativeTo: this.activatedRoute})
        break;
    }
  }

  onPageChange(currentPage: PageEvent): void {
    const nextPage = { ...currentPage, pageIndex: ++currentPage.pageIndex };
    this._currentPage$.next(nextPage);
  }

  @HostListener('window:afterprint', ['$event'])
  onPrintWindowClosed(): void{
    this.printService.isPrinting$.next(false);
    this.gradeCategoriesList$ = this.currentPage.pipe(
      switchMap(({ pageSize, pageIndex }) =>
        this.gradeCategoryService.getGradeCategoriesList(pageSize, pageIndex)
      ),
    );
  }


  onSelectedTableItems(items: any){
    this.gradeCategoryService.selectedTableAccounts = [...items.values()];
    this.gradeCategoryService.selectedTableAccounts$.next([...items.values()]);
  }
}

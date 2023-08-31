import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { ButtonTypeEnum } from '@core/enums/button-type.enum';
import { DepartmentService } from '@core/services/company/department/department.service';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import {
  TableAction,
  TableActionTypes,
} from '@core/types/data-table';
import { PageEvent } from '@angular/material/paginator';
import { departmentTableConfig } from '@app/modules/dashboard/company/department/configs/departmentTable.config';
import { divisionActionConfig } from '@app/modules/dashboard/company/group-function-division/configs/division-action.config';
import { ActivatedRoute, Router } from '@angular/router';
import { PrintService } from '@core/services/print/print.service';

const INITIAL_PAGE = {
  pageSize: 2,
  pageIndex: 1,
};

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepartmentComponent implements OnInit {
  protected readonly NavigationPaths = NavigationPaths;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly departmentTableConfig = departmentTableConfig;
  protected readonly divisionActionConfig = divisionActionConfig;
  protected readonly isPrinting$ = this.printService.isPrinting$;

  private readonly _currentPage$ = new BehaviorSubject(INITIAL_PAGE);
  private readonly currentPage = this._currentPage$.asObservable();
  departmentList$!: Observable<any>;
  exporting$ = new BehaviorSubject([]);
  selectedTableAccs$ = this.departmentService.selectedTableAccounts$;

  constructor(
    private readonly departmentService: DepartmentService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private printService: PrintService
  ) {}

  ngOnInit() {
    this.departmentList$ = this.currentPage.pipe(
      switchMap(({ pageSize, pageIndex }) =>
        this.departmentService.getDepartmentList(pageSize, pageIndex)
      )
    );
  }

  onActionClicked(event: TableAction): void {
    const departmentId = event.payload.id;
    switch (event.action) {
      case TableActionTypes.DELETE:
        this.departmentService
          .deleteDepartment(departmentId)
          .subscribe();
        break;

      case TableActionTypes.EXPORT:
        const exportTable =
          this.departmentService.selectedTableAccounts.map(
            (r: any) => ({
              Name: r.name,
              HeadofDepratment: r.managerTitle,
              Division: r.divisionName,
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
    this.departmentList$ = this.currentPage.pipe(
      switchMap(({ pageSize, pageIndex }) =>
        this.departmentService.getDepartmentList(pageSize, pageIndex)
      )
    );
  }

  onSelectedTableItems(items: any) {
    this.departmentService.selectedTableAccounts = [
      ...items.values(),
    ];
    this.departmentService.selectedTableAccounts$.next([
      ...items.values(),
    ]);
  }
}

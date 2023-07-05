import {ChangeDetectionStrategy, Component, HostListener, OnInit} from '@angular/core';
import { NavigationPaths } from "@core/enums/navigation-paths.enum";
import { ButtonTypeEnum } from "@core/enums/button-type.enum";
import {DepartmentService} from "@core/services/company/department/department.service";
import {BehaviorSubject, map, Observable, of, switchMap, take} from "rxjs";
import {TableAction, TableActionTypes} from "@core/types/data-table";
import {PageEvent} from "@angular/material/paginator";
import {departmentTableConfig} from "@app/modules/dashboard/company/department/configs/departmentTable.config";
import {divisionActionConfig} from "@app/modules/dashboard/company/group-function-division/configs/division-action.config";
import {ActivatedRoute, Router} from "@angular/router";
import {PrintService} from "@core/services/print/print.service";
import {debounceTime} from "rxjs/operators";

const INITIAL_PAGE = {
  pageSize: 2,
  pageIndex: 1,
};

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DepartmentComponent implements OnInit{

  protected readonly NavigationPaths = NavigationPaths;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly departmentTableConfig = departmentTableConfig;
  protected readonly divisionActionConfig = divisionActionConfig;
  protected readonly isPrinting$ = this.printService.isPrinting$;

  private readonly _currentPage$ = new BehaviorSubject(INITIAL_PAGE);
  private readonly currentPage = this._currentPage$.asObservable();
  departmentList$!: Observable<any>



  constructor(
    private readonly departmentService: DepartmentService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private printService: PrintService,
  ) {}

  ngOnInit() {
    this.departmentList$ = this.currentPage.pipe(
      switchMap(({ pageSize, pageIndex }) =>
        this.departmentService.getDepartmentList(pageSize, pageIndex)
      ));
  }

  onActionClicked(event: TableAction): void {
    let departmentId = event.payload.id
    switch (event.action){
      case TableActionTypes.DELETE:
        this.departmentService.deleteDepartment(departmentId).subscribe()
        break;

      case TableActionTypes.ADD:
        this.departmentService.selectedDepartment = {}
        break;
      case TableActionTypes.PRINT:
        this.isPrinting$.pipe(
          debounceTime(1),
          take(1)
        ).subscribe((r) => {
          if (r) {
            window.print()
          }
        })
        let selectedDepartments$ = of(this.departmentService.selectedTableAccounts).pipe(
          map((accounts: any) => ({
            departments: accounts,
            totalCount: accounts.length
          })));
        this.departmentList$ = selectedDepartments$;
        this.printService.isPrinting$.next(true);
        break;
      case TableActionTypes.EXPORT:
        console.log('EXPORT', event.action);
        break;

      case TableActionTypes.IMPORT:
        console.log('import', event.action);
        break;
      case TableActionTypes.VIEW:
        this.departmentService.action = event.action;
        this.departmentService.selectedDepartment = event.payload;
        this.router.navigate(
          [NavigationPaths.CREATE_NEW_DEPARTMENT],
          { relativeTo: this.route })
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
    this.departmentList$ = this.currentPage.pipe(
      switchMap(({ pageSize, pageIndex }) =>
        this.departmentService.getDepartmentList(pageSize, pageIndex)
      ));
  }

  onSelectedTableItems(items: any){
    this.departmentService.selectedTableAccounts = [...items.values()];
  }
}

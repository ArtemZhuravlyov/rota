import {ChangeDetectionStrategy, Component, HostListener, OnInit} from '@angular/core';
import {
  GroupFunctionDivisionService
} from "@core/services/company/grou-function-division/group-function-division.service";
import { NavigationPaths } from "@core/enums/navigation-paths.enum";
import { ButtonTypeEnum } from "@core/enums/button-type.enum";
import {TableAction, TableActionTypes} from "@core/types/data-table";
import { PageEvent } from "@angular/material/paginator";
import {
  groupFunctionDivisionTableConfig
} from "@app/modules/dashboard/company/group-function-division/configs/group-function-division-table.config";
import {BehaviorSubject, map, Observable, of, ReplaySubject, switchMap, take} from "rxjs";
import {
  divisionActionConfig
} from "@app/modules/dashboard/company/group-function-division/configs/division-action.config";
import {ActivatedRoute, Router} from "@angular/router";
import {PrintService} from "@core/services/print/print.service";
import {debounceTime} from "rxjs/operators";

const INITIAL_PAGE = {
  pageSize: 2,
  pageIndex: 1,
};

@Component({
  selector: 'app-group-function-division',
  templateUrl: './group-function-division.component.html',
  styleUrls: ['./group-function-division.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupFunctionDivisionComponent implements OnInit{
  protected readonly NavigationPaths = NavigationPaths;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly groupFunctionDivisionTableConfig = groupFunctionDivisionTableConfig;
  protected readonly divisionActionConfig = divisionActionConfig;

  private readonly _currentPage$ = new BehaviorSubject(INITIAL_PAGE);
  private readonly currentPage = this._currentPage$.asObservable();
  isPrinting$ = this.printService.isPrinting$;
  groupFunctionDivisionList$!: Observable<any>;
  exporting$ = new BehaviorSubject([])
  selectedTableAccs$ = this.groupFunctionDivisionService.selectedTableAccounts$

  constructor(
    private readonly groupFunctionDivisionService: GroupFunctionDivisionService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly printService: PrintService) {

  }

  ngOnInit() {
    this.groupFunctionDivisionList$ = this.currentPage.pipe(
      switchMap(({  pageSize, pageIndex, }) =>
        this.groupFunctionDivisionService.getDivisionsList(pageSize, pageIndex,)
      ))
  }

  onActionClicked(event: TableAction): void {
    switch (event.action){
      case TableActionTypes.DELETE:
        this.groupFunctionDivisionService.deleteDivision(event.payload.id).subscribe();
        break;
      case TableActionTypes.ADD:
        this.groupFunctionDivisionService.selectedDivision = {}
        break;
      case TableActionTypes.PRINT:
        this.isPrinting$.pipe(
          debounceTime(1),
          take(1)
        ).subscribe((r) => {
          if (r) {
            window.print()
          }
        });
        let selectedDivisions$ = of(this.groupFunctionDivisionService.selectedTableAccounts).pipe(
          map((accounts: any) => ({
            divisions: accounts,
            totalCount: accounts.length
          })));
        this.groupFunctionDivisionList$ = selectedDivisions$;
        this.printService.isPrinting$.next(true);
        break;
      case TableActionTypes.EXPORT:
        let exportTable = this.groupFunctionDivisionService.selectedTableAccounts.map(
          (r:any) => ({
            name: r.name,
            numberOfDepartment: r.departmentCount,
            divisionHead: r.managerTitle,
          })
        )
        this.exporting$.next(exportTable);
        break;

      case TableActionTypes.IMPORT:
        console.log('import', event.action);
        break;
      case TableActionTypes.VIEW:
        this.groupFunctionDivisionService.action = event.action;
        this.groupFunctionDivisionService.selectedDivision = event.payload;
        this.router.navigate(
          [NavigationPaths.CREATE_NEW_GROUP_FUNCTION_DIVISION],
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
    this.groupFunctionDivisionList$ = this.currentPage.pipe(
      switchMap(({  pageSize, pageIndex, }) =>
        this.groupFunctionDivisionService.getDivisionsList(pageSize, pageIndex,)
      ))
  }

  onSelectedTableItems(items: any){
    this.groupFunctionDivisionService.selectedTableAccounts = [...items.values()];
    this.groupFunctionDivisionService.selectedTableAccounts$.next([...items.values()])
  }

}

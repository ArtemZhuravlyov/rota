import {ChangeDetectionStrategy, Component, HostListener, OnInit} from '@angular/core';
import { NavigationPaths } from "@core/enums/navigation-paths.enum";
import { ButtonTypeEnum } from "@core/enums/button-type.enum";
import {TableAction, TableActionTypes} from "@core/types/data-table";
import {PageEvent} from "@angular/material/paginator";
import {BehaviorSubject, map, Observable, of, switchMap, take} from "rxjs";
import {PositionService} from "@core/services/company/position/position.service";
import {positionsTableConfig} from "@app/modules/dashboard/company/position/configs/positionsTable.config";
import {divisionActionConfig} from "@app/modules/dashboard/company/group-function-division/configs/division-action.config";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {InfoModal, InfoModalComponent} from "@shared/modalWindows/info-modal/info-modal.component";
import {PrintService} from "@core/services/print/print.service";
import {debounceTime} from "rxjs/operators";

const INITIAL_PAGE = {
  pageSize: 2,
  pageIndex: 1,
};

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PositionComponent implements OnInit{
  protected readonly positionsTableConfig = positionsTableConfig;
  protected readonly NavigationPaths = NavigationPaths;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly divisionActionConfig = divisionActionConfig;
  private readonly _currentPage$ = new BehaviorSubject(INITIAL_PAGE);
  private readonly currentPage = this._currentPage$.asObservable();
  protected readonly isPrinting$ = this.printService.isPrinting$;

  positionList$!: Observable<any>

  constructor(
    private readonly positionService: PositionService,
    private printService: PrintService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.positionList$ = this.currentPage.pipe(
      switchMap(({ pageIndex, pageSize }) =>
        this.positionService.getPositionsList(pageSize, pageIndex)
      ));
    this.positionList$.subscribe(r => console.log('positionList', r))
  }

  onActionClicked(event: TableAction): void {
    switch (event.action) {
      case TableActionTypes.DELETE:
        this.positionService.deletePosition(event.payload.id).subscribe()
        break;

      case TableActionTypes.ADD:
        console.log('add')
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
        let selectedPositions$ = of(this.positionService.selectedTableAccounts).pipe(
          map((accounts: any) => ({
            positions: accounts,
            totalCount: accounts.length
          })));
        this.positionList$ = selectedPositions$;
        this.printService.isPrinting$.next(true);
        break;

      case TableActionTypes.EXPORT:
        console.log('EXPORT', event.action);
        break;

      case TableActionTypes.IMPORT:
        console.log('import', event.action);
        break;

      case TableActionTypes.VIEWDESCRIPTION:
        this.openJobDescDialog(event.payload);
        break;

      case TableActionTypes.VIEW:
        this.positionService.action = event.action;
        this.positionService.selectedPosition = event.payload;
        this.router.navigate(
          [NavigationPaths.CREATE_NEW_POSITION],
          {relativeTo: this.route})
        break;
    }
  }

  onPageChange(currentPage: PageEvent): void {
    const nextPage = { ...currentPage, pageIndex: ++currentPage.pageIndex };
    this._currentPage$.next(nextPage);
  }

  openJobDescDialog(jobInfo: any): void {
    console.log(jobInfo)
    let job = <InfoModal> {
      title: jobInfo.name,
      titleDescription: jobInfo.jobFamilyName,
      description: jobInfo.jobDescription
    }
    this.dialog
      .open(InfoModalComponent, {
        panelClass: 'infoDialog',
        backdropClass: 'infoDialogBack',
        disableClose: true,
        data: job
      })
      .afterClosed()
      .subscribe();
  }

  @HostListener('window:afterprint', ['$event'])
  onPrintWindowClosed(): void{
    this.printService.isPrinting$.next(false);
    this.positionList$ = this.currentPage.pipe(
      switchMap(({ pageIndex, pageSize }) =>
        this.positionService.getPositionsList(pageSize, pageIndex)
      ));
  }


  onSelectedTableItems(items: any){
    this.positionService.selectedTableAccounts = [...items.values()];
  }

}

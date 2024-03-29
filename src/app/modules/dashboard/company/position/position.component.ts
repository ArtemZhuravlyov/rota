import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import {
  TableAction,
  TableActionTypes,
} from '@core/types/data-table';
import { PageEvent } from '@angular/material/paginator';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { PositionService } from '@core/services/company/position/position.service';
import { positionsTableConfig } from '@app/modules/dashboard/company/position/configs/positionsTable.config';
import { divisionActionConfig } from '@app/modules/dashboard/company/group-function-division/configs/division-action.config';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {
  InfoModal,
  InfoModalComponent,
} from '@shared/modalWindows/info-modal/info-modal.component';
import { PrintService } from '@core/services/print/print.service';

const INITIAL_PAGE = {
  pageSize: 2,
  pageIndex: 1,
};

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PositionComponent implements OnInit {
  protected readonly positionsTableConfig = positionsTableConfig;
  protected readonly NavigationPaths = NavigationPaths;
  protected readonly divisionActionConfig = divisionActionConfig;
  private readonly _currentPage$ = new BehaviorSubject(INITIAL_PAGE);
  private readonly currentPage = this._currentPage$.asObservable();
  protected readonly isPrinting$ = this.printService.isPrinting$;
  exporting$ = new BehaviorSubject([]);
  selectedTableAccs$ = this.positionService.selectedTableAccounts$;
  positionList$!: Observable<any>;

  constructor(
    private readonly positionService: PositionService,
    private printService: PrintService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit() {
    this.positionList$ = this.currentPage.pipe(
      switchMap(({ pageIndex, pageSize }) =>
        this.positionService.getPositionsList(pageSize, pageIndex)
      )
    );
    this.positionList$.subscribe(r => console.log('positionList', r));
  }

  onActionClicked(event: TableAction): void {
    switch (event.action) {
      case TableActionTypes.DELETE:
        this.positionService
          .deletePosition(event.payload.id)
          .subscribe();
        break;
      case TableActionTypes.EXPORT:
        const exportTable =
          this.positionService.selectedTableAccounts.map(
            (r: any) => ({
              name: r.name,
              gradeLevel: r.gradeLevel,
              NumberOfEmployee: r.employeeCount,
              JobDescription: r.jobDescription,
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

  openJobDescDialog(jobInfo: any): void {
    console.log(jobInfo);
    const job = <InfoModal>{
      title: jobInfo.name,
      titleDescription: jobInfo.jobFamilyName,
      description: jobInfo.jobDescription,
    };
    this.dialog
      .open(InfoModalComponent, {
        panelClass: 'info-dialog',
        backdropClass: 'modal-background',
        disableClose: true,
        data: job,
      })
      .afterClosed()
      .subscribe();
  }

  @HostListener('window:afterprint', ['$event'])
  onPrintWindowClosed(): void {
    this.printService.isPrinting$.next(false);
    this.positionList$ = this.currentPage.pipe(
      switchMap(({ pageIndex, pageSize }) =>
        this.positionService.getPositionsList(pageSize, pageIndex)
      )
    );
  }

  onSelectedTableItems(items: any) {
    this.positionService.selectedTableAccounts = [...items.values()];
    this.positionService.selectedTableAccounts$.next([
      ...items.values(),
    ]);
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { PrintService } from '@core/services/print/print.service';
import { BehaviorSubject, switchMap } from 'rxjs';
import { benefitListConfig } from '@modules/dashboard/company/configs/benefit-list.config';
import { BenefitService } from '@modules/dashboard/company/benefit/benefit.service';
import { AuthService } from '@core/services/account/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActionButton } from '@shared/components/action-button/types/action-button.type';
import { ActionButtonName } from '@shared/components/action-button/enums/action-button-name.enum';
import { TableActionTypes } from '@core/types/data-table';
import {
  InfoModal,
  InfoModalComponent,
} from '@shared/modalWindows/info-modal/info-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { distinctUntilParamsChanged } from '@shared/utils/distinct-until-params-changed';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-benefit',
  templateUrl: './benefit.component.html',
  styleUrls: ['./benefit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BenefitComponent implements OnInit {
  private printService = inject(PrintService);
  private benefitService = inject(BenefitService);
  private authService = inject(AuthService);
  private destroyRef = inject(DestroyRef);

  constructor(private readonly dialog: MatDialog) {}

  public readonly CREATE_NEW_BENEFIT =
    NavigationPaths.CREATE_NEW_BENEFIT;
  public readonly benefitListConfig = benefitListConfig;

  actionConfig: ActionButton[] = [
    { type: ActionButtonName.APPLY, disabled: false },
    { type: ActionButtonName.VIEW_DETAILS, disabled: false },
    { type: ActionButtonName.DELETE, disabled: false },
  ];

  public isLoading = true;
  protected readonly isPrinting$ = this.printService.isPrinting$;

  //todo types
  requestParams$ = new BehaviorSubject<{
    pageSize: number;
    pageIndex: number;
    isItemChanged: boolean;
  }>({ isItemChanged: false, pageSize: 10, pageIndex: 0 });

  benefitsList$ = new BehaviorSubject<any>({
    benefits: [],
    totalCount: 0,
  });

  selectedTableAccs$ = this.benefitService.selectedTableAccounts$;

  ngOnInit() {
    this.initBenefitList();
  }

  onActionClick({
    action,
    payload,
  }: {
    action: string;
    payload: any;
  }) {
    switch (action) {
      case TableActionTypes.DELETE:
        this.deleteFolder(payload.id);
        break;
      case TableActionTypes.VIEWDESCRIPTION:
        this.openDescriptionDialog(payload);
        break;
      case TableActionTypes.EXPORT:
        console.log('Benefits export');
        break;
    }
  }

  private openDescriptionDialog(type: any) {
    const data = <InfoModal>{
      title: type.name,
      description: type.description,
    };
    this.dialog
      .open(InfoModalComponent, {
        panelClass: 'info-dialog',
        backdropClass: 'modal-background',
        disableClose: true,
        data,
      })
      .afterClosed()
      .subscribe();
  }

  onPageChange({ pageIndex }: PageEvent): void {
    console.log({ pageIndex });
    this.updateRequestParams({ pageIndex });
  }

  private updateRequestParams(
    params: Partial<{
      pageSize: number;
      pageIndex: number;
      isItemChanged: boolean;
    }>
  ) {
    const value = this.requestParams$.value;
    this.requestParams$.next({ ...value, ...params });
  }

  private deleteFolder(id: string) {
    this.benefitService.deleteBenefit(id).subscribe({
      next: () => {
        const { isItemChanged } = this.requestParams$.value;
        this.updateRequestParams({ isItemChanged: !isItemChanged });
      },
    });
  }

  private initBenefitList() {
    this.requestParams$
      .pipe(
        distinctUntilParamsChanged(['pageIndex', 'isItemChanged']),
        switchMap(({ pageSize, pageIndex }) => {
          this.isLoading = true;
          return this.benefitService.getList({ pageSize, pageIndex });
        })
      )
      .subscribe({
        next: benefits => {
          this.isLoading = false;
          this.benefitsList$.next(benefits);
        },
        error: () => {
          this.isLoading = false;
        },
      });
  }

  onSelectedTableItems(items: any) {
    console.log({ items });
    this.benefitService.selectedTableAccounts = [...items.values()];
    this.benefitService.selectedTableAccounts$.next([
      ...items.values(),
    ]);
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { ButtonTypeEnum } from '@core/enums/button-type.enum';
import { employeesTypeListConfig } from '@app/modules/dashboard/employee/configs/employees-type-list.config';
import {
  EmploymentTypeService,
  GetAllEmployeeTypesQuery,
} from '@core/services/company/employment-type/employment-type.service';
import {
  TableAction,
  TableActionTypes,
} from '@core/types/data-table';
import {
  EmploymentTypeResponse,
  EmploymentTypes,
} from '@core/types/employment-type.model';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { distinctUntilParamsChanged } from '@shared/utils/distinct-until-params-changed';
import { MatDialog } from '@angular/material/dialog';
import {
  InfoModal,
  InfoModalComponent,
} from '@shared/modalWindows/info-modal/info-modal.component';

import { ActivatedRoute, Router } from '@angular/router';
import { AppActivatedRoute } from '@core/types/app-route.type';
import { EmployeeTypeRouteData } from '@modules/dashboard/employee/employees-type/employees-type-routing.module';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActionButtonName } from '@shared/components/action-button/enums/action-button-name.enum';
import { ActionButton } from '@shared/components/action-button/types/action-button.type';

type RequestParamsType = GetAllEmployeeTypesQuery & {
  isItemChanged: boolean;
};

@Component({
  selector: 'app-employees-record-enums',
  templateUrl: './employees-type.component.html',
  styleUrls: ['./employees-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesTypeComponent implements OnInit {
  private readonly employmentTypeService = inject(
    EmploymentTypeService
  );
  private readonly route = inject(Router);
  private readonly activatedRoute =
    inject<AppActivatedRoute<EmployeeTypeRouteData>>(ActivatedRoute);
  private readonly dialog = inject(MatDialog);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly NavigationPaths = NavigationPaths;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly employeesTypeListConfig =
    employeesTypeListConfig;
  isBusy = false;

  requestParams$ = new BehaviorSubject<RequestParamsType>({
    isActive: true,
    isItemChanged: false,
    pageSize: 10,
    pageIndex: 0,
  });

  employeesTypeList$ = new BehaviorSubject<EmploymentTypeResponse>({
    employmentTypes: [],
    totalCount: 0,
  });
  public exporting$ = new BehaviorSubject<any>([]);

  private selectedTableRows: EmploymentTypes[] = [];

  actionConfig: ActionButton[] = [
    { type: ActionButtonName.APPLY, disabled: false },
    { type: ActionButtonName.DELETE, disabled: false },
  ];

  ngOnInit() {
    this.initEmploymentTypes();
  }

  onActionClick({ action, payload }: TableAction) {
    switch (action) {
      case ActionButtonName.DELETE:
        this.deleteEmploymentType(payload!.id);
        break;

      case TableActionTypes.EXPORT: {
        const exportTable = this.selectedTableRows.map(
          employmentType => ({
            Id: employmentType.id,
            Name: employmentType.name,
            Description: employmentType.description,
            TotalEmployeeNumber: employmentType.totalEmployeeNumber,
          })
        );
        this.exporting$.next(exportTable);
        break;
      }
      case TableActionTypes.VIEWDESCRIPTION:
        this.openDescriptionDialog(payload!);
        break;
      case ActionButtonName.APPLY:
        this.redirectToEditEmployeeType(payload!);
        break;
    }
  }

  onPageChange({ pageIndex }: PageEvent) {
    this.updateRequestParams({ pageIndex });
  }

  onActiveChange(active: boolean) {
    this.actionConfig = this.actionConfig.map(action => ({
      ...action,
      disabled: active,
    }));
    this.updateRequestParams({ isActive: !active });
  }

  private openDescriptionDialog(type: EmploymentTypes) {
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

  private redirectToEditEmployeeType(type: EmploymentTypes) {
    return this.route.navigate(
      [NavigationPaths.EDIT_EMPLOYEE_TYPE, type.id],
      {
        relativeTo: this.activatedRoute,
        state: { name: type.name },
      }
    );
  }

  private deleteEmploymentType(id: string) {
    this.employmentTypeService.deleteEmploymentType(id).subscribe({
      next: () => {
        const { isItemChanged } = this.requestParams$.value;
        this.updateRequestParams({ isItemChanged: !isItemChanged });
      },
      error: () => {},
    });
  }

  private initEmploymentTypes() {
    this.requestParams$
      .pipe(
        tap(() => (this.isBusy = true)),
        takeUntilDestroyed(this.destroyRef),
        distinctUntilParamsChanged(
          ['pageIndex', 'isItemChanged', 'isActive'],
          () => {
            this.isBusy = false;
          }
        ),
        switchMap(({ pageSize, pageIndex, isActive }) =>
          this.employmentTypeService.getEmploymentTypeList({
            pageSize,
            pageIndex,
            isActive,
          })
        )
      )
      .subscribe(employmentTypes => {
        this.isBusy = false;
        this.employeesTypeList$.next(employmentTypes);
      });
  }

  private updateRequestParams(params: Partial<RequestParamsType>) {
    const value = this.requestParams$.value;
    this.requestParams$.next({ ...value, ...params });
  }

  public onSelectedTableItems(items: Map<any, any>) {
    this.selectedTableRows = [...items.values()];
  }
}

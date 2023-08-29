import {
  ChangeDetectionStrategy,
  Component,
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
  TableActionConfig,
  TableActionTypes,
} from '@core/types/data-table';
import {
  EmploymentTypeResponse,
  EmploymentTypes,
} from '@core/types/employment-type.model';
import { BehaviorSubject, switchMap } from 'rxjs';
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

type RequestParamsType = GetAllEmployeeTypesQuery & {
  isItemChanged: boolean;
};

@Component({
  selector: 'app-employees-type',
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

  protected readonly NavigationPaths = NavigationPaths;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly employeesTypeListConfig =
    employeesTypeListConfig;

  requestParams$ = new BehaviorSubject<RequestParamsType>({
    isActive: false,
    isItemChanged: false,
    pageSize: 10,
    pageIndex: 0,
  });

  employeesTypeList$ = new BehaviorSubject<EmploymentTypeResponse>({
    employmentTypes: [],
    totalCount: 0,
  });

  actionConfig: TableActionConfig[] = [
    {
      icon: 'check',
      type: TableActionTypes.CHECK,
      disabled: true,
      styleConfig: {
        width: '30px',
        height: '30px',
        background: '#FFFFFF',
        border: '1px solid #E4EDF4',
        color: '#91ACC2',
      },
    },
    {
      icon: 'delete',
      type: TableActionTypes.DELETE,
      disabled: true,
      styleConfig: {
        width: '30px',
        height: '30px',
        background: '#FFFFFF',
        border: '1px solid #E4EDF4',
        color: '#FF0000',
      },
    },
  ];

  ngOnInit() {
    this.initEmploymentTypes();
  }

  onActionClick({
    action,
    payload,
  }: {
    action: string;
    payload: EmploymentTypes;
  }) {
    switch (action) {
      case TableActionTypes.DELETE:
        this.deleteEmploymentType(payload.id);
        break;
      case TableActionTypes.VIEWDESCRIPTION:
        this.openDescriptionDialog(payload);
        break;
      case TableActionTypes.CHECK:
        this.redirectToEditEmployeeType(payload.id);
        break;
    }
  }

  onPageChange({ pageIndex }: PageEvent) {
    this.updateRequestParams({ pageIndex });
  }

  onActiveChange(active: boolean) {
    this.actionConfig = this.actionConfig.map(action => ({
      ...action,
      disabled: !active,
    }));
    this.updateRequestParams({ isActive: active });
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

  private redirectToEditEmployeeType(id: string) {
    return this.route.navigate(
      [NavigationPaths.EDIT_EMPLOYEE_TYPE, id],
      {
        relativeTo: this.activatedRoute,
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
        distinctUntilParamsChanged([
          'pageIndex',
          'isItemChanged',
          'isActive',
        ]),
        switchMap(({ pageSize, pageIndex, isActive }) =>
          this.employmentTypeService.getEmploymentTypeList({
            pageSize,
            pageIndex,
            isActive,
          })
        )
      )
      .subscribe(employmentTypes => {
        this.employeesTypeList$.next(employmentTypes);
      });
  }

  private updateRequestParams(params: Partial<RequestParamsType>) {
    const value = this.requestParams$.value;
    this.requestParams$.next({ ...value, ...params });
  }
}

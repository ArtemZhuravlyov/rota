import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { ButtonTypeEnum } from '@core/enums/button-type.enum';
import { employeesTypeListConfig } from '@app/modules/dashboard/employee/configs/employees-type-list.config';
import { EmploymentTypeService } from '@core/services/company/employment-type/employment-type.service';
import { TableActionTypes } from '@core/types/data-table';
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
import {
  HttpEvent,
  HttpEventType,
  HttpProgressEvent,
} from '@angular/common/http';

@Component({
  selector: 'app-employees-type',
  templateUrl: './employees-type.component.html',
  styleUrls: ['./employees-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesTypeComponent implements OnInit {
  protected readonly NavigationPaths = NavigationPaths;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly employeesTypeListConfig =
    employeesTypeListConfig;

  requestParams$ = new BehaviorSubject<{
    pageSize: number;
    pageIndex: number;
    isItemChanged: boolean;
  }>({ isItemChanged: false, pageSize: 10, pageIndex: 0 });

  employeesTypeList$ = new BehaviorSubject<EmploymentTypeResponse>({
    employmentTypes: [],
    totalCount: 0,
  });

  actionConfig = [
    {
      icon: 'check',
      type: TableActionTypes.CHECK,
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
      styleConfig: {
        width: '30px',
        height: '30px',
        background: '#FFFFFF',
        border: '1px solid #E4EDF4',
        color: '#FF0000',
      },
    },
  ];

  constructor(
    private readonly employmentTypeService: EmploymentTypeService,
    private readonly dialog: MatDialog
  ) {}

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
    }
  }

  onPageChange({ pageIndex }: PageEvent) {
    this.updateRequestParams({ pageIndex });
  }

  onSearchChange(input: string) {
    console.log(input);
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
        distinctUntilParamsChanged(['pageIndex', 'isItemChanged']),
        switchMap(({ pageSize, pageIndex }) =>
          this.employmentTypeService.getEmploymentTypeList(
            pageSize,
            pageIndex
          )
        )
      )
      .subscribe(employmentTypes => {
        this.employeesTypeList$.next(employmentTypes);
      });
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
}

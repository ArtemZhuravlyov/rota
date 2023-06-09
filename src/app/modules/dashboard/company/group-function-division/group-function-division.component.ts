import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  GroupFunctionDivisionService
} from "@core/services/company/grou-function-division/group-function-division.service";
import { NavigationPaths } from "@core/enums/navigation-paths.enum";
import { ButtonTypeEnum } from "@core/enums/button-type.enum";
import { TableAction } from "@core/types/data-table";
import { PageEvent } from "@angular/material/paginator";
import {
  groupFunctionDivisionTableConfig
} from "@app/modules/dashboard/company/group-function-division/configs/group-function-division-table.config";
import { BehaviorSubject, switchMap } from "rxjs";
import { toSignal } from "@angular/core/rxjs-interop";

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
export class GroupFunctionDivisionComponent {
  protected readonly NavigationPaths = NavigationPaths;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly groupFunctionDivisionTableConfig = groupFunctionDivisionTableConfig;

  private readonly _currentPage$ = new BehaviorSubject(INITIAL_PAGE);
  private readonly currentPage = this._currentPage$.asObservable();

  groupFunctionDivisionList = toSignal(this.currentPage.pipe(
    switchMap(({ pageIndex, pageSize }) =>
      this.groupFunctionDivisionService.getDivisionsList(pageIndex, pageSize)
    ),
  ));

  constructor(private readonly groupFunctionDivisionService: GroupFunctionDivisionService) { }

  onActionClicked(event: TableAction): void {
    console.log('ACTION CLICKED ', event);
  }

  onPageChange(currentPage: PageEvent): void {
    const nextPage = { ...currentPage, pageIndex: ++currentPage.pageIndex };
    this._currentPage$.next(nextPage);
  }

}

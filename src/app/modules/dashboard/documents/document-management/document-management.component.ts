import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { ButtonTypeEnum } from '@core/enums/button-type.enum';
import {
  TableActionConfig,
  TableActionTypes,
} from '@core/types/data-table';
import { PageEvent } from '@angular/material/paginator';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { BehaviorSubject, switchMap } from 'rxjs';
import { AuthService } from '@core/services/account/auth.service';
import { foldersListConfig } from '@app/modules/dashboard/documents/configs/folders-list.config';
import { DocumentsService } from '@core/services/documents/documents.service';
import { MatDialog } from '@angular/material/dialog';
import {
  InfoModal,
  InfoModalComponent,
} from '@shared/modalWindows/info-modal/info-modal.component';
import { distinctUntilParamsChanged } from '@shared/utils/distinct-until-params-changed';
import { foldersActionsListConfig } from '@modules/dashboard/documents/configs/folders-actions-list.config';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-document-management',
  templateUrl: './document-management.component.html',
  styleUrls: ['./document-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentManagementComponent implements OnInit {
  protected readonly NavigationPaths = NavigationPaths;
  readonly foldersListConfig = foldersListConfig;
  readonly actionConfig: TableActionConfig[] =
    foldersActionsListConfig;
  readonly ButtonTypeEnum = ButtonTypeEnum;

  //todo types
  requestParams$ = new BehaviorSubject<{
    pageSize: number;
    pageIndex: number;
    isItemChanged: boolean;
  }>({ isItemChanged: false, pageSize: 10, pageIndex: 0 });

  constructor(
    private authService: AuthService,
    private documentService: DocumentsService,
    private readonly dialog: MatDialog,
    private router: Router,
    private readonly route: ActivatedRoute
  ) {}

  //todo type
  foldersList$ = new BehaviorSubject<any>({
    documentCategories: [],
    totalCount: 0,
  });

  ngOnInit(): void {
    this.initFolderList();
  }

  //todo types
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
      case TableActionTypes.FOLDER_VIEW:
        console.log(payload);
        this.router.navigate(
          [NavigationPaths.FOLDER_DETAILS, payload.id],
          {
            relativeTo: this.route,
          }
        );
        break;
    }
  }

  private deleteFolder(id: string) {
    this.documentService
      .deleteFolder(
        id,
        this.authService.getCurrentUserId(),
        this.authService.getCompanyId()
      )
      .subscribe({
        next: () => {
          const { isItemChanged } = this.requestParams$.value;
          this.updateRequestParams({ isItemChanged: !isItemChanged });
        },
        error: () => {},
      });
  }

  //todo types
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

  private initFolderList() {
    this.requestParams$
      .pipe(
        distinctUntilParamsChanged(['pageIndex', 'isItemChanged']),
        switchMap(({ pageSize, pageIndex }) =>
          this.documentService.getFolders(
            this.authService.getCurrentUserId(),
            this.authService.getCompanyId(),
            {
              pageSize,
              pageIndex,
            }
          )
        )
      )
      .subscribe(documentCategories => {
        this.foldersList$.next(documentCategories);
      });
  }
}

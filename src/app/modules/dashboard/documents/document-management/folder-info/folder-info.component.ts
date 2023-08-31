import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import {
  TableAction,
  TableActionConfig,
  TableActionTypes,
} from '@core/types/data-table';
import { PageEvent } from '@angular/material/paginator';
import { documentsListConfig } from '@modules/dashboard/documents/configs/documents-list.config';
import { ActivatedRoute } from '@angular/router';
import { DocumentsService } from '@core/services/documents/documents.service';
import { AuthService } from '@core/services/account/auth.service';
import { BehaviorSubject, switchMap } from 'rxjs';
import { distinctUntilParamsChanged } from '@shared/utils/distinct-until-params-changed';
import { isNil } from 'lodash';
import { ActionButton } from '@shared/components/action-button/types/action-button.type';
import { ActionButtonName } from '@shared/components/action-button/enums/action-button-name.enum';

@Component({
  selector: 'app-folder-info',
  templateUrl: './folder-info.component.html',
  styleUrls: ['./folder-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FolderInfoComponent {
  protected readonly NavigationPaths = NavigationPaths;
  protected readonly documentsListConfig = documentsListConfig;

  //todo types
  requestParams$ = new BehaviorSubject<{
    pageSize: number;
    pageIndex: number;
    isItemChanged: boolean;
  }>({ isItemChanged: false, pageSize: 10, pageIndex: 0 });

  //todo type
  documentsList$ = new BehaviorSubject<any>({
    documents: [],
    totalCount: 0,
  });
  constructor(
    private route: ActivatedRoute,
    private documentService: DocumentsService,
    private authService: AuthService
  ) {}

  actionConfig: ActionButton[] = [
    { type: ActionButtonName.VIEW_DETAILS, disabled: false },
    { type: ActionButtonName.DELETE, disabled: false },
  ];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // this.folderId = params.get('id');
      // console.log(params.get('id'));
      const id = params.get('id');
      if (!isNil(id)) {
        this.initDocumentsList(id);
      }
    });
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
        console.log('delete document');
        break;
      case TableActionTypes.DOWNLOAD:
        console.log('download document');
        break;
      case TableActionTypes.FOLDER_VIEW:
        // console.log(payload);
        // this.router.navigate(
        //   [NavigationPaths.FOLDER_DETAILS, payload.id],
        //   {
        //     relativeTo: this.route,
        //   }
        // );
        break;
    }
  }

  onPageChange({ pageIndex }: PageEvent) {
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

  private initDocumentsList(id: string) {
    const doc = this.requestParams$
      .pipe(
        distinctUntilParamsChanged(['pageIndex', 'isItemChanged']),
        switchMap(({ pageSize, pageIndex }) =>
          this.documentService.getDocsList(
            this.authService.getCurrentUserId(),
            this.authService.getCompanyId(),
            {
              folderId: id,
              pageSize,
              pageIndex,
            }
          )
        )
      )
      .subscribe(documentList => {
        this.documentsList$.next(documentList);
      });
    console.log(doc);
  }
}

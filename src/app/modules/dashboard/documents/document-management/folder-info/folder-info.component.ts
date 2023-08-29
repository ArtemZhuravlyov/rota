import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { TableAction } from '@core/types/data-table';
import { PageEvent } from '@angular/material/paginator';
import { documentsListConfig } from '@modules/dashboard/documents/configs/documents-list.config';
import { ActivatedRoute } from '@angular/router';
import { DocumentsService } from '@core/services/documents/documents.service';
import { AuthService } from '@core/services/account/auth.service';
import { documentsActionsListConfig } from '@modules/dashboard/documents/configs/documents-actions-list.config';

@Component({
  selector: 'app-folder-info',
  templateUrl: './folder-info.component.html',
  styleUrls: ['./folder-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FolderInfoComponent {
  protected readonly NavigationPaths = NavigationPaths;
  protected readonly documentsListConfig = documentsListConfig;
  protected readonly documentsActionConfig =
    documentsActionsListConfig;

  private folderId: string | null | undefined;
  constructor(
    private route: ActivatedRoute,
    private documentService: DocumentsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.folderId = params.get('id');
      console.log(params.get('id'));
    });
    const docs = this.documentService
      .getDocsList(
        this.folderId,
        this.authService.getCurrentUserId(),
        this.authService.getCompanyId()
      )
      .subscribe();
    console.log(docs);
  }
  onActionClick($event: TableAction) {}

  onPageChange($event: PageEvent) {}
}

import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ButtonTypeEnum} from "@core/enums/button-type.enum";
import {TableAction} from "@core/types/data-table";
import {PageEvent} from "@angular/material/paginator";
import {NavigationPaths} from "@core/enums/navigation-paths.enum";
import {Observable} from "rxjs";
import {CompanyResponse} from "@core/types/company.interface";
import {AuthService} from "@core/services/account/auth.service";
import {CompanyService} from "@core/services/company/company.service";
import {dashboardTabsConfig} from "@app/modules/dashboard/dashboard-layout/configs/dashboard-tabs-config"
import {foldersListConfig} from "@app/modules/dashboard/documents/configs/folders-list.config";
import {DocumentsService} from "@core/services/documents/documents.service";

@Component({
  selector: 'app-document-management',
  templateUrl: './document-management.component.html',
  styleUrls: ['./document-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentManagementComponent implements OnInit {
  protected readonly NavigationPaths = NavigationPaths;
  protected readonly dashboardTabsConfig = dashboardTabsConfig;
  readonly foldersListConfig = foldersListConfig;
  readonly ButtonTypeEnum = ButtonTypeEnum;
  folders$!: Observable<any>;

  constructor(
    private authService: AuthService,
    private documentService: DocumentsService
  ) { }

  ngOnInit(): void {
    this.folders$ = this.documentService.getFolders(this.authService.getCurrentUserId(), this.authService.getCompanyId());
    this.folders$.subscribe(r => console.log('folders', r))
  }

  onActionClicked(action: TableAction): void {

  }

  onPageChange({pageSize, pageIndex}: PageEvent): void {
    //this.companies$ = this.companyService.getCompany(this.authService.getCurrentUserId(), pageSize, pageIndex)
  }

}

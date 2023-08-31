import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ButtonTypeEnum } from '@core/enums/button-type.enum';
import { CompanyService } from '@core/services/company/company.service';
import { AuthService } from '@core/services/account/auth.service';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { Observable } from 'rxjs';
import { CompanyResponse } from '@core/types/company.interface';
import { companyListConfig } from '@app/modules/dashboard/company/configs/company-list.config';
import { TableAction } from '@core/types/data-table';
import { PageEvent } from '@angular/material/paginator';
import { AppActivatedRoute } from '@core/types/app-route.type';
import { ActivatedRoute } from '@angular/router';
import { TranslateKey } from '../../../../../assets/i18n/enums/translate-key.enum';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyInfoComponent implements OnInit {
  private readonly activatedRoute =
    inject<AppActivatedRoute>(ActivatedRoute);

  protected title: keyof typeof TranslateKey = TranslateKey.EMPTY;

  protected readonly NavigationPaths = NavigationPaths;
  readonly companyListConfig = companyListConfig;
  companies$!: Observable<CompanyResponse>;

  constructor(
    private authService: AuthService,
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    this.title =
      this.activatedRoute.snapshot.data.breadcrumb ?? this.title;

    this.companies$ = this.companyService.getCompanies(
      this.authService.getCurrentUserId()
    );
    this.companies$.subscribe(r => console.log('companies', r));
  }

  onActionClicked(action: TableAction): void {}

  onPageChange({ pageSize, pageIndex }: PageEvent): void {
    this.companies$ = this.companyService.getCompanies(
      this.authService.getCurrentUserId(),
      pageSize,
      pageIndex
    );
  }
}

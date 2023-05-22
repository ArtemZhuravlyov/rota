import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ButtonTypeEnum } from "@core/enums/button-type.enum";
import { CompanyService } from "@core/services/company/company.service";
import { AuthService } from "@core/services/account/auth.service";
import { map, Observable } from 'rxjs';
import { Company } from '@core/types/company.interface';
import { companyListConfig } from '@app/modules/dashboard/company/configs/company-list.config';
import { TableAction } from '@core/types/data-table';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyInfoComponent implements OnInit {
  readonly companyListConfig = companyListConfig;
  readonly ButtonTypeEnum = ButtonTypeEnum;
  companies$!: Observable<Company[]>;


  constructor(
    private authService: AuthService,
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    this.companies$ = this.companyService.getCompany(this.authService.getCurrentUserId())
      .pipe(map(res => res.companies));
  }

  onActionClicked(action: TableAction): void {

  }
}

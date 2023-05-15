import { ChangeDetectionStrategy, Component } from '@angular/core';
import { companySubMenuConfig } from "./configs/company-sub-menu-config";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyComponent {

  protected readonly companySubMenuConfig = companySubMenuConfig;
}

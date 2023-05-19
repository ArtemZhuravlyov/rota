import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonTypeEnum } from "@core/enums/button-type.enum";
import { CompanyService } from "@core/services/company/company.service";
import { AuthService } from "@core/services/account/auth.service";

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyInfoComponent {

  protected readonly ButtonTypeEnum = ButtonTypeEnum;

}

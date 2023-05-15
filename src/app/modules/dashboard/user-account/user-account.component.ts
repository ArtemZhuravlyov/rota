import { ChangeDetectionStrategy, Component } from '@angular/core';
import { userAccountSubMenuConfig } from "./configs/user-account-sub-menu-config";

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAccountComponent {

  userAccountSubMenuConfig = userAccountSubMenuConfig;
}

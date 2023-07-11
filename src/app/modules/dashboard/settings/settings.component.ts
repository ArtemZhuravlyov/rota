import { ChangeDetectionStrategy, Component } from '@angular/core';
import { companySubMenuConfig } from "@app/modules/dashboard/company/configs/company-sub-menu-config";
import { settingsSubMenuConfig } from "@app/modules/dashboard/settings/configs/settings-sub-menu-config";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent {

  protected readonly settingsSubMenuConfig = settingsSubMenuConfig;
}

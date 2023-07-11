import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SettingsService } from "@core/services/settings/settings.service";
import { AuthService } from "@core/services/account/auth.service";
import { tap } from "rxjs";
import { NavigationPaths } from "@core/enums/navigation-paths.enum";
import { ButtonTypeEnum } from "@core/enums/button-type.enum";

@Component({
  selector: 'app-trusted-devices-settings',
  templateUrl: './trusted-devices-settings.component.html',
  styleUrls: ['./trusted-devices-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrustedDevicesSettingsComponent {


  constructor(
    private readonly settingsService: SettingsService,
    private readonly authService: AuthService,
    ) {
    settingsService.getTrustedDevices(authService.getCurrentUserId(), authService.getCompanyId()).pipe(
      tap( res => console.log(res, 'RES')),
    ).subscribe()
  }

  protected readonly NavigationPaths = NavigationPaths;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
}

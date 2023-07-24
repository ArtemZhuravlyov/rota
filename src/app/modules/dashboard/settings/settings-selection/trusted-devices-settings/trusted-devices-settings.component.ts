import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
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

  macOsDevices: any[] = [];
  windowsDevices: any[] = [];
  linuxDevices: any[] = [];


  constructor(
    private readonly settingsService: SettingsService,
    private readonly authService: AuthService,
    private readonly cdr: ChangeDetectorRef,
    ) {
    this.getDevices()
  }

  protected readonly NavigationPaths = NavigationPaths;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;

  getDevices(): void {
    this.settingsService.getTrustedDevices(this.authService.getCurrentUserId(), this.authService.getCompanyId()).pipe(
      tap( res => {
        this.macOsDevices = res.filter( (obj: any) => obj.operatingSystem.toLowerCase() === 'macos')
        this.windowsDevices = res.filter( (obj: any) => obj.operatingSystem.toLowerCase() === 'windows')
        this.linuxDevices = res.filter( (obj: any) => obj.operatingSystem.toLowerCase() === 'linux')
        this.cdr.detectChanges()
      }),
    ).subscribe()
  }
}

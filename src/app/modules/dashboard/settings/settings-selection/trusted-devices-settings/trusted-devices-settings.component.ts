import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { SettingsService } from '@core/services/settings/settings.service';
import { AuthService } from '@core/services/account/auth.service';
import { tap } from 'rxjs';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { TranslateKey } from '../../../../../../assets/i18n/enums/translate-key.enum';

@Component({
  selector: 'app-trusted-devices-settings',
  templateUrl: './trusted-devices-settings.component.html',
  styleUrls: ['./trusted-devices-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrustedDevicesSettingsComponent {
  protected readonly TRUSTED_DEVICES = TranslateKey.TRUSTED_DEVICES;
  protected readonly MAC_OS = TranslateKey.MAC_OS;
  protected readonly WINDOWS = TranslateKey.WINDOWS;
  protected readonly LINUX = TranslateKey.LINUX;

  macOsDevices: any[] = [];
  windowsDevices: any[] = [];
  linuxDevices: any[] = [];

  constructor(
    private readonly settingsService: SettingsService,
    private readonly authService: AuthService,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.getDevices();
  }

  protected readonly NavigationPaths = NavigationPaths;

  getDevices(): void {
    this.settingsService
      .getTrustedDevices(
        this.authService.getCurrentUserId(),
        this.authService.getCompanyId()
      )
      .pipe(
        tap(res => {
          this.macOsDevices = res.filter(
            (obj: any) =>
              obj.operatingSystem.toLowerCase() === 'macos'
          );
          this.windowsDevices = res.filter(
            (obj: any) =>
              obj.operatingSystem.toLowerCase() === 'windows'
          );
          this.linuxDevices = res.filter(
            (obj: any) =>
              obj.operatingSystem.toLowerCase() === 'linux'
          );
          this.cdr.detectChanges();
        })
      )
      .subscribe();
  }
}

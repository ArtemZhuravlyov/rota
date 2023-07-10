import {ChangeDetectionStrategy, Component, ElementRef, HostListener} from '@angular/core';
import { ButtonTypeEnum } from "@core/enums/button-type.enum";
import {SettingsMenuConfig} from "@shared/modules/header/configs/settings-menu-config";
import {PersonMenuConfig} from "@shared/modules/header/configs/person-menu-config";
import {NotificationMenuConfig} from "@shared/modules/header/configs/notification-menu-config";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  buttonTypeEnum = ButtonTypeEnum;
  notificationMenuConfig = NotificationMenuConfig;
  settingsMenuConfig = SettingsMenuConfig;
  selectedSettings = 0;
  personMenuConfig = PersonMenuConfig;
  isNotificationsIconClicked = false;
  isSettingsIconClicked = false;
  isPersonIconClicked = false;
  constructor(private readonly elementRef: ElementRef) {
  }

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: string) {
    if (!this.elementRef.nativeElement.contains(targetElement)) {
      this.isNotificationsIconClicked = false;
      this.isSettingsIconClicked = false;
      this.isPersonIconClicked = false;
    }
  }

  toggleSettingsSelected(index: number): void {
    this.selectedSettings = index;
  }

  onIconClick(icon: string): void {
    switch (icon) {
      case 'notifications':
        this.isNotificationsIconClicked = !this.isNotificationsIconClicked;
        break;
      case 'settings':
        this.isSettingsIconClicked = !this.isSettingsIconClicked;
        break;
      case 'person':
        this.isPersonIconClicked = !this.isPersonIconClicked;
        break;
    }
  }
}

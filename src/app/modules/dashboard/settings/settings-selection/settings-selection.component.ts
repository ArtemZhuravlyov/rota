import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonTypeEnum } from "@core/enums/button-type.enum";
import { NavigationPaths } from "@core/enums/navigation-paths.enum";
import { settingsTabsConfig } from "@app/modules/dashboard/settings/configs/settings-tabs-config";
import { Router } from "@angular/router";
import { Style } from "@core/types/button.interface";

@Component({
  selector: 'app-settings-selection',
  templateUrl: './settings-selection.component.html',
  styleUrls: ['./settings-selection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsSelectionComponent {

  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly NavigationPaths = NavigationPaths;
  protected readonly settingsTabsConfig = settingsTabsConfig;
  navButtonStyleConfig: Style = {
    color: '#575757',
    font: 'normal normal 600 16px/22px Source Sans Pro',
    background: 'transparent',
    height: '42px',
    'letter-spacing': '0',
    'border-radius': '10px',
  }

}

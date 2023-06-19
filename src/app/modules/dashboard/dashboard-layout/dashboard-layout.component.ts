import { ChangeDetectionStrategy, Component } from '@angular/core';
import { dashboardTabsConfig } from "./configs/dashboard-tabs-config";
import {tabsConfig} from "@shared/utils/tabs-config";

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardLayoutComponent {

  dashboardTabsConfig = dashboardTabsConfig;
  isExpanded = true;
  searchEvent = '';
  tabsConfig = tabsConfig();

  toggleMenu(event: boolean): void {
    this.isExpanded = event;
  }
  filterTabs(searchText: string): void {
    this.searchEvent = searchText;
    if (searchText.trim()) {
      this.dashboardTabsConfig = tabsConfig().filter(
        tab => tab?.title.toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      this.dashboardTabsConfig = dashboardTabsConfig;
    }
  }

}

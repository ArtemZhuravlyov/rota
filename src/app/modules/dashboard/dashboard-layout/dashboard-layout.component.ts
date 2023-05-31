import { ChangeDetectionStrategy, Component } from '@angular/core';
import { dashboardTabsConfig } from "./configs/dashboard-tabs-config";

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardLayoutComponent {

  dashboardTabsConfig = dashboardTabsConfig;
  isExpanded = true;

  toggleMenu(event: boolean): void {
    this.isExpanded = event;
  }
  filterTabs(searchText: string): void {
    this.dashboardTabsConfig = dashboardTabsConfig.filter(
      tab => tab?.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }

}

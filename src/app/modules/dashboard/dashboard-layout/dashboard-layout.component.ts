import { ChangeDetectionStrategy, Component } from '@angular/core';
import { dashboardTabsConfig } from "../../../shared/utils/dashboard-tabs-config";

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardLayoutComponent {

  dashboardTabsConfig = dashboardTabsConfig;
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { dashboardTabsConfig } from './configs/dashboard-tabs-config';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { tabsConfig } from '@shared/utils/tabs-config';
import { PrintService } from '@core/services/print/print.service';
import { TranslateKey } from '../../../../assets/i18n/enums/translate-key.enum';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayoutComponent {
  dashboardTabsConfig = dashboardTabsConfig;

  public readonly DARK_MODE = TranslateKey.DARK_MODE;
  public readonly SETTINGS = TranslateKey.SETTINGS;

  isExpanded = true;
  searchEvent = '';
  protected readonly isPrinting$ = this.printService.isPrinting$;

  constructor(private readonly printService: PrintService) {}

  toggleMenu(event: boolean): void {
    this.isExpanded = event;
  }

  filterTabs(searchText: string): void {
    this.searchEvent = searchText;
    if (searchText.trim()) {
      this.dashboardTabsConfig = tabsConfig().filter(
        tab =>
          tab?.title.toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      this.dashboardTabsConfig = dashboardTabsConfig;
    }
  }

  protected readonly NavigationPaths = NavigationPaths;
}

import { MenusConfig } from '@core/types/menus-config';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { TranslateKey } from '../../../../../assets/i18n/enums/translate-key.enum';

export const settingsTabsConfig: MenusConfig[] = [
  {
    title: TranslateKey.COMPANY,
    routerLink: NavigationPaths.COMPANY,
  },
  {
    title: TranslateKey.WORKFLOW,
    routerLink: NavigationPaths.WORKFLOW,
  },
  {
    title: TranslateKey.PAYROLL,
    routerLink: NavigationPaths.PAYROLL,
  },
  {
    title: TranslateKey.TIMESHEET,
    routerLink: NavigationPaths.TIMESHEET,
  },
  {
    title: TranslateKey.PAYROLL_ACCOUNTING,
    routerLink: NavigationPaths.PAYROLL_ACCOUNTING,
  },
  {
    title: TranslateKey.LEAVE_MANAGEMENT,
    routerLink: NavigationPaths.LEAVE_MANAGEMENT,
  },
  {
    title: TranslateKey.TRUSTED_DEVICES,
    routerLink: NavigationPaths.TRUSTED_DEVICES,
  },
];

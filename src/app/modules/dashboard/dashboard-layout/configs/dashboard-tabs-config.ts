import { MenusConfig } from '@core/types/menus-config';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { TranslateKey } from '../../../../../assets/i18n/enums/translate-key.enum';

export const dashboardTabsConfig: MenusConfig[] = [
  {
    title: TranslateKey.COMPANY,
    icon: 'company-menu-logo',
    routerLink: NavigationPaths.COMPANY,
  },
  {
    title: TranslateKey.EMPLOYEES,
    icon: 'employee',
    routerLink: NavigationPaths.EMPLOYEES,
  },
  {
    title: TranslateKey.PAYROLL,
    icon: 'payroll',
    routerLink: NavigationPaths.PAYROLL,
    isDisabled: true,
  },
  {
    title: TranslateKey.LEAVE,
    icon: 'leave',
    routerLink: NavigationPaths.LEAVE,
    isDisabled: true,
  },
  {
    title: TranslateKey.PAYMENT,
    icon: 'payment',
    routerLink: NavigationPaths.PAYMENT,
    isDisabled: true,
  },
  {
    title: TranslateKey.DOCUMENTS,
    icon: 'documents',
    routerLink: NavigationPaths.DOCUMENTS,
    isDisabled: false,
  },
  {
    title: TranslateKey.RECRUITMENTS,
    icon: 'recruitment',
    routerLink: NavigationPaths.RECRUITMENTS,
    isDisabled: true,
  },
  {
    title: TranslateKey.PERFORMANCE,
    icon: 'performance',
    routerLink: NavigationPaths.PERFORMANCE,
    isDisabled: true,
  },
  {
    title: TranslateKey.LEARNINGS,
    icon: 'learning',
    routerLink: NavigationPaths.LEARNINGS,
    isDisabled: true,
  },
  {
    title: TranslateKey.TIMESHEET,
    icon: 'timesheet',
    routerLink: NavigationPaths.TIMESHEET,
    isDisabled: true,
  },
  {
    title: TranslateKey.SCHEDULING,
    icon: 'scheduling',
    routerLink: NavigationPaths.SCHEDULING,
    isDisabled: true,
  },
  {
    title: TranslateKey.ENGAGEMENT,
    icon: 'engagement',
    routerLink: NavigationPaths.ENGAGEMENT,
  },
  {
    title: TranslateKey.REPORTS_ANALYTICS,
    icon: 'reports-analytics',
    routerLink: NavigationPaths.REPORT_ANALYTICS,
    isDisabled: true,
  },
  {
    title: TranslateKey.USER_ACCOUNT,
    icon: 'learning',
    routerLink: NavigationPaths.USER_ACCOUNT,
    isDisabled: true,
  },
];

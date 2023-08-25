import { MenusConfig } from "@core/types/menus-config";
import { NavigationPaths } from "@core/enums/navigation-paths.enum";

export const dashboardTabsConfig: MenusConfig[] = [
  {
    title: 'Company',
    icon: 'company-menu-logo',
    routerLink: NavigationPaths.COMPANY,
  },
  {
    title: 'EMPLOYEES',
    icon: 'employee',
    routerLink: NavigationPaths.EMPLOYEES,
  },
  {
    title: 'PAYROLL',
    icon: 'payroll',
    routerLink: NavigationPaths.PAYROLL,
    isDisabled: true
  },
  {
    title: 'LEAVE',
    icon: 'leave',
    routerLink: NavigationPaths.LEAVE,
    isDisabled: true
  },
  {
    title: 'PAYMENT',
    icon: 'payment',
    routerLink: NavigationPaths.PAYMENT,
    isDisabled: true
  },
  {
    title: 'DOCUMENTS',
    icon: 'documents',
    routerLink: NavigationPaths.DOCUMENTS,
    isDisabled: false
  },
  {
    title: 'RECRUITMENTS',
    icon: 'recruitment',
    routerLink: NavigationPaths.RECRUITMENTS,
    isDisabled: true
  },
  {
    title: 'Performance',
    icon: 'performance',
    routerLink: NavigationPaths.PERFORMANCE,
    isDisabled: true
  },
  {
    title: 'LEARNINGS',
    icon: 'learning',
    routerLink: NavigationPaths.LEARNINGS,
    isDisabled: true
  },
  {
    title: 'TIMESHEET',
    icon: 'timesheet',
    routerLink: NavigationPaths.TIMESHEET,
    isDisabled: true
  },
  {
    title: 'SCHEDULING',
    icon: 'scheduling',
    routerLink: NavigationPaths.SCHEDULING,
    isDisabled: true
  },
  {
    title: 'ENGAGEMENT',
    icon: 'engagement',
    routerLink: NavigationPaths.ENGAGEMENT,
  },
  {
    title: 'REPORTS_ANALYTICS',
    icon: 'reports-analytics',
    routerLink: NavigationPaths.REPORT_ANALYTICS,
    isDisabled: true
  },
  {
    title: 'USER_ACCOUNT',
    icon: 'learning',
    routerLink: NavigationPaths.USER_ACCOUNT,
    isDisabled: true
  },
]

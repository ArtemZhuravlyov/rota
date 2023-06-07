import { MenusConfig } from "@core/types/menus-config";
import { NavigationPaths } from "@core/enums/navigation-paths.enum";

export const dashboardTabsConfig: MenusConfig[] = [
    {
        title: 'General',
        icon: 'general',
        routerLink: NavigationPaths.COMPANY,
    },
    {
        title: 'EMPLOYEES',
        icon: 'employee',
        routerLink: NavigationPaths.EMPLOYEE,
    },
    {
        title: 'PAYROLL',
        icon: 'payroll',
        routerLink: NavigationPaths.PAYROLL,
    },
    {
        title: 'LEAVE',
        icon: 'leave',
        routerLink: NavigationPaths.LEAVE,
    },
    {
        title: 'PAYMENT',
        icon: 'payment',
        routerLink: NavigationPaths.PAYMENT,
    },
    {
        title: 'DOCUMENTS',
        icon: 'documents',
        routerLink: NavigationPaths.DOCUMENTS,
    },
    {
        title: 'RECRUITMENTS',
        icon: 'recruitment',
        routerLink: NavigationPaths.RECRUITMENTS,
    },
    {
      title: 'Performance',
      icon: 'performance',
      routerLink: NavigationPaths.PERFORMANCE,
    },
    {
      title: 'LEARNINGS',
      icon: 'learning',
      routerLink: NavigationPaths.LEARNINGS,
    },
    {
      title: 'TIMESHEET',
      icon: 'timesheet',
      routerLink: NavigationPaths.TIMESHEET,
    },
    {
      title: 'SCHEDULING',
      icon: 'scheduling',
      routerLink: NavigationPaths.SCHEDULING,
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
    },
    {
        title: 'USER_ACCOUNT',
        icon: 'learning',
        routerLink: NavigationPaths.USER_ACCOUNT,
    },
]

import { MenusConfig } from "@core/types/menus-config";
import { NavigationPaths } from "@core/enums/navigation-paths.enum";

export const settingsTabsConfig: MenusConfig[] = [
  {
    title: 'COMPANY',
    routerLink: NavigationPaths.COMPANY,
  },
  {
    title: 'WORKFLOW',
    routerLink: NavigationPaths.WORKFLOW,
  },
  {
    title: 'PAYROLL',
    routerLink: NavigationPaths.PAYROLL,
  },
  {
    title: 'TIMESHEET',
    routerLink: NavigationPaths.TIMESHEET,
  },
  {
    title: 'PAYROLL_ACCOUNTING',
    routerLink: NavigationPaths.PAYROLL_ACCOUNTING,
  },
  {
    title: 'LEAVE_MANAGEMENT',
    routerLink: NavigationPaths.LEAVE_MANAGEMENT,
  },
  {
    title: 'TRUSTED_DEVICES',
    routerLink: NavigationPaths.TRUSTED_DEVICES,
  }
];

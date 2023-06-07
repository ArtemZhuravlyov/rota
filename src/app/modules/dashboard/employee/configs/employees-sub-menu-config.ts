import { MenusConfig } from "@core/types/menus-config";
import { NavigationPaths } from "@core/enums/navigation-paths.enum";

export const employeesSubMenuConfig: MenusConfig[] = [
  {
    title: 'EMPLOYEES',
    routerLink: `./${NavigationPaths.EMPTY_PATH}`,
  },
  {
    title: 'DIRECTORY',
    routerLink: NavigationPaths.DIRECTORY,
  },
  {
    title: 'ONBOARDING',
    routerLink: NavigationPaths.ONBOARDING,
  },
  {
    title: 'OFFBOARDING',
    routerLink: NavigationPaths.OFFBOARDING,
  },
  {
    title: 'LOAN_MANAGEMENT',
    routerLink: NavigationPaths.LOAN_MANAGEMENT,
  }
];

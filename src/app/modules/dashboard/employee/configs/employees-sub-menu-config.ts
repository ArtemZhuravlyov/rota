import { MenusConfig } from "@core/types/menus-config";
import { NavigationPaths } from "@core/enums/navigation-paths.enum";

export const employeesSubMenuConfig: MenusConfig[] = [
  {
    title: 'EMPLOYEES',
    routerLink: `./${NavigationPaths.EMPTY_PATH}`,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.EMPLOYEES}/${NavigationPaths.EMPTY_PATH}`
  },
  {
    title: 'DIRECTORY',
    routerLink: NavigationPaths.DIRECTORY,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.EMPLOYEES}/${NavigationPaths.DIRECTORY}`
  },
  {
    title: 'ONBOARDING',
    routerLink: NavigationPaths.ONBOARDING,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.EMPLOYEES}/${NavigationPaths.ONBOARDING}`
  },
  {
    title: 'OFFBOARDING',
    routerLink: NavigationPaths.OFFBOARDING,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.EMPLOYEES}/${NavigationPaths.OFFBOARDING}`
  },
  {
    title: 'LOAN_MANAGEMENT',
    routerLink: NavigationPaths.LOAN_MANAGEMENT,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.EMPLOYEES}/${NavigationPaths.LOAN_MANAGEMENT}`
  }
];

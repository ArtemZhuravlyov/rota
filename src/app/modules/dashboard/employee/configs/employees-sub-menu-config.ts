import { MenusConfig } from '@core/types/menus-config';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { TranslateKey } from '../../../../../assets/i18n/enums/translate-key.enum';

export const employeesSubMenuConfig: MenusConfig[] = [
  {
    title: TranslateKey.EMPLOYEES,
    routerLink: `./${NavigationPaths.EMPTY_PATH}`,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.EMPLOYEES}/${NavigationPaths.EMPTY_PATH}`,
  },
  {
    title: TranslateKey.DIRECTORY,
    routerLink: NavigationPaths.DIRECTORY,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.EMPLOYEES}/${NavigationPaths.DIRECTORY}`,
    isDisabled: true,
  },
  {
    title: TranslateKey.ONBOARDING,
    routerLink: NavigationPaths.ONBOARDING,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.EMPLOYEES}/${NavigationPaths.ONBOARDING}`,
    isDisabled: true,
  },
  {
    title: TranslateKey.OFFBOARDING,
    routerLink: NavigationPaths.OFFBOARDING,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.EMPLOYEES}/${NavigationPaths.OFFBOARDING}`,
    isDisabled: true,
  },
  {
    title: TranslateKey.LOAN_MANAGEMENT,
    routerLink: NavigationPaths.LOAN_MANAGEMENT,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.EMPLOYEES}/${NavigationPaths.LOAN_MANAGEMENT}`,
    isDisabled: true,
  },
];

import { MenusConfig } from '@core/types/menus-config';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { TranslateKey } from '../../../../../assets/i18n/enums/translate-key.enum';

export const employeesSubMenuConfig: MenusConfig[] = [
  {
    title: TranslateKey.EMPLOYEES_TYPE,
    routerLink: `./${NavigationPaths.EMPTY_PATH}`,
    fullRouterLink: `${NavigationPaths.BACK}/${NavigationPaths.DASHBOARD}/${NavigationPaths.EMPLOYEES}/${NavigationPaths.EMPLOYEES_TYPE}`,
  },
  {
    title: TranslateKey.EMPLOYEE_RECORD,
    routerLink: NavigationPaths.EMPLOYEES,
    fullRouterLink: `${NavigationPaths.BACK}/${NavigationPaths.DASHBOARD}/${NavigationPaths.EMPLOYEES}/${NavigationPaths.EMPLOYEES}`,
  },
  {
    title: TranslateKey.ORGANISATION_CHART,
    routerLink: NavigationPaths.ORGANOGRAM,
    fullRouterLink: `${NavigationPaths.BACK}/${NavigationPaths.DASHBOARD}/${NavigationPaths.EMPLOYEES}/${NavigationPaths.ORGANOGRAM}`,
  },
  {
    title: TranslateKey.IMPORT_VERIFICATION,
    routerLink: NavigationPaths.OFFBOARDING,
    fullRouterLink: `${NavigationPaths.BACK}/${NavigationPaths.DASHBOARD}/${NavigationPaths.EMPLOYEES}/${NavigationPaths.OFFBOARDING}`,
    isDisabled: true,
  },
];

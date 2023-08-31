import { MenusConfig } from '@core/types/menus-config';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { TranslateKey } from '../../../../../assets/i18n/enums/translate-key.enum';

export const companySubMenuConfig: MenusConfig[] = [
  {
    title: TranslateKey.COMPANY_LIST,
    icon: 'search',
    routerLink: `./${NavigationPaths.EMPTY_PATH}`,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.COMPANY}/${NavigationPaths.EMPTY_PATH}`,
  },
  {
    title: TranslateKey.BANK_ACCOUNT,
    icon: 'search',
    routerLink: `./${NavigationPaths.BANK_ACCOUNT}`,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.COMPANY}/${NavigationPaths.BANK_ACCOUNT}`,
  },
  {
    title: TranslateKey.GROUP_FUNCTION_DIVISION,
    icon: 'search',
    routerLink: NavigationPaths.GROUP_FUNCTION_DIVISION,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.COMPANY}/${NavigationPaths.GROUP_FUNCTION_DIVISION}`,
  },
  {
    title: TranslateKey.DEPARTMENT,
    icon: 'search',
    routerLink: NavigationPaths.DEPARTMENT,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.COMPANY}/${NavigationPaths.DEPARTMENT}`,
  },
  {
    title: TranslateKey.GRADE_CATEGORY,
    icon: 'search',
    routerLink: NavigationPaths.GRADE_CATEGORY,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.COMPANY}/${NavigationPaths.GRADE_CATEGORY}`,
  },
  {
    title: TranslateKey.POSITION,
    icon: 'search',
    routerLink: NavigationPaths.POSITION,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.COMPANY}/${NavigationPaths.POSITION}`,
  },
  {
    title: TranslateKey.BENEFIT,
    icon: 'search',
    routerLink: NavigationPaths.BENEFIT,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.COMPANY}/${NavigationPaths.BENEFIT}`,
  },
  {
    title: TranslateKey.WORK_SCHEDULE,
    icon: 'search',
    routerLink: NavigationPaths.WORK_SCHEDULE,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.COMPANY}/${NavigationPaths.WORK_SCHEDULE}`,
    isDisabled: true,
  },
  {
    title: TranslateKey.PAY_STRUCTURE,
    icon: 'search',
    routerLink: NavigationPaths.PAY_STRUCTURE,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.COMPANY}/${NavigationPaths.PAY_STRUCTURE}`,
    isDisabled: true,
  },
];

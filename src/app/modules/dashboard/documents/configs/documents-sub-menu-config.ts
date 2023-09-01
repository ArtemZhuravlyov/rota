import { MenusConfig } from '@core/types/menus-config';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { TranslateKey } from '../../../../../assets/i18n/enums/translate-key.enum';

export const documentsSubMenuConfig: MenusConfig[] = [
  {
    title: TranslateKey.FOLDER_MANAGEMENT,
    routerLink: `./${NavigationPaths.EMPTY_PATH}`,
    icon: 'search',
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.DOCUMENTS}/${NavigationPaths.EMPTY_PATH}`,
  },
  {
    title: TranslateKey.EMPLOYEE_DOCUMENT,
    icon: 'search',
    routerLink: NavigationPaths.EMPLOYEE_DOCUMENT,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.DOCUMENTS}/${NavigationPaths.EMPLOYEE_DOCUMENT}`,
  },
];

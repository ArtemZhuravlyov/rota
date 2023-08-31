import { MenusConfig } from '@core/types/menus-config';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { TranslateKey } from '../../../../../assets/i18n/enums/translate-key.enum';

export const documentsSubMenuConfig: MenusConfig[] = [
  {
    title: TranslateKey.FOLDER_MANAGEMENT,
    icon: 'search',
    routerLink: NavigationPaths.FOLDER_MANAGEMENT,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.DOCUMENTS}/${NavigationPaths.FOLDER_MANAGEMENT}`,
  },
  {
    title: TranslateKey.DOCUMENT_MANAGEMENT,
    icon: 'search',
    routerLink: NavigationPaths.DOCUMENT_MANAGEMENT,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.DOCUMENTS}/${NavigationPaths.DOCUMENT_MANAGEMENT}`,
  },
  {
    title: TranslateKey.EMPLOYEE_DOCUMENT,
    icon: 'search',
    routerLink: NavigationPaths.EMPLOYEE_DOCUMENT,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.DOCUMENTS}/${NavigationPaths.EMPLOYEE_DOCUMENT}`,
  },
];

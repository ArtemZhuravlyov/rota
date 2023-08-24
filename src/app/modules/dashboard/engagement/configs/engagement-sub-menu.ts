import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { MenusConfig } from '@core/types/menus-config';
import { TranslateKey } from '../../../../../assets/i18n/enums/translate-key.enum';

export const engagementSubMenu: MenusConfig[] = [
  {
    title: TranslateKey.ORGANOGRAM,
    routerLink: `./${NavigationPaths.ORGANOGRAM}`,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.ENGAGEMENT}/${NavigationPaths.ORGANOGRAM}`,
  },
];

import { MenusConfig } from '@core/types/menus-config';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { TranslateKey } from '../../../../../assets/i18n/enums/translate-key.enum';

export const userAccountSubMenuConfig: MenusConfig[] = [
  {
    title: TranslateKey.USER,
    routerLink: NavigationPaths.USER,
  },
  {
    title: TranslateKey.ROLE,
    routerLink: NavigationPaths.ROLE,
  },
  {
    title: TranslateKey.COMPANY,
    routerLink: NavigationPaths.COMPANY,
  },
];

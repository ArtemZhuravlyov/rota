import { MenusConfig } from '@core/types/menus-config';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { TranslateKey } from '../../../../../assets/i18n/enums/translate-key.enum';

export const settingsSubMenuConfig: MenusConfig[] = [
  {
    title: TranslateKey.TEST,
    routerLink: `./${NavigationPaths.EMPTY_PATH}`,
  },
];

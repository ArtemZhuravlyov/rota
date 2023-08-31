import { NavigationMenusConfig } from '@core/types/navigation-menus-config';
import { TranslateKey } from '../../../../../assets/i18n/enums/translate-key.enum';

export const PersonMenuConfig: NavigationMenusConfig[] = [
  {
    icon: 'information',
    title: TranslateKey.MY_INFORMATION,
  },
  {
    icon: 'settings',
    title: TranslateKey.ACCOUNT_SETTINGS,
  },
  {
    icon: 'leave',
    title: TranslateKey.LOG_OUT,
  },
];

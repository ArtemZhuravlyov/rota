import { TranslateKey } from '../../../assets/i18n/enums/translate-key.enum';

export interface NavigationMenusConfig {
  title: TranslateKey;
  icon: string;
  text?: string;
  date?: string;
}

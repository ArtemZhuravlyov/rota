import { TranslateKey } from '../../../assets/i18n/enums/translate-key.enum';

export interface MenusConfig {
  title: TranslateKey;
  routerLink: string;
  fullRouterLink?: string;
  icon?: string;
  isDisabled?: boolean;
}

import { NavigationMenusConfig } from '@core/types/navigation-menus-config';
import { TranslateKey } from '../../../../../assets/i18n/enums/translate-key.enum';

export const SettingsMenuConfig: NavigationMenusConfig[] = [
  {
    title: TranslateKey.MY_SETTINGS,
    icon: 'settings',
  },
  {
    title: TranslateKey.COMPANY,
    icon: 'company-menu-logo',
  },
  {
    title: TranslateKey.BENEFITS,
    icon: 'benefits',
  },
  {
    title: TranslateKey.EMAIL_ALERTS,
    icon: 'email-alerts',
  },
  {
    title: TranslateKey.WORKFLOW,
    icon: 'workflow',
  },
  {
    title: TranslateKey.ACCESS_LEVELS,
    icon: 'access-levels',
  },
  {
    title: TranslateKey.HOLIDAYS,
    icon: 'holidays',
  },
  {
    title: TranslateKey.ONBOARDING,
    icon: 'onboarding',
  },
  {
    title: TranslateKey.OFFBOARDING,
    icon: 'general',
  },
  {
    title: TranslateKey.PAYROLL,
    icon: 'payroll',
  },
  {
    title: TranslateKey.PENSION,
    icon: 'pension',
  },
  {
    title: TranslateKey.TAX,
    icon: 'payment',
  },
  {
    title: TranslateKey.HIRING,
    icon: 'employees',
  },
  {
    title: TranslateKey.PERFORMANCE,
    icon: 'performance',
  },
  {
    title: TranslateKey.LEAVE,
    icon: 'leave',
  },
  {
    title: TranslateKey.TIME_TRACKING,
    icon: 'time-tracking',
  },
];

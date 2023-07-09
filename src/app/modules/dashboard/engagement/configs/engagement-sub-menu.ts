import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { MenusConfig } from '@core/types/menus-config';

export const engagementSubMenu: MenusConfig[] = [
  {
    title: 'ORGANOGRAM',
    routerLink: `./${NavigationPaths.ORGANOGRAM}`,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.ENGAGEMENT}/${NavigationPaths.ORGANOGRAM}`,
  },
]

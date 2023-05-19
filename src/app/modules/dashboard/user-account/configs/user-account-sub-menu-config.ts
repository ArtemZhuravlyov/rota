import { MenusConfig } from "@core/types/menus-config";
import { NavigationPaths } from "@core/enums/navigation-paths.enum";

export const userAccountSubMenuConfig: MenusConfig[] = [
  {
    title: 'USER',
    routerLink: NavigationPaths.USER,
  },
  {
    title: 'ROLE',
    routerLink: NavigationPaths.ROLE,
  },
  {
    title: 'COMPANY',
    routerLink: NavigationPaths.COMPANY,
  },
];

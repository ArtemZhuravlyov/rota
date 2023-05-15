import { MenusConfig } from "../../../../core/types/menus-config";
import { NavigationPaths } from "../../../../core/enums/navigation-paths.enum";

export const userAccountSubMenuConfig: MenusConfig[] = [
  {
    title: 'User',
    routerLink: NavigationPaths.USER,
  },
  {
    title: 'Role',
    routerLink: NavigationPaths.ROLE,
  },
  {
    title: 'Company',
    routerLink: NavigationPaths.COMPANY,
  },
];

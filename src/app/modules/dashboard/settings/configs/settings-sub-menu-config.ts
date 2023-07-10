import { MenusConfig } from "@core/types/menus-config";
import { NavigationPaths } from "@core/enums/navigation-paths.enum";

export const settingsSubMenuConfig: MenusConfig[] = [
  {
    title: 'TEST',
    routerLink: `./${NavigationPaths.EMPTY_PATH}`,
  },
]

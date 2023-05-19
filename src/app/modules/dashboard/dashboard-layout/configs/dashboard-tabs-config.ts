import { MenusConfig } from "../../../../core/types/menus-config";
import { NavigationPaths } from "../../../../core/enums/navigation-paths.enum";

export const dashboardTabsConfig: MenusConfig[] = [
    {
        title: 'COMPANY',
        icon: 'question',
        routerLink: NavigationPaths.COMPANY,
    },
    {
        title: 'EMPLOYEES',
        icon: 'question',
        routerLink: NavigationPaths.EMPLOYEE,
    },
    {
        title: 'DOCUMENTS',
        icon: 'question',
        routerLink: NavigationPaths.DOCUMENTS,
    },
    {
        title: 'USER_ACCOUNT',
        icon: 'question',
        routerLink: NavigationPaths.USER_ACCOUNT,
    },
]

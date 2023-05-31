import { MenusConfig } from "@core/types/menus-config";
import { NavigationPaths } from "@core/enums/navigation-paths.enum";

export const dashboardTabsConfig: MenusConfig[] = [
    {
        title: 'COMPANY',
        icon: 'general',
        routerLink: NavigationPaths.COMPANY,
    },
    {
        title: 'EMPLOYEES',
        icon: 'employee',
        routerLink: NavigationPaths.EMPLOYEE,
    },
    {
        title: 'DOCUMENTS',
        icon: 'documents',
        routerLink: NavigationPaths.DOCUMENTS,
    },
    {
        title: 'USER_ACCOUNT',
        icon: 'learning',
        routerLink: NavigationPaths.USER_ACCOUNT,
    },
]

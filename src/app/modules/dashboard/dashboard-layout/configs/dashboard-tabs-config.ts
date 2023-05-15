import { MenusConfig } from "../../../../core/types/menus-config";
import { NavigationPaths } from "../../../../core/enums/navigation-paths.enum";

export const dashboardTabsConfig: MenusConfig[] = [
    {
        title: 'Company',
        icon: 'question',
        routerLink: NavigationPaths.COMPANY,
    },
    {
        title: 'Employees',
        icon: 'question',
        routerLink: NavigationPaths.EMPLOYEE,
    },
    {
        title: 'Documents',
        icon: 'question',
        routerLink: NavigationPaths.DOCUMENTS,
    },
    {
        title: 'User Account',
        icon: 'question',
        routerLink: NavigationPaths.USER_ACCOUNT,
    },
]

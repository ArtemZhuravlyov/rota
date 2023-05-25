import { MenusConfig } from "@core/types/menus-config";
import { NavigationPaths } from "@core/enums/navigation-paths.enum";

export const dashboardTabsConfig: MenusConfig[] = [
    {
        title: 'COMPANY',
        icon: 'dashboard',
        routerLink: NavigationPaths.COMPANY,
    },
    {
        title: 'EMPLOYEES',
        icon: 'diversity_3',
        routerLink: NavigationPaths.EMPLOYEE,
    },
    {
        title: 'DOCUMENTS',
        icon: 'description',
        routerLink: NavigationPaths.DOCUMENTS,
    },
    {
        title: 'USER_ACCOUNT',
        icon: 'person_4',
        routerLink: NavigationPaths.USER_ACCOUNT,
    },
]

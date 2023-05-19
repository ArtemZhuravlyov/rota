import { MenusConfig } from "../../../../core/types/menus-config";
import { NavigationPaths } from "../../../../core/enums/navigation-paths.enum";

export const companySubMenuConfig: MenusConfig[] = [
    {
        title: 'COMPANY_LIST',
        routerLink: `./${NavigationPaths.EMPTY_PATH}`,
    },
    {
        title: 'BANK_ACCOUNT',
        routerLink: NavigationPaths.BANK_ACCOUNT,
    },
    {
        title: 'GROUP_MORE',
        routerLink: NavigationPaths.GROUP,
    },
    {
        title: 'DEPARTMENT',
        routerLink: NavigationPaths.DEPARTMENT,
    },
    {
        title: 'GRADE_CATEGORY',
        routerLink: NavigationPaths.GRADE_CATEGORY,
    },
    {
        title: 'POSITION',
        routerLink: NavigationPaths.POSITION,
    },
    {
        title: 'BENEFIT',
        routerLink: NavigationPaths.BENEFIT,
    },
    {
        title: 'WORK_SCHEDULE',
        routerLink: NavigationPaths.WORK_SCHEDULE,
    },
    {
        title: 'PAY_STRUCTURE',
        routerLink: NavigationPaths.PAY_STRUCTURE,
    },
]

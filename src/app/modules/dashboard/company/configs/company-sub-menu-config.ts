import { MenusConfig } from "../../../../core/types/menus-config";
import { NavigationPaths } from "../../../../core/enums/navigation-paths.enum";

export const companySubMenuConfig: MenusConfig[] = [
    {
        title: 'Company',
        routerLink: `./${NavigationPaths.EMPTY_PATH}`,
    },
    {
        title: 'Bank Account',
        routerLink: NavigationPaths.BANK_ACCOUNT,
    },
    {
        title: 'Group / Function /Division',
        routerLink: NavigationPaths.GROUP,
    },
    {
        title: 'Department',
        routerLink: NavigationPaths.DEPARTMENT,
    },
    {
        title: 'Grade Category',
        routerLink: NavigationPaths.GRADE_CATEGORY,
    },
    {
        title: 'Position',
        routerLink: NavigationPaths.POSITION,
    },
    {
        title: 'Benefit',
        routerLink: NavigationPaths.BENEFIT,
    },
    {
        title: 'Work Schedule',
        routerLink: NavigationPaths.WORK_SCHEDULE,
    },
    {
        title: 'Pay Structure',
        routerLink: NavigationPaths.PAY_STRUCTURE,
    },
]

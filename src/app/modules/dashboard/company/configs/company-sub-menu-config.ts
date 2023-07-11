import { MenusConfig } from "@core/types/menus-config";
import { NavigationPaths } from "@core/enums/navigation-paths.enum";

export const companySubMenuConfig: MenusConfig[] = [
  {
    title: 'COMPANY_LIST',
    icon: 'search',
    routerLink: `./${NavigationPaths.EMPTY_PATH}`,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.COMPANY}/${NavigationPaths.EMPTY_PATH}`,
  },
  {
    title: 'BANK_ACCOUNT',
    icon: 'search',
    routerLink: `./${NavigationPaths.BANK_ACCOUNT}`,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.COMPANY}/${NavigationPaths.BANK_ACCOUNT}`,
  },
  {
    title: 'GROUP_FUNCTION_DIVISION',
    icon: 'search',
    routerLink: NavigationPaths.GROUP_FUNCTION_DIVISION,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.COMPANY}/${NavigationPaths.GROUP_FUNCTION_DIVISION}`,
  },
  {
    title: 'DEPARTMENT',
    icon: 'search',
    routerLink: NavigationPaths.DEPARTMENT,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.COMPANY}/${NavigationPaths.DEPARTMENT}`,
  },
  {
    title: 'GRADE_CATEGORY',
    icon: 'search',
    routerLink: NavigationPaths.GRADE_CATEGORY,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.COMPANY}/${NavigationPaths.GRADE_CATEGORY}`,
  },
  {
    title: 'POSITION',
    icon: 'search',
    routerLink: NavigationPaths.POSITION,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.COMPANY}/${NavigationPaths.POSITION}`,
  },
  {
    title: 'BENEFIT',
    icon: 'search',
    routerLink: NavigationPaths.BENEFIT,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.COMPANY}/${NavigationPaths.BENEFIT}`,
    isDisabled: true
  },
  {
    title: 'WORK_SCHEDULE',
    icon: 'search',
    routerLink: NavigationPaths.WORK_SCHEDULE,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.COMPANY}/${NavigationPaths.WORK_SCHEDULE}`,
    isDisabled: true
  },
  {
    title: 'PAY_STRUCTURE',
    icon: 'search',
    routerLink: NavigationPaths.PAY_STRUCTURE,
    fullRouterLink: `../${NavigationPaths.DASHBOARD}/${NavigationPaths.COMPANY}/${NavigationPaths.PAY_STRUCTURE}`,
    isDisabled: true
  },
]

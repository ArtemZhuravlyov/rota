import { MenusConfig } from "../../../../core/types/menus-config";
import { NavigationPaths } from "../../../../core/enums/navigation-paths.enum";

export const employeesSubMenuConfig: MenusConfig[] = [
  {
    title: 'EMPLOYMENT_TYPE',
    routerLink: NavigationPaths.EMPLOYMENT_TYPE,
  },
  {
    title: 'EMPLOYEE_RECORD',
    routerLink: NavigationPaths.EMPLOYEE_RECORD,
  },
  {
    title: 'ORGANIZATION_CHART',
    routerLink: NavigationPaths.ORGANIZATION_CHART,
  },
  {
    title: 'IMPORT_VERIFICATION',
    routerLink: NavigationPaths.IMPORT_VERIFICATION,
  },
];

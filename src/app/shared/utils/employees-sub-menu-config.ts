import { MenusConfig } from "../../core/types/menus-config";
import { NavigationPaths } from "../../core/enums/navigation-paths.enum";

export const employeesSubMenuConfig: MenusConfig[] = [
  {
    title: 'Employment Type',
    routerLink: NavigationPaths.EMPLOYMENT_TYPE,
  },
  {
    title: 'Employee Record',
    routerLink: NavigationPaths.EMPLOYEE_RECORD,
  },
  {
    title: 'Organization Chart',
    routerLink: NavigationPaths.ORGANIZATION_CHART,
  },
  {
    title: 'Import Verification',
    routerLink: NavigationPaths.IMPORT_VERIFICATION,
  },
];

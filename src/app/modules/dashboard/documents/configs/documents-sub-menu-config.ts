import { MenusConfig } from "../../../../core/types/menus-config";
import { NavigationPaths } from "../../../../core/enums/navigation-paths.enum";

export const documentsSubMenuConfig: MenusConfig[] = [
  {
    title: 'Folder Management',
    routerLink: NavigationPaths.FOLDER_MANAGEMENT,
  },
  {
    title: 'Document Management',
    routerLink: NavigationPaths.DOCUMENT_MANAGEMENT,
  },
  {
    title: 'Employee Document',
    routerLink: NavigationPaths.EMPLOYEE_DOCUMENT,
  },
];

import {companySubMenuConfig} from "@app/modules/dashboard/company/configs/company-sub-menu-config";
import {employeesSubMenuConfig} from "@app/modules/dashboard/employee/configs/employees-sub-menu-config";
import {documentsSubMenuConfig} from "@app/modules/dashboard/documents/configs/documents-sub-menu-config";
import {dashboardTabsConfig} from "@app/modules/dashboard/dashboard-layout/configs/dashboard-tabs-config";

const dashboardTabs = [
  dashboardTabsConfig,
  companySubMenuConfig,
  employeesSubMenuConfig,
  documentsSubMenuConfig,
]
export const tabsConfig = () => {
  return dashboardTabs.reduce((result, config) => {
    return result.concat(config);
  }, [])
}

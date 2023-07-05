import { TableConfig } from "@core/types/data-table";

export const groupFunctionDivisionTableConfig: TableConfig = [
  {
    columnName: 'SELECT_ALL',
    columnType: 'checkbox',
  },
  {
    columnName: 'NAME',
    columnType: 'link',
    action: 'view',
    hidden: false,
    filedName: 'name'
  },
  {
    columnName: '# of Department',
    columnType: 'text',
    hidden: false,
    filedName: 'numberOfDepartment',
  },
  {
    columnName: 'Division Head',
    columnType: 'text',
    hidden: false,
    filedName: 'managerTitle',
  },
  {
    columnName: 'ACTIONS',
    columnType: 'actions',
  }
]

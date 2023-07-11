import { TableConfig } from "@core/types/data-table";

export const departmentTableConfig: TableConfig = [
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
    columnName: 'Head of Department',
    columnType: 'text',
    hidden: false,
    filedName: 'managerTitle',
  },
  {
    columnName: 'Division ',
    columnType: 'text',
    hidden: false,
    filedName: 'divisionName',
  },
  {
    columnName: '# of Job Role',
    columnType: 'text',
    hidden: false,
    filedName: 'numberOfJobRole',
  },
  {
    columnName: 'ACTIONS',
    columnType: 'actions',
  }
]

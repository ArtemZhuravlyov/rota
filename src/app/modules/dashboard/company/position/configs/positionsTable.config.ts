import { TableConfig } from "@core/types/data-table";

export const positionsTableConfig: TableConfig = [
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
    columnName: 'Grade Level',
    columnType: 'text',
    hidden: false,
    filedName: 'gradeLevelName',
  },
  {
    columnName: '# of Employee',
    columnType: 'text',
    hidden: false,
    filedName: 'employeeCount',
  },
  {
    columnName: 'Job Description',
    columnType: 'descriptions',
    hidden: false,
    filedName: 'jobDescription',
  },
  {
    columnName: 'ACTIONS',
    columnType: 'actions',
  }
]

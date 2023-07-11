import {TableConfig} from "@core/types/data-table";

export const qualificationsTableConfig: TableConfig = [
  {
    columnName: 'CERTIFICATE_TYPE',
    columnType: 'text',
    hidden: false,
    filedName: 'name'
  },
  {
    columnName: 'TITLE_OF_CERTIFICATE',
    columnType: 'text',
    hidden: false,
    filedName: 'positionCount',
  },
  {
    columnName: 'ISSUE_DATE',
    columnType: 'text',
    hidden: false,
    filedName: 'positionCount',
  },
  {
    columnName: 'RENEWAL_DATE',
    columnType: 'text',
    hidden: false,
    filedName: 'positionCount',
  },
  {
    columnName: 'ACTIONS',
    columnType: 'actions',
  },
]

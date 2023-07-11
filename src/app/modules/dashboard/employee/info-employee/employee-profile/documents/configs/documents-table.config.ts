import {TableConfig} from "@core/types/data-table";

export const documentsTableConfig: TableConfig = [
  {
    columnName: 'NAME',
    columnType: 'text',
    hidden: false,
    filedName: 'name'
  },
  {
    columnName: 'DOCUMENT',
    columnType: 'text',
    hidden: false,
    filedName: 'document',
  },
  {
    columnName: 'SIZE',
    columnType: 'text',
    hidden: false,
    filedName: 'size',
  },
  {
    columnName: 'ACTIONS',
    columnType: 'actions',
  },
]

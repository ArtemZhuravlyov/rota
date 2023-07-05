import { TableConfig } from "@core/types/data-table";

export const gradeLevelsTableConfig: TableConfig = [
  {
    columnName: 'Grade Level',
    columnType: 'text',
    hidden: false,
    filedName: 'name'
  },
  {
    columnName: 'Code',
    columnType: 'text',
    hidden: false,
    filedName: 'code',
  },
  {
    columnName: 'Display Order',
    columnType: 'text',
    hidden: false,
    filedName: 'displayOrder',
  },
  {
    columnName: 'ACTIONS',
    columnType: 'actions',
  },
];

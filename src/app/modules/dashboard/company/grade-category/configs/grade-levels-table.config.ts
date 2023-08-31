import { TableConfig } from '@core/types/data-table';

export const gradeLevelsTableConfig: TableConfig = [
  {
    columnName: 'GRADE_LEVEL',
    columnType: 'text',
    hidden: false,
    filedName: 'name',
  },
  {
    columnName: 'CODE',
    columnType: 'text',
    hidden: false,
    filedName: 'code',
  },
  {
    columnName: 'DISPLAY_ORDER',
    columnType: 'text',
    hidden: false,
    filedName: 'displayOrder',
  },
  {
    columnName: 'ACTIONS',
    columnType: 'actions',
  },
];

import { TableConfig } from '@core/types/data-table';

export const groupFunctionDivisionTableConfig: TableConfig = [
  {
    columnName: 'EMPTY',
    columnType: 'checkbox',
  },
  {
    columnName: 'NAME',
    columnType: 'link',
    action: 'view',
    hidden: false,
    filedName: 'name',
  },
  {
    columnName: 'NUMBER_OF_DEPARTMENT',
    columnType: 'text',
    hidden: false,
    filedName: 'numberOfDepartment',
  },
  {
    columnName: 'DIVISION_HEAD',
    columnType: 'text',
    hidden: false,
    filedName: 'managerTitle',
  },
  {
    columnName: 'ACTIONS',
    columnType: 'actions',
  },
];

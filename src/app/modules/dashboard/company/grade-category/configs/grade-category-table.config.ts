import { TableConfig } from '@core/types/data-table';

export const gradeCategoryTableConfig: TableConfig = [
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
    columnName: 'NUMBER_OF_JOB_ROLE',
    columnType: 'text',
    hidden: false,
    filedName: 'positionCount',
  },
  {
    columnName: 'ACTIONS',
    columnType: 'actions',
  },
];

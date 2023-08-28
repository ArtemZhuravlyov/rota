import { TableConfig } from '@core/types/data-table';

export const departmentTableConfig: TableConfig = [
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
    columnName: 'HEAD_OF_DEPARTMENT',
    columnType: 'text',
    hidden: false,
    filedName: 'managerTitle',
  },
  {
    columnName: 'DIVISION',
    columnType: 'text',
    hidden: false,
    filedName: 'divisionName',
  },
  {
    columnName: 'NUMBER_OF_JOB_ROLE',
    columnType: 'text',
    hidden: false,
    filedName: 'numberOfJobRole',
  },
  {
    columnName: 'ACTIONS',
    columnType: 'actions',
  },
];

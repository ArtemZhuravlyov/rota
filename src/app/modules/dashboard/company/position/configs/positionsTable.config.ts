import { TableConfig } from '@core/types/data-table';

export const positionsTableConfig: TableConfig = [
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
    columnName: 'GRADE_LEVEL',
    columnType: 'text',
    hidden: false,
    filedName: 'gradeLevelName',
  },
  {
    columnName: 'NUMBER_OF_EMPLOYEE',
    columnType: 'text',
    hidden: false,
    filedName: 'employeeCount',
  },
  {
    columnName: 'JOB_DESCRIPTION',
    columnType: 'descriptions',
    hidden: false,
    filedName: 'jobDescription',
  },
  {
    columnName: 'ACTIONS',
    columnType: 'actions',
  },
];

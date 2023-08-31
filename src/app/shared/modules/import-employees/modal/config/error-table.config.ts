import { TableConfig } from '@core/types/data-table';

export const errorTableConfig: TableConfig = [
  {
    columnName: 'EMPTY',
    columnType: 'checkbox',
  },
  {
    columnName: 'ROW_ID',
    columnType: 'numeric',
    filedName: 'rowId',
    hidden: false,
  },
  {
    columnName: 'EMPLOYEE_NUMBER',
    columnType: 'text',
    filedName: 'employeeNumber',
    hidden: false,
  },
  {
    columnName: 'DATE_OF_BIRTH',
    columnType: 'text',
    filedName: 'dateOfBirth',
    hidden: false,
  },
  {
    columnName: 'ACTIONS',
    columnType: 'actions',
  },
];

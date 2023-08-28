import { TableConfig } from '@core/types/data-table';

export const employeesTypeListConfig: TableConfig = [
  {
    columnName: 'EMPTY',
    columnType: 'checkbox',
  },
  {
    columnName: 'NAME',
    columnType: 'text',
    hidden: false,
    filedName: 'name',
  },
  {
    columnName: 'DESCRIPTION',
    columnType: 'descriptions',
    hidden: false,
    filedName: 'description',
  },
  {
    columnName: 'NUMBER_OF_EMPLOYEE',
    columnType: 'text',
    hidden: false,
    filedName: 'totalEmployeeNumber',
  },
  {
    columnName: 'ACTIONS',
    columnType: 'actions',
  },
];

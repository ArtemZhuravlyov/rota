import { TableConfig } from '@core/types/data-table';

export const employeesListConfig: TableConfig = [
  {
    columnName: 'EMPTY',
    columnType: 'checkbox',
  },
  {
    columnName: 'NAME',
    columnType: 'link',
    hidden: false,
    filedName: 'name',
  },
  {
    columnName: 'HIRE_DATE',
    columnType: 'text',
    hidden: false,
    filedName: 'hireDate',
  },
  {
    columnName: 'DEPARTMENT',
    columnType: 'text',
    hidden: false,
    filedName: 'department',
  },
  {
    columnName: 'POSITION',
    columnType: 'text',
    hidden: false,
    filedName: 'position',
  },
  {
    columnName: 'MANAGER',
    columnType: 'text',
    hidden: false,
    filedName: 'manager',
  },
  {
    columnName: 'ACTIONS',
    columnType: 'actions',
  },
];

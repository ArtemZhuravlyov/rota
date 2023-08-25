import { TableConfig } from '@core/types/data-table';

export const employeesTypeListConfig: TableConfig = [
  {
    columnName: 'SELECT_ALL',
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
    columnName: '# of Employee',
    columnType: 'text',
    hidden: false,
    filedName: 'totalEmployeeNumber',
  },
  {
    columnName: 'ACTIONS',
    columnType: 'actions',
  },
];

import { TableConfig } from '@core/types/data-table';

export const companyListConfig: TableConfig = [
  {
    columnName: 'SELECT_ALL',
    columnType: 'checkbox',
  },
  {
    columnName: 'NAME',
    columnType: 'text',
    filedName: 'name',
  },
  {
    columnName: 'ADDRESS',
    columnType: 'text',
    filedName: 'address',
  },
  {
    columnName: 'EMAIL',
    columnType: 'text',
    filedName: 'email',
  },
  {
    columnName: 'PHONE',
    columnType: 'text',
    filedName: 'phone',
  },
  {
    columnName: 'LOCATION',
    columnType: 'country',
    filedName: 'countryId',
  },
  {
    columnName: 'ACTIONS',
    columnType: 'actions',
  }
];

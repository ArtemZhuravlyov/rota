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
    hidden: false,
  },
  {
    columnName: 'ADDRESS',
    columnType: 'text',
    filedName: 'address',
    hidden: false,
  },
  {
    columnName: 'EMAIL',
    columnType: 'text',
    filedName: 'email',
    hidden: false,
  },
  {
    columnName: 'PHONE',
    columnType: 'text',
    filedName: 'phone',
    hidden: false,
  },
  {
    columnName: 'LOCATION',
    columnType: 'country',
    filedName: 'countryId',
    hidden: false,
  },
  {
    columnName: 'ACTIONS',
    columnType: 'actions',
  }
];

import { TableConfig } from '@core/types/data-table';

export const foldersListConfig: TableConfig = [
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
    columnName: 'DESCRIPTION',
    columnType: 'text',
    filedName: 'description',
    hidden: false,
  },
  {
    columnName: 'SHARE',
    columnType: 'toggle',
    filedName: 'share',
    hidden: false,
  },
  {
    columnName: 'SHARE_WITH',
    columnType: 'text',
    filedName: 'share_with',
    hidden: false,
  },
  {
    columnName: 'SIZE',
    columnType: 'text',
    filedName: 'size',
    hidden: false,
  },
  {
    columnName: 'ACTIONS',
    columnType: 'actions',
  },
];

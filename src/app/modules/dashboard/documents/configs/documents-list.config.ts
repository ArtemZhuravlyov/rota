import { TableConfig } from '@core/types/data-table';

export const documentsListConfig: TableConfig = [
  {
    columnName: 'NAME',
    columnType: 'folder',
    filedName: 'name',
    hidden: false,
  },
  {
    columnName: 'DESCRIPTION',
    columnType: 'descriptions',
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
    filedName: 'users',
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

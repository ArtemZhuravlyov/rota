import { TableConfig } from '@core/types/data-table';

export const foldersListConfig: TableConfig = [
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
    columnType: 'share_with',
    filedName: 'users',
    hidden: false,
    action: 'share_with',
  },
  {
    columnName: 'SIZE',
    columnType: 'size',
    filedName: 'size',
    hidden: false,
  },
  {
    columnName: 'ACTIONS',
    columnType: 'actions',
  },
];

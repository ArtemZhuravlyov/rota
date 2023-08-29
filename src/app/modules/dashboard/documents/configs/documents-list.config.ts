import { TableConfig } from '@core/types/data-table';

export const documentsListConfig: TableConfig = [
  {
    columnName: 'NAME',
    columnType: 'folder',
    filedName: 'name',
    hidden: false,
  },
  {
    columnName: 'DOCUMENT',
    columnType: 'descriptions',
    filedName: 'document',
    hidden: false,
  },
  {
    columnName: 'SIZE',
    columnType: 'text',
    filedName: 'size',
    hidden: false,
  },
  {
    columnName: 'CREATION_DATE',
    columnType: 'text',
    filedName: 'creation_date',
    hidden: false,
  },
  {
    columnName: 'ACTIONS',
    columnType: 'actions',
  },
];

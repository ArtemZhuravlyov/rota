import { TableConfig } from '@core/types/data-table';

export const documentsListConfig: TableConfig = [
  {
    columnName: 'EMPTY',
    columnType: 'checkbox',
  },
  {
    columnName: 'NAME',
    columnType: 'text',
    filedName: 'name',
    hidden: false,
  },
  {
    columnName: 'DOCUMENT',
    columnType: 'text',
    filedName: 'nameExt',
    hidden: false,
  },
  {
    columnName: 'SIZE',
    columnType: 'text',
    filedName: 'sizeInUnit',
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

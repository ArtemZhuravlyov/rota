import { TableConfig } from '@core/types/data-table';

export const benefitListConfig: TableConfig = [
  {
    columnName: 'EMPTY',
    columnType: 'checkbox',
  },
  {
    columnName: 'NAME',
    filedName: 'name',
    columnType: 'text',
    action: 'view',
    hidden: false,
  },
  {
    columnName: 'DESCRIPTION',
    filedName: 'description',
    columnType: 'descriptions',
    action: 'view',
    hidden: false,
  },
  {
    columnName: 'GRADE_CATEGORY',
    filedName: 'gradeCategory',
    columnType: 'text',
    action: 'view',
    hidden: false,
  },
  {
    columnName: 'ACTIONS',
    columnType: 'actions',
  },
];

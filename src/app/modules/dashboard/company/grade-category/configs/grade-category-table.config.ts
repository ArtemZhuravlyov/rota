import { TableConfig } from "@core/types/data-table";

export const gradeCategoryTableConfig: TableConfig = [
  {
    columnName: 'NAME',
    columnType: 'text',
    hidden: false,
    filedName: 'name'
  },
  {
    columnName: 'NUMBER_OF_JOB_ROLE',
    columnType: 'text',
    hidden: false,
    filedName: 'positionCount',
  },
];

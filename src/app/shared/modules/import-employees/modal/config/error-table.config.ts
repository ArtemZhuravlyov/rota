import {TableConfig} from "@core/types/data-table";

export const errorTableConfig: TableConfig = [
  {
    columnName: 'SELECT_ALL',
    columnType: 'checkbox',
  },
  {
    columnName: 'Row ID',
    columnType: 'numeric',
    filedName: 'rowId',
    hidden: false,
  },
  {
    columnName: 'Employee Number',
    columnType: 'text',
    filedName: 'employeeNumber',
    hidden: false,
  },
  {
    columnName: 'Date of Birth',
    columnType: 'text',
    filedName: 'dateOfBirth',
    hidden: false,
  },
  {
    columnName: 'ACTIONS',
    columnType: 'actions',
  }
];

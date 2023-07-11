import { TableConfig } from "@core/types/data-table";

export const employeesListConfig: TableConfig = [
  {
    columnName: 'SELECT_ALL',
    columnType: 'checkbox',
  },
  {
    columnName: 'FIRST_NAME',
    columnType: 'link',
    hidden: false,
    filedName: 'firstName'
  },
  {
    columnName: 'LAST_NAME',
    columnType: 'text',
    hidden: false,
    filedName: 'lastName',
  },
  {
    columnName: 'MIDDLE_NAME',
    columnType: 'text',
    hidden: false,
    filedName: 'middleName',
  },
  {
    columnName: 'EMAIL',
    columnType: 'text',
    hidden: false,
    filedName: 'email',
  },
  {
    columnName: 'DATE_OF_BIRTH',
    columnType: 'text',
    hidden: false,
    filedName: 'dob',
  },
  {
    columnName: 'ACTIONS',
    columnType: 'actions',
  }
];

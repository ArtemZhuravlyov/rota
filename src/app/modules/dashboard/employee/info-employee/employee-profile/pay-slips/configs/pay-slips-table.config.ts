import {TableConfig} from "@core/types/data-table";

export const paySlipsTableConfig: TableConfig = [
  {
    columnName: 'PAY_DATE',
    columnType: 'text',
    hidden: false,
    filedName: 'name'
  },
  {
    columnName: 'PAY_PERIOD',
    columnType: 'text',
    hidden: false,
    filedName: 'positionCount',
  },
  {
    columnName: 'GROSS_PAY',
    columnType: 'text',
    hidden: false,
    filedName: 'name'
  },
  {
    columnName: 'PENSION',
    columnType: 'text',
    hidden: false,
    filedName: 'positionCount',
  },
  {
    columnName: 'TAX',
    columnType: 'text',
    hidden: false,
    filedName: 'name'
  },
  {
    columnName: 'DEDUCTION',
    columnType: 'text',
    hidden: false,
    filedName: 'positionCount',
  },
  {
    columnName: 'NET_PAY',
    columnType: 'text',
    hidden: false,
    filedName: 'name'
  },
  {
    columnName: 'LINK',
    columnType: 'link',
  }
];

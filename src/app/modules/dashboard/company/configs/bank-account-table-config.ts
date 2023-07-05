import { TableConfig } from '@core/types/data-table';

export const bankAccountTableConfig: TableConfig = [
  {
    columnName: 'SELECT_ALL',
    columnType: 'checkbox',
  },
  {
    columnName: 'Bank',
    filedName: 'bankName',
    columnType: 'link',
    action: 'view',
    hidden: false,
  },
  {
    columnName: 'Sort Code',
    columnType: 'text',
    filedName: 'sortCode',
    hidden: false,
  },
  {
    columnName: 'Account Number',
    columnType: 'text',
    filedName: 'accountNumber',
    hidden: false,
  },
  {
    columnName: 'SWIFT',
    columnType: 'text',
    filedName: 'swiftCode',
    hidden: false,
  },
  {
    columnName: 'IBAN',
    columnType: 'text',
    filedName: 'iban',
    hidden: false,
  },
  {
    columnName: 'ACTIONS',
    columnType: 'actions'
  }
];

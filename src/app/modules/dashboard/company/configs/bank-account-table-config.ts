import { TableConfig } from '@core/types/data-table';

export const bankAccountTableConfig: TableConfig = [
  {
    columnName: 'EMPTY',
    columnType: 'checkbox',
  },
  {
    columnName: 'BANK',
    filedName: 'bankName',
    columnType: 'link',
    action: 'view',
    hidden: false,
  },
  {
    columnName: 'SORT_CODE',
    columnType: 'text',
    filedName: 'sortCode',
    hidden: false,
  },
  {
    columnName: 'ACCOUNT_NUMBER',
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
    columnType: 'actions',
  },
];

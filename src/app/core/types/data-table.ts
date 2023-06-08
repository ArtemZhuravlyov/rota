export type TableConfig = ColumnConfig[];

interface ColumnConfig {
  columnName: string;
  columnType: typeof ColumnType[keyof typeof ColumnType];
  hidden?: boolean;
  filedName?: string;
}

export const ColumnType = {
  TEXT: 'text',
  ACTIONS: 'actions',
  NUMERIC: 'numeric',
  LINK: 'link',
  INPUT: 'input',
  BOOLEAN: 'boolean',
  CHECKBOX: 'checkbox',
  COUNTRY: 'country',
  DATE: 'date'
} as const;

export interface TableAction {
  action: typeof TableActionTypes[keyof typeof TableActionTypes];
  payload: any;
}

export const TableActionTypes = {
  VIEW: 'view',
  EDIT: 'edit',
  DELETE: 'delete'
} as const;


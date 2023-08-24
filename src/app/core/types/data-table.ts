export type TableConfig = ColumnConfig[];

export interface ColumnConfig {
  columnName: string;
  columnType: (typeof ColumnType)[keyof typeof ColumnType];
  hidden?: boolean;
  filedName?: string;
  action?: (typeof TableActionTypes)[keyof typeof TableActionTypes];
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
  DATE: 'date',
  CUSTOM: 'custom',
  DESCRIPTIONS: 'descriptions',
} as const;

export interface TableAction {
  action: (typeof TableActionTypes)[keyof typeof TableActionTypes];
  payload: any;
}

export const TableActionTypes = {
  VIEW: 'view',
  EDIT: 'edit',
  DELETE: 'delete',
  ADD: 'add',
  VIEWDESCRIPTION: 'viewDescription',
  PRINT: 'print',
  EXPORT: 'export',
  IMPORT: 'import',
} as const;

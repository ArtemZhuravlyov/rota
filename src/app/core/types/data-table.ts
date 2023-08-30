import { TranslateKey } from '../../../assets/i18n/enums/translate-key.enum';

export type TableConfig = ColumnConfig[];

export interface ColumnConfig {
  columnName: keyof typeof TranslateKey;
  columnType: (typeof ColumnType)[keyof typeof ColumnType];
  hidden?: boolean;
  hiddable?: boolean;
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
  TOGGLE: 'toggle',
  FOLDER: 'folder',
  SHARE_WITH: 'share_with',
  SIZE: 'size',
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
  CHECK: 'check',
  ANALYSIS: 'analysis',
  DOWNLOAD: 'download',
  BULK_LOAD: 'bulk_load',
  FOLDER_VIEW: 'folder_view',
} as const;

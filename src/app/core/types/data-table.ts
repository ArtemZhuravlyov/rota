import { TranslateKey } from '../../../assets/i18n/enums/translate-key.enum';
import { Style } from '@core/types/style-model';
import { ActionButtonName } from '@shared/components/action-button/enums/action-button-name.enum';

export type TableConfig = ColumnConfig[];

export interface ColumnConfig {
  columnName: keyof typeof TranslateKey;
  columnType: (typeof ColumnType)[keyof typeof ColumnType];
  hidden?: boolean;
  hiddable?: boolean;
  filedName?: string;
  action?: (typeof TableActionTypes)[keyof typeof TableActionTypes];
}

export interface TableActionConfig {
  icon: string;
  type: (typeof TableActionTypes)[keyof typeof TableActionTypes];
  disabled: boolean;
  styleConfig: Style;
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
  action:
    | ActionButtonName
    | (typeof TableActionTypes)[keyof typeof TableActionTypes];
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
} as const;

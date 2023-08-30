import {
  TableActionConfig,
  TableActionTypes,
} from '@core/types/data-table';

export const foldersActionsListConfig: TableActionConfig[] = [
  {
    icon: 'download',
    type: TableActionTypes.DOWNLOAD,
    disabled: false,
    styleConfig: {
      width: '30px',
      height: '30px',
      background: '#FFFFFF',
      border: '1px solid #E4EDF4',
      color: '#91ACC2',
    },
  },
  {
    icon: 'edit',
    type: TableActionTypes.EDIT,
    disabled: false,
    styleConfig: {
      width: '30px',
      height: '30px',
      background: '#FFFFFF',
      border: '1px solid #E4EDF4',
      color: '#91ACC2',
    },
  },
  {
    icon: 'delete',
    type: TableActionTypes.DELETE,
    disabled: false,
    styleConfig: {
      width: '30px',
      height: '30px',
      background: '#FFFFFF',
      border: '1px solid #E4EDF4',
      color: '#FF0000',
    },
  },
];

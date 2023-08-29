import { TableActionTypes } from '@core/types/data-table';

export const foldersActionsListConfig = [
  {
    icon: 'download',
    type: TableActionTypes.DOWNLOAD,
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
    styleConfig: {
      width: '30px',
      height: '30px',
      background: '#FFFFFF',
      border: '1px solid #E4EDF4',
      color: '#FF0000',
    },
  },
];

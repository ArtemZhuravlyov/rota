import {
  TableActionConfig,
  TableActionTypes,
} from '@core/types/data-table';

export const documentsActionsListConfig: TableActionConfig[] = [
  {
    icon: 'eye',
    type: TableActionTypes.VIEW,
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

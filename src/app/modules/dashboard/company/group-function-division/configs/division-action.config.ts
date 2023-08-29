import {
  TableActionConfig,
  TableActionTypes,
} from '@core/types/data-table';

export const divisionActionConfig: TableActionConfig[] = [
  {
    icon: 'eye',
    disabled: false,
    type: TableActionTypes.VIEW,
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
    disabled: false,
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

import {TableActionTypes} from "@core/types/data-table";

export const divisionActionConfig = [
  { icon: 'eye', type: TableActionTypes.VIEW, styleConfig: {
      'width': '30px',
      'height': '30px',
      'background': '#FFFFFF',
      'border': '1px solid #E4EDF4',
      'color': '#91ACC2'
    } },
  { icon: 'delete', type: TableActionTypes.DELETE, styleConfig: {
      'width': '30px',
      'height': '30px',
      'background': '#FFFFFF',
      'border': '1px solid #E4EDF4',
      'color': '#FF0000'} },
];

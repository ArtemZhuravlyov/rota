import { ActionButtonName } from '@shared/components/action-button/enums/action-button-name.enum';
import { ActionButton } from '@shared/components/action-button/types/action-button.type';

export const divisionActionConfig: ActionButton[] = [
  { type: ActionButtonName.VIEW_DETAILS, disabled: false },
  { type: ActionButtonName.DELETE, disabled: false },
];

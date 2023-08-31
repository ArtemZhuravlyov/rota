import { ActionButtonName } from '@shared/components/action-button/enums/action-button-name.enum';

export type ActionButton = {
  type: ActionButtonName;
  disabled: boolean;
};

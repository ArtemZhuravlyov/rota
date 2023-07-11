import { FormField } from "@core/types/form-builder.model";
import { ComponentTypeEnum } from "@core/enums/component-type.enum";

export const departmentFormConfig: FormField[] = [
  {
    key: 'name',
    inputType: 'text',
    componentType: ComponentTypeEnum.TEXTBOX,
    label: 'NAME'
  },
  {
    key: 'managerId',
    inputType: 'text',
    componentType: ComponentTypeEnum.DROPDOWN,
    label: 'Head of Department'
  },
  {
    key: 'numberOfJobRoles',
    inputType: 'text',
    componentType: ComponentTypeEnum.DROPDOWN,
    label: '# of Job Roles',
    disabled: true,
  },
  {
    key: 'divisionId',
    inputType: 'text',
    componentType: ComponentTypeEnum.DROPDOWN,
    label: 'Division',
  },
];

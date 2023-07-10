import { FormField } from "@core/types/form-builder.model";
import { ComponentTypeEnum } from "@core/enums/component-type.enum";

export const groupFunctionDivisionFormConfig: FormField[] = [
  {
    key: 'name',
    inputType: 'text',
    componentType: ComponentTypeEnum.TEXTBOX,
    label: 'NAME',
    placeholder: 'ENTER'
  },
  {
    key: 'managerId',
    inputType: 'text',
    componentType: ComponentTypeEnum.DROPDOWN,
    label: 'Head of Division'
  },
  {
    key: 'numberOfDepartment',
    inputType: 'text',
    componentType: ComponentTypeEnum.TEXTBOX,
    label: '# of Department',
    disabled: true
  },
];

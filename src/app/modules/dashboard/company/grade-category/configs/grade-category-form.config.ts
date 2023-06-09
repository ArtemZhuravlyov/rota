import { FormField } from "@core/types/form-builder.model";
import { ComponentTypeEnum } from "@core/enums/component-type.enum";

export const gradeCategoryFormConfig: FormField[] = [
  {
    key: 'name',
    inputType: 'text',
    componentType: ComponentTypeEnum.TEXTBOX,
    label: 'NAME',
    placeholder: 'ENTER',
  },
  {
    key: 'positionCount',
    inputType: 'text',
    componentType: ComponentTypeEnum.TEXTBOX,
    label: 'NUMBER_OF_JOB_ROLE',
    placeholder: '100',
  },
]

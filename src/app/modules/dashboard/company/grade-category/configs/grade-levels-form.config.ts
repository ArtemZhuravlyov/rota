import { FormField } from "@core/types/form-builder.model";
import { ComponentTypeEnum } from "@core/enums/component-type.enum";

export const gradeLevelsFormConfig: FormField[] = [
  {
    key: 'name',
    inputType: 'text',
    componentType: ComponentTypeEnum.TEXTBOX,
    label: '',
    placeholder: 'ENTER',
  },
  {
    key: 'code',
    inputType: 'text',
    componentType: ComponentTypeEnum.TEXTBOX,
    label: '',
    placeholder: 'ENTER',
  },
  {
    key: 'displayOrder',
    inputType: 'text',
    componentType: ComponentTypeEnum.TEXTBOX,
    label: '',
    placeholder: 'ENTER',
  },
]

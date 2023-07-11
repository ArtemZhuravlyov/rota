import {FormField} from "@core/types/form-builder.model";
import {ComponentTypeEnum} from "@core/enums/component-type.enum";

export const documentsFormConfig: FormField[] = [
  {
    key: 'name',
    componentType: ComponentTypeEnum.TEXTBOX,
    label: '',
    placeholder: 'ENTER',
  },
  {
    key: 'document',
    inputType: 'text',
    componentType: ComponentTypeEnum.TEXTBOX,
    label: '',
    placeholder: 'SELECT_FILE',
    button: 'SELECT_FILE',
  },
]

import {FormField} from "@core/types/form-builder.model";
import {ComponentTypeEnum} from "@core/enums/component-type.enum";

export const qualificationsFormConfig: FormField[] = [
  {
    key: 'certificateType',
    componentType: ComponentTypeEnum.DROPDOWN,
    label: '',
    placeholder: 'SELECT',
  },
  {
    key: 'titleOfCertificate',
    inputType: 'text',
    componentType: ComponentTypeEnum.TEXTBOX,
    label: '',
    placeholder: 'ENTER',
  },
  {
    key: 'issueDate',
    inputType: 'text',
    componentType: ComponentTypeEnum.DATEPICKER,
    label: '',
    placeholder: 'SELECT',
  },
  {
    key: 'renewalDate',
    inputType: 'text',
    componentType: ComponentTypeEnum.DATEPICKER,
    label: '',
    placeholder: 'SELECT',
  },
];

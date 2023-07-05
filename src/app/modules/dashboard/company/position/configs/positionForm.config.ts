import { FormField } from "@core/types/form-builder.model";
import { ComponentTypeEnum } from "@core/enums/component-type.enum";

export const positionFormConfig: FormField[] = [
  {
    key: 'name',
    inputType: 'text',
    componentType: ComponentTypeEnum.TEXTBOX,
    label: 'NAME'
  },
  {
    key: 'jobFamilyId',
    inputType: 'text',
    componentType: ComponentTypeEnum.DROPDOWN,
    label: 'Family Job'
  },
  {
    key: 'jobProfileId',
    inputType: 'text',
    componentType: ComponentTypeEnum.DROPDOWN,
    label: 'Job Profile'
  },
  {
    key: 'directReportingLineId',
    inputType: 'text',
    componentType: ComponentTypeEnum.DROPDOWN,
    label: 'Direct Reporting Line'
  },
  {
    key: 'functionalReportingLineId',
    inputType: 'text',
    componentType: ComponentTypeEnum.DROPDOWN,
    label: 'Functional Reporting Line'
  },
];

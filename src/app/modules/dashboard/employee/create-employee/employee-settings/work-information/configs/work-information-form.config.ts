import {FormField} from "@core/types/form-builder.model";
import {Validators} from "@angular/forms";
import {ComponentTypeEnum} from "@core/enums/component-type.enum";

export const employeeInformationFormFields: FormField[] = [
  {
    key: 'employeeNumber',
    label: 'EMPLOYEE_NUMBER',
    componentType: ComponentTypeEnum.TEXTBOX,
    inputType: 'text',
    validators: [Validators.required],
    placeholder: 'ENTER',
    maxLength: 500,
  },
  {
    key: 'division',
    label: 'DIVISION',
    componentType: ComponentTypeEnum.DROPDOWN,
    validators: [Validators.required],
    placeholder: 'SELECT',
    maxLength: 500,
  },
  {
    key: 'position',
    label: 'POSITION',
    componentType: ComponentTypeEnum.DROPDOWN,
    validators: [Validators.required],
    placeholder: 'SELECT',
    maxLength: 500,
  },
  {
    key: 'employmentType',
    label: 'EMPLOYMENT_TYPE',
    componentType: ComponentTypeEnum.DROPDOWN,
    validators: [Validators.required],
    placeholder: 'SELECT',
    maxLength: 500,
  },
  {
    key: 'department',
    label: 'DEPARTMENT',
    componentType: ComponentTypeEnum.DROPDOWN,
    validators: [Validators.required],
    placeholder: 'SELECT',
    maxLength: 500,
  },
  {
    key: 'manager',
    label: 'MANAGER',
    componentType: ComponentTypeEnum.DROPDOWN,
    validators: [Validators.required],
    placeholder: 'SELECT',
    maxLength: 500,
  },
];

export const employeeSalaryInfoFormFields: FormField[] = [
  {
    key: 'gradeCategory',
    label: 'GRADE_CATEGORY',
    componentType: ComponentTypeEnum.DROPDOWN,
    validators: [Validators.required],
    placeholder: 'SELECT',
    maxLength: 500,
  },
  {
    key: 'currency',
    label: 'CURRENCY',
    componentType: ComponentTypeEnum.DROPDOWN,
    validators: [Validators.required],
    placeholder: 'SELECT',
    maxLength: 500,
  },
  {
    key: 'annualHoliday',
    label: 'ANNUAL_HOLIDAY',
    componentType: ComponentTypeEnum.TEXTBOX,
    inputType: 'text',
    validators: [Validators.required],
    placeholder: 'ENTER',
    maxLength: 500,
  },
  {
    key: 'gradeLevel',
    label: 'GRADE_LEVEL',
    componentType: ComponentTypeEnum.DROPDOWN,
    inputType: 'text',
    validators: [Validators.required],
    placeholder: 'SELECT',
    maxLength: 500,
  },
  {
    key: 'salary',
    label: 'ANNUAL_GROSS_SALARY',
    componentType: ComponentTypeEnum.TEXTBOX,
    inputType: 'text',
    validators: [Validators.required],
    placeholder: 'ENTER',
    maxLength: 500,
    data: 0
  },
];

export const employmentDetailsFormFields: FormField[] = [
  {
    key: 'country',
    label: 'COUNTRY_OF_EMPLOYMENT',
    componentType: ComponentTypeEnum.DROPDOWN,
    validators: [Validators.required],
    placeholder: 'SELECT',
    maxLength: 500,
  },
  {
    key: 'language',
    label: 'LANGUAGE',
    componentType: ComponentTypeEnum.DROPDOWN,
    validators: [Validators.required],
    placeholder: 'SELECT',
    maxLength: 500,
  },
  {
    key: 'location',
    label: 'LOCATION',
    componentType: ComponentTypeEnum.DROPDOWN,
    validators: [Validators.required],
    placeholder: 'SELECT',
    maxLength: 500,
  },
  {
    key: 'workPermit',
    label: 'WORK_PERMIT',
    componentType: ComponentTypeEnum.TEXTBOX,
    inputType: 'text',
    validators: [Validators.required],
    placeholder: 'ENTER',
    maxLength: 500,
  },
];

export const employmentPeriodFormFields: FormField[] = [
  {
    key: 'startDate',
    label: 'START_DATE',
    componentType: ComponentTypeEnum.DATEPICKER,
    inputType: 'text',
    validators: [Validators.required],
    placeholder: 'SELECT',
    maxLength: 500,
  },
  {
    key: 'endDate',
    label: 'END_DATE',
    componentType: ComponentTypeEnum.DATEPICKER,
    inputType: 'text',
    validators: [Validators.required],
    placeholder: 'SELECT',
    maxLength: 500,
  },
  {
    key: 'dues',
    label: 'UNION_DUES',
    componentType: ComponentTypeEnum.DROPDOWN,
    validators: [Validators.required],
    placeholder: 'SELECT',
    maxLength: 500,
  },
];

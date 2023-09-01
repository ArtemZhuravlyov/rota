import { LanguageObject } from '../types/language-object.type';

const en: LanguageObject = {
  LOGIN: 'Login',
  DONT_HAVE_AN_ACCOUNT: "Don't have an account?",
  REGISTER_NOW: 'Register now',
  EMAIL: 'Email',
  ENTER_EMAIL: 'Enter email',
  PASSWORD: 'Password',
  ENTER_PASSWORD: 'Enter password',
  FORGOT_PASSWORD: 'Forgot password',
  FORGOT_PASSWORD_LINK: 'Forgot password?',
  SIGN_IN: 'Sign in',
  COPYRIGHT: 'Copyright.',
  PRIVACY_POLICY: 'Privacy policy',
  TERMS_OF_SERVICE: 'Terms of Service',
  PLEASE_ENTER_YOUR_EMAIL:
    'Please, enter your registered email and we will send you the reset link',
  GET_RESET_LINK: 'Get reset link',
  RESET_LINK_SENT: 'Reset link sent',
  RESET_LINK_INFO:
    'We just sent link to the email that you entered. Please, check your email and follow instructions.',
  OK: 'OK',
  REGISTER: 'Register',
  ALREADY_HAVE_AN_ACCOUNT: 'Already have an account?',
  FIRST_NAME: 'First Name',
  MIDDLE_NAME: 'Middle Name',
  DATE_OF_BIRTH: 'Date of Birth',
  GENDER: 'Gender',
  ENTER_FIRST_NAME: 'Enter first name',
  LAST_NAME: 'Last Name',
  ENTER_LAST_NAME: 'Enter last name',
  VERIFY_PASSWORD: 'Verify password',
  ENTER_VERIFY_PASSWORD: 'Repeat password',
  CONTINUE: 'Continue',
  COMPANY: 'Company',
  COMPANY_LIST: 'Company List',
  COMPANY_CREATE_INFO:
    'Here we are displaying comment that been added to the table earlier.',
  COMPANY_NAME: 'Company name',
  ENTER: 'Enter',
  ADDRESS: 'Address',
  COUNTRY: 'Country',
  SELECT: 'Select',
  SELECT_DATE: 'Select date',
  INDUSTRY: 'Industry',
  BACK: 'Back',
  EMPLOYEE: 'Employee',
  DOCUMENT: 'Document',
  USER_ACCOUNT: 'User Account',
  BANK_ACCOUNT: 'Bank Account',
  GROUP: 'Group',
  DEPARTMENT: 'Department',
  GRADE_CATEGORY: 'Grade Category',
  POSITION: 'Position',
  BENEFIT: 'Benefit',
  WORK_SCHEDULE: 'Work Schedule',
  PAY_STRUCTURE: 'Pay Structure',
  GROUP_FUNCTION_DIVISION: 'Group / Function / Division',
  EMPLOYEES: 'Employees',
  DOCUMENTS: 'Documents',
  EMPLOYMENT_TYPE: 'Employment Type',
  EMPLOYEE_RECORD: 'Employee Record',
  ORGANIZATION_CHART: 'Organization Chart',
  IMPORT_VERIFICATION: 'Import Verification',
  FOLDER_MANAGEMENT: 'Folder Management',
  DOCUMENT_MANAGEMENT: 'Document Management',
  EMPLOYEE_DOCUMENT: 'Employee Document',
  USER: 'User',
  ROLE: 'Role',
  FIELD_REQUIRED: 'Field is required',
  SYMBOL_ERROR:
    'Can’t use the “{{symbol}}” symbol in this field. Please, fix this error.',
  REGISTER_PASSWORD_ERROR:
    'This password is too weak. Please, add such symbols like #,$,& or other.',
  REPEAT_PASSWORD_ERROR: 'Passwords are not matching',
  EMAIL_ERROR:
    'It seems you forgot to enums the “@” symbol. Please, fix this error.',
  NEW_COMPANY: 'New Company',
  CREATE_NEW: 'Create New',
  NAME: 'Name',
  PHONE: 'Phone',
  LOCATION: 'Location',
  SAVE: 'Save',
  CANCEL: 'Cancel',
  ACTIONS: 'Actions',
  SEARCH: 'Search',
  NOT_FOUND: 'Not found',
  ADD_COMPANY_INFO: 'Add Company Information',
  LOGIN_PASSWORD_ERROR: 'Incorrect password',
  REGISTER_PASSWORD_ERROR_SHORT:
    'This password is too weak. Try such symbols as #,$,& or other.',
  APPLY: 'Apply',
  CLEAR: 'Clear',
  USER_MANAGEMENT: 'User Management',
  IMPORT: 'Import',
  IMPORT_EMPLOYEES: 'Import Employees',
  UPLOAD_FILE: 'Upload File',
  MAP_FIELDS: 'Map Fields',
  PREVIEW_IMPORT: 'Preview & Import',
  DOWNLOAD_TEMPLATE: 'Download Template',
  TEMPLATE_SPREADSHEET:
    'This template spreadsheet has been configured to help you fill out information easily and works best with excel.',
  UPLOAD_SPREADSHEET: 'Upload Your Completed Spreadsheet',
  TEMPLATE_EXCEL_FILE: 'Template.xlsx',
  DOWNLOAD: 'Download',
  SELECT_FILE: 'Select File',
  UPLOAD: 'Upload',
  SELECT_FILE_ERROR:
    "Can't upload such file enums. Please, upload pdf, doc, txt, etc.",
  MAX_SIZE: 'Max file size: 2mb, supported file enums (xlsx)',
  NOTE: 'NOTE!',
  NEXT: 'Next',
  IMPORT_USER: 'Import User',
  DEFAULT_FIELDS_MAPPING: 'Default Fields Mapping',
  MAPPING_UPLOADING:
    'Mapping your uploaded file headers with RotaSheet fields.',
  PREVIEW: 'Preview',
  MAPPING_ERROR:
    'There are mapping errors in the file. Please, resolve the issues before you continue.',
  ERRORS: 'Errors',
  FIX_NOW: 'Fix Now',
  RECORDS_NEED_TO_CREATED: 'Records need to be created',
  RECORDS_ALL_IMPORTED:
    'These records all be imported into the system.',
  IMPORT_RECORDS: 'Import Records',
  PROCESSING: 'Processing',
  SINGLE_TEXT: 'Single — line — text',
  NUMBER: 'Number',
  DATE: 'Date',
  PAYROLL: 'Payroll',
  LEAVE: 'Leave',
  PAYMENT: 'Payment',
  RECRUITMENTS: 'Recruitments',
  LEARNINGS: 'Learnings',
  TIMESHEET: 'Timesheet',
  SCHEDULING: 'Scheduling',
  ENGAGEMENT: 'Engagement',
  REPORTS_ANALYTICS: 'Report & Analytics',
  DIRECTORY: 'Directory',
  ONBOARDING: 'Onboarding',
  OFFBOARDING: 'Offboarding',
  MY_SETTINGS: 'My Settings',
  BENEFITS: 'Benefits',
  EMAIL_ALERTS: 'Email Alerts',
  WORKFLOW: 'Workflow',
  ACCESS_LEVELS: 'Access Levels',
  HOLIDAYS: 'Holidays',
  PENSION: 'Pension',
  TAX: 'Tax',
  HIRING: 'Hiring',
  PERFORMANCE: 'Performance',
  PAYSLIP: 'Payslip',
  MY_INFORMATION: 'My information',
  ACCOUNT_SETTINGS: 'Account Settings',
  LOG_OUT: 'Log Out',
  PROCESS_PAYROLL: 'Process Payroll',
  TIME_TRACKING: 'Time Tracking',
  LOAN_MANAGEMENT: 'Loan Management',
  EMPLOYEES_LIST: 'Employees List',
  RECORDS_HAS_BEEN_SUCCESSFULLY_IMPORTED:
    'Records has been successfully imported',
  VIEW_EMPLOYEE_RECORDS: 'View Employee Records',
  ADD_DIVISION: 'Add Division',
  ADD_INFORMATION: 'Add Information',
  NUMBER_OF_JOB_ROLE: '# of Job Role',
  SETTINGS: 'Settings',
  LOCALE: 'Locale',
  DEFAULT_LOCALE: 'Default Locale',
  PREFERRED_LOCALE: 'Preferred Locale',
  DEFAULT_DISPLAY_LANGUAGE: 'Default Display Language',
  PREFERRED_DISPLAY_LANGUAGE: 'Preferred Display Language',
  TIMEZONE: 'Timezone',
  DEFAULT_TIMEZONE: 'Default Timezone',
  DEFAULT_HOUR_CLOCK: 'Default Hour Clock',
  PREFERRED_HOUR_CLOCK: 'Preferred Hour Clock',
  COMPANY_INFORMATION: 'Company Information',
  FINANCIAL_YEAR: 'Financial Year',
  LEAVE_YEAR: 'Leave Year',
  TAX_PLAYER_IDENTIFICATION_NUMBER:
    'Tax Player Identification Number',
  VAT: 'VAT',
  PAYROLL_ACCOUNTING: 'Payroll Accounting',
  LEAVE_MANAGEMENT: 'Leave Management',
  TRUSTED_DEVICES: 'Trusted Devices',
  DEFAULT_CURRENCY: 'Default Currency',
  PREFERRED_CURRENCY: 'Preferred Currency',
  COMPANY_LOGO: 'Company Logo',
  COMPANY_LOGO_SUPPORTED_FILES:
    'Max file size: 25mb, supported file enums (SVG, PNG, JPEG)',
  TAX_PAYER_IDENTIFICATION: 'Tax Payer Identification Number',
  TAX_PAYER_IDENTIFICATION_DESCRIPTION:
    'A Taxpayer Identification Number (TIN) is an identification number used by the Internal Revenue Service (IRS) in the administration of tax laws. It is issued either by the Social Security Administration (SSA) or by the IRS. A Social Security number (SSN) is issued by the SSA whereas all other TINs are issued by the IRS.',
  VAT_DESCRIPTION:
    'Value-Added Tax (VAT) is a tax, which is payable on sales of goods or services within the territory of the Member States of the EU. The tax, in all cases, is ultimately payable by the final consumer of the good or service.',
  DEFAULT_EMAIL: 'Default email',
  ALERT_WHEN: 'Alert when there is a day for 2 in the flow',
  HOW_TO_NOTIFY: 'How to Notify',
  NOTIFY_LABEL: 'Notify the original?',
  NOTIFY_ORIGINAL: 'Notify the original',
  NOTIFICATION_FREQUENCY: 'Notification Frequency',
  PREFERENCES: 'Preferences',
  PREFERENCE_SHARED_BACKGROUND:
    'Display a message when a shared background report Completes',
  PREFERENCE_BACKGROUND_REPORT:
    'Display a message when a background report Completes',
  PREFERENCE_BACKGROUND_SERVICE:
    'Send an email when a background Service Completes',
  DISABLE_PAYSLIP: 'Disable Payslip in Self Service',
  DISABLE_PAYSLIP_VIEWING: 'Disable Payslip Viewing in Self Service',
  ENABLE_PRINT_MULTIPLE:
    'Enable Print Multiple Payslips for Administrators',
  ENABLE_PAYSLIP: 'Enable Payslip Information',
  ENABLE_COMPANY_INFO: 'Enable Company Information',
  ENABLE_CURRENT_TOTAL: 'Enable Current and YTD Total',
  ENABLE_REGURAL_EARNINGS: 'Enable Regular Earnings',
  ENABLE_STATUTORY_TAXES: 'Enable Statutory Taxes',
  PAYMENTS: 'Payments',
  ENABLE_EMPLOYEE_BENEFITS: 'Enable Employee Paid Benefits',
  ENABLE_TAXABLE_WAGES: 'Enable Taxable Wages',
  ENABLE_WITHHOLDING: 'Enable Withholding',
  ENABLE_TIME_OFF: 'Enable Time Off',
  TIME_IN_OUT: 'Time In-Out',
  DEFAULT_TIME_IN: 'Default Time In',
  DEFAULT_TIME_OUT: 'Default Time Out',
  AUTOMATIC_TIME_OUT: 'Automatic Time Out',
  ENABLE_AUTOMATIC_TIME:
    'Enable Automatic Time Out If Employee Does not Time Out',
  TIME_WRITING: 'Time Writing',
  ENABLE_ONLINE_TIME_WRITING: 'Enable Online Time Writing',
  ENABLE_MOBILE_TIME_WRITING: 'Enable Mobile Time Writing',
  ACCOUNTING: 'Accounting',
  ENABLE_INTER_COMPANY: 'Enable Inter-company Accounting',
  PERIOD_AS_BUDGET_DATE:
    'Use Period Schedule Payment Date as Budget Date',
  JOURNAL: 'Journal',
  USE_PAYMENT_DATE:
    'Use Payment Payment Date as Accounting Date for Off-Cycle Payments',
  ENABLE_JOURNAL_DATE: 'Enable Journal Details',
  ENABLE_PRORATION: 'Enable Proration for Leave of Absence',
  HIDE_LEAVE_BALANCE: 'Hide Leave Balance from Work Self Service',
  VISIBILITY_AND_LEAVE: 'Visibility & Leave',
  BALANCE_VISIBILITY: 'Balance Visibility',
  LEAVE_YEAR_START: 'Leave Year Start',
  LEAVE_YEAR_ENDS: 'Leave Year Ends',
  OTHER: 'Other',
  ENABLE_ON_PAYSLIP: 'Enable on Payslip',
  ENABLE_CARRYOVER: 'Enable Carryover',
  ENABLE_JOURNAL_DETAILS: 'Enable Journal Details',
  MANAGER_CAN_APPLY: 'Manager can apply for Workers Leave',
  NOTIFICATIONS: 'Notifications',
  READ_FULL: 'read full',
  CURRENT_SALARY: 'Current Salary',
  MANAGER: 'Manager',
  PERSONAL_DETAILS: 'Personal Details',
  CONTACT_INFORMATION: 'Contact Information',
  RESIDENTIAL_ADDRESS: 'Residential Address',
  EMERGENCY_CONTACT: 'Emergency Contact',
  HOME_ADDRESS: 'Home Address',
  STATE: 'State',
  POST_CODE: 'Post Code',
  PHONE_NUMBER: 'Phone Number',
  SELECT_FORMAT: 'Select format',
  NEXT_OF_KIN: 'Next of kin',
  RELATIONSHIP: 'Relationship',
  PAYMENT_INFORMATION: 'Payment Information',
  BANK: 'Bank',
  ACCOUNT_NAME: 'Account Name',
  CODE: 'Code',
  SWIFT_CODE: 'Swift Code',
  ACCOUNT_NUMBER: 'Account Number',
  SORT_CODE: 'Sort Code',
  PAYMENT_METHOD: 'Payment Method',
  APPLY_DOUBLE_TAXATION_TO_COUNTRY:
    'Apply Double Taxation to Country',
  RSA_NUMBER: 'RSA Number',
  PENSION_FUND_ADMINISTRATOR: 'Pension Fund Administrator',
  PENSION_START_DATE: 'Pension Start Date',
  VOLUNTARY_CONTRIBUTION: 'Voluntary Contribution',
  WORK_INFORMATION: 'Work Information',
  EMPLOYEE_NUMBER: 'Employee Number',
  DIVISION: 'Division',
  CURRENCY: 'Currency',
  ANNUAL_HOLIDAY: 'Annual Holiday',
  GRADE_LEVEL: 'Grade Level',
  ANNUAL_GROSS_SALARY: 'Annual Gross Salary',
  COUNTRY_OF_EMPLOYMENT: 'Country of Employment',
  LANGUAGE: 'Language',
  WORK_PERMIT: 'Work Permit #',
  START_DATE: 'Start Date',
  END_DATE: 'End Date',
  UNION_DUES: 'Union Dues',
  MARITAL_STATUS: 'Marital Status',
  NUMBER_OF_CHILDREN: 'Number of Children',
  PLACE_OF_BIRTH: 'Place of Birth',
  NATIONALITY: 'Nationality',
  COUNTRY_OF_BIRTH: 'Country of Birth',
  NATIONAL_ID: 'National ID',
  PASSPORT_NUMBER: 'Passport Number',
  PAY_DATE: 'Pay Date',
  PAY_PERIOD: 'Pay Period',
  GROSS_PAY: 'Gross Pay',
  DEDUCTION: 'Deduction',
  NET_PAY: 'Net Pay',
  LINK: 'Link',
  CERTIFICATE_TYPE: 'Certificate Type',
  TITLE_OF_CERTIFICATE: 'Title of Certificate',
  ISSUE_DATE: 'Issue Date',
  RENEWAL_DATE: 'Renewal Date',
  SIZE: 'Size',
  ADD: 'Add',
  ADD_POSITION: 'Add Position',
  EDIT_EMPLOYEE: 'Edit Employee',
  ORGANOGRAM: 'Organogram',
  PREFERRED_TIMEZONE: 'Preferred Timezone',
  PAY_DAY_OPTION: 'Pay Day Option',
  WINDOWS: 'Windows',
  MAC_OS: 'Mac Os',
  LINUX: 'Linux',
  WHAT_IS_NATIONAL_ID: 'What is National ID?',
  NATIONAL_IDENTIFICATION_NUMBER_DESCRIPTION:
    'A national identification number, national identity number, or national insurance number or JMBG/EMBG is used by the governments of many countries as a means of tracking their citizens, permanent residents, and temporary residents for the purposes of work, taxation, government benefits, health care, and other governmentally-related functions.',
  PASSPORT_NUMBER_DESCRIPTION:
    'Where can I find the passport number? Search for: Every U.S. passport book has a unique, 9-digit identifying number, called a passport book number. It can be found in the upper right-hand corner of the second page of the passport.',
  WHAT_IS_SWIFT_CODE: 'What is swift code?',
  SWIFT_CODE_DESCRIPTION:
    'A SWIFT code — sometimes also called a BIC number — is a standard format for Business Identifier Codes (BIC).',
  RSA: 'RSA',
  RSA_DESCRIPTION:
    'What are the income tax implications of an RSA? Under normal federal income tax rules, you are not taxed at the time of a restricted stock award, assuming you have made no election under Section 83(b). Instead, you are taxed at vesting, when the restrictions lapse.',
  ACCOUNT_NUMBER_DESCRIPTION:
    'The checking account number is located at the bottom of the paper check.',
  WHAT_IS_SORT_CODE: 'What is Sort Code?',
  SORT_CODE_DESCRIPTION:
    'A sort code is a 6 digit number that identifies your bank.',
  WHAT_IS_IBAN: 'What is IBAN?',
  IBAN: 'IBAN',
  SWIFT: 'SWIFT',
  IBAN_DESCRIPTION:
    'An International Bank Account Number – or IBAN – is used worldwide to identify individual accounts. IBANs make it easier to process international payments. You can find your IBAN in the Internet Bank and on your account statement.',
  INFO_EMPLOYEE: 'Info Employee',
  DOUBLE_TAXATION_CODE: 'Double Taxation Code',
  DOUBLE_TAXATION_DESCRIPTION:
    'Double taxation refers to income taxes paid twice on the same income source. It occurs when income is taxed at both the corporate and personal level',
  FEW_WORDS: 'A few words here.',
  WORK_DATE_FORMAT: 'Work Date Format',
  PRINT: 'Print',
  GRADE_INFORMATION: 'Grade Information',
  COMPANY_BANK_ACCOUNT: 'Company Bank Account',
  COMPANY_ACCOUNT_DETAILS: 'Company Bank Details',
  EXPORT: 'Export',
  CLOSE: 'Close',
  TEST: 'Test',
  VIEW_ALL: 'View All',
  EMPTY: '',
  ORGANISATION_CHART: 'Organisation Chart',
  EMPLOYEES_TYPE: 'Employees Type',
  DESCRIPTION: 'Description',
  ANALYSIS: 'Analysis',
  DOCUMENT_LIST: 'Document list',
  FOLDER_LIST: 'Folder list',
  FOLDER_DETAILS: 'Folder Details',
  NEW_DOCUMENT: 'New Document',
  CREATE_NEW_FOLDER: 'Create New Folder',
  CREATION_DATE: 'Creation Date',
  UPLOAD_DOCUMENT: 'Upload Document',
  SHARED: 'Shared',
  SHARE: 'Share',
  SHARE_WITH: 'Share with',
  CHOOSE_FILES: 'Choose files',
  DOCUMENTS_SUPPORTED_FILES:
    'Max file size: 25mb, supported file type (xls, doc, pdf)',
  SHARED_DESC: 'Some short description',
  EMPLOYEES_RECORD: 'Employees Record',
  ROW_ID: 'Row ID',
  NUMBER_OF_EMPLOYEE: '# of Employee',
  NUMBER_OF_DEPARTMENT: '# of Department',
  HIRE_DATE: 'Hire Date',
  JOB_DESCRIPTION: 'Job Description',
  DIVISION_HEAD: 'Division Head',
  HEAD_OF_DEPARTMENT: 'Head of Department',
  DISPLAY_ORDER: 'Display Order',
  REMAINING_TIME_HEADER: 'Remaining Time',
  REMAINING_TIME_DESCRIPTION:
    'After the time is up your screen will be locked.',
  BULK_LOAD: 'Bulk Load',
  SEARCH_USER: 'Search users',
  EDIT_FOLDER: 'Edit Folder',
  NEW_FOLDER: 'New Folder',
};

export const allLanguages: {
  [K in 'en']: LanguageObject;
} = { en };

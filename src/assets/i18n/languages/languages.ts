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
  NEW_BENEFIT: 'New Benefit',
  BENEFIT_SETUP: 'Benefit Setup',
  ANALYTICS: 'Analytics',
  SHOW_IN_ACTIVE: 'Show In-Active',
  DARK_MODE: 'Dark Mode',
};

const uk: LanguageObject = {
  LOGIN: 'Увійти',
  DONT_HAVE_AN_ACCOUNT: 'Не маєте облікового запису?',
  REGISTER_NOW: 'Зареєструватися зараз',
  EMAIL: 'Електронна пошта',
  ENTER_EMAIL: 'Введіть електронну пошту',
  PASSWORD: 'Пароль',
  ENTER_PASSWORD: 'Введіть пароль',
  FORGOT_PASSWORD: 'Забули пароль',
  FORGOT_PASSWORD_LINK: 'Забули пароль?',
  SIGN_IN: 'Увійти',
  COPYRIGHT: 'Авторське право.',
  PRIVACY_POLICY: 'Політика конфіденційності',
  TERMS_OF_SERVICE: 'Умови надання послуг',
  PLEASE_ENTER_YOUR_EMAIL:
    'Будь ласка, введіть свою зареєстровану електронну пошту, і ми надішлемо вам посилання для скидання пароля',
  GET_RESET_LINK: 'Отримати посилання для скидання',
  RESET_LINK_SENT: 'Посилання для скидання пароля надіслано',
  RESET_LINK_INFO:
    'Ми щойно надіслали посилання на електронну пошту, яку ви вказали. Будь ласка, перевірте свою електронну пошту і дотримуйтеся інструкцій.',
  OK: 'OK',
  REGISTER: 'Зареєструватися',
  ALREADY_HAVE_AN_ACCOUNT: 'Вже маєте обліковий запис?',
  FIRST_NAME: "Ім'я",
  MIDDLE_NAME: 'По батькові',
  DATE_OF_BIRTH: 'Дата народження',
  GENDER: 'Стать',
  ENTER_FIRST_NAME: "Введіть ім'я",
  LAST_NAME: 'Прізвище',
  ENTER_LAST_NAME: 'Введіть прізвище',
  VERIFY_PASSWORD: 'Перевірити пароль',
  ENTER_VERIFY_PASSWORD: 'Повторіть пароль',
  CONTINUE: 'Продовжити',
  COMPANY: 'Компанія',
  COMPANY_LIST: 'Список компаній',
  COMPANY_CREATE_INFO:
    'Тут ми відображаємо коментар, який був доданий до таблиці раніше.',
  COMPANY_NAME: 'Назва компанії',
  ENTER: 'Ввести',
  ADDRESS: 'Адреса',
  COUNTRY: 'Країна',
  SELECT: 'Вибрати',
  SELECT_DATE: 'Виберіть дату',
  INDUSTRY: 'Галузь',
  BACK: 'Назад',
  EMPLOYEE: 'Співробітник',
  DOCUMENT: 'Документ',
  USER_ACCOUNT: 'Обліковий запис користувача',
  BANK_ACCOUNT: 'Банківський рахунок',
  GROUP: 'Група',
  DEPARTMENT: 'Відділ',
  GRADE_CATEGORY: 'Категорія оцінки',
  POSITION: 'Посада',
  BENEFIT: 'Пільга',
  WORK_SCHEDULE: 'Графік роботи',
  PAY_STRUCTURE: 'Структура оплати',
  GROUP_FUNCTION_DIVISION: 'Група / Функція / Підрозділ',
  EMPLOYEES: 'Співробітники',
  DOCUMENTS: 'Документи',
  EMPLOYMENT_TYPE: 'Тип зайнятості',
  EMPLOYEE_RECORD: 'Запис співробітника',
  ORGANIZATION_CHART: 'Організаційна структура',
  IMPORT_VERIFICATION: 'Перевірка імпорту',
  FOLDER_MANAGEMENT: 'Управління папками',
  DOCUMENT_MANAGEMENT: 'Управління документами',
  EMPLOYEE_DOCUMENT: 'Документи співробітника',
  USER: 'Користувач',
  ROLE: 'Роль',
  FIELD_REQUIRED: "Поле обов'язкове для заповнення",
  SYMBOL_ERROR:
    'Не можна використовувати символ “{{symbol}}“ в цьому полі. Будь ласка, виправте цю помилку.',
  REGISTER_PASSWORD_ERROR:
    'Цей пароль занадто слабкий. Будь ласка, додайте символи, такі як #, $, & та інші.',
  REPEAT_PASSWORD_ERROR: 'Паролі не співпадають',
  EMAIL_ERROR:
    'Схоже, ви забули вказати символ «@». Будь ласка, виправте цю помилку.',
  NEW_COMPANY: 'Нова компанія',
  CREATE_NEW: 'Створити новий',
  NAME: 'Назва',
  PHONE: 'Телефон',
  LOCATION: 'Місцезнаходження',
  SAVE: 'Зберегти',
  CANCEL: 'Скасувати',
  ACTIONS: 'Дії',
  SEARCH: 'Пошук',
  NOT_FOUND: 'Не знайдено',
  ADD_COMPANY_INFO: 'Додати інформацію про компанію',
  LOGIN_PASSWORD_ERROR: 'Неправильний пароль',
  REGISTER_PASSWORD_ERROR_SHORT:
    'Цей пароль занадто слабкий. Спробуйте використовувати символи, такі як #,$,& або інші.',
  APPLY: 'Застосувати',
  CLEAR: 'Очистити',
  USER_MANAGEMENT: 'Управління користувачами',
  IMPORT: 'Імпорт',
  IMPORT_EMPLOYEES: 'Імпорт співробітників',
  UPLOAD_FILE: 'Завантажити файл',
  MAP_FIELDS: 'Відобразити поля',
  PREVIEW_IMPORT: 'Переглянути та імпортувати',
  DOWNLOAD_TEMPLATE: 'Завантажити шаблон',
  TEMPLATE_SPREADSHEET:
    'Цей шаблон таблиці налаштований для полегшення заповнення інформації і найкраще працює з Excel.',
  UPLOAD_SPREADSHEET: 'Завантажити вашу заповнену таблицю',
  TEMPLATE_EXCEL_FILE: 'Шаблон.xlsx',
  DOWNLOAD: 'Завантажити',
  SELECT_FILE: 'Виберіть файл',
  UPLOAD: 'Завантажити',
  SELECT_FILE_ERROR:
    'Не вдалося завантажити такий тип файлу. Будь ласка, завантажте PDF, DOC, TXT тощо.',
  MAX_SIZE:
    'Максимальний розмір файлу: 2 МБ, підтримувані типи файлів (XLSX)',
  NOTE: 'ПРИМІТКА!',
  NEXT: 'Далі',
  IMPORT_USER: 'Імпорт користувача',
  DEFAULT_FIELDS_MAPPING: 'Мапування полів за замовчуванням',
  MAPPING_UPLOADING:
    'Відображення заголовків вашого завантаженого файлу на поля RotaSheet.',
  PREVIEW: 'Попередній перегляд',
  MAPPING_ERROR:
    'Є помилки мапування в файлі. Будь ласка, виправте їх, перш ніж продовжити.',
  ERRORS: 'Помилки',
  FIX_NOW: 'Виправити зараз',
  RECORDS_NEED_TO_CREATED: 'Необхідно створити записи',
  RECORDS_ALL_IMPORTED: 'Ці записи всі імпортовано в систему.',
  IMPORT_RECORDS: 'Імпорт записів',
  PROCESSING: 'Обробка',
  SINGLE_TEXT: 'Однорядковий текст',
  NUMBER: 'Число',
  DATE: 'Дата',
  PAYROLL: 'Виплата зарплати',
  LEAVE: 'Відпустка',
  PAYMENT: 'Платіж',
  RECRUITMENTS: 'Прийом на роботу',
  LEARNINGS: 'Навчання',
  TIMESHEET: 'Табель обліку робочого часу',
  SCHEDULING: 'Планування',
  ENGAGEMENT: 'Залученість',
  REPORTS_ANALYTICS: 'Звітність та аналітика',
  DIRECTORY: 'Довідник',
  ONBOARDING: 'Введення в обробку',
  OFFBOARDING: 'Виведення з обробки',
  MY_SETTINGS: 'Мої налаштування',
  BENEFITS: 'Пільги',
  EMAIL_ALERTS: 'Сповіщення по електронній пошті',
  WORKFLOW: 'Робочий процес',
  ACCESS_LEVELS: 'Рівні доступу',
  HOLIDAYS: 'Свята',
  PENSION: 'Пенсія',
  TAX: 'Податки',
  HIRING: 'Прийняття на роботу',
  PERFORMANCE: 'Результативність',
  PAYSLIP: 'Витяг із зарплати',
  MY_INFORMATION: 'Моя інформація',
  ACCOUNT_SETTINGS: 'Налаштування облікового запису',
  LOG_OUT: 'Вийти',
  PROCESS_PAYROLL: 'Обробка зарплати',
  TIME_TRACKING: 'Облік робочого часу',
  LOAN_MANAGEMENT: 'Управління позиками',
  EMPLOYEES_LIST: 'Список співробітників',
  RECORDS_HAS_BEEN_SUCCESSFULLY_IMPORTED:
    'Записи успішно імпортовані',
  VIEW_EMPLOYEE_RECORDS: 'Переглянути записи співробітника',
  ADD_DIVISION: 'Додати підрозділ',
  ADD_INFORMATION: 'Додати інформацію',
  NUMBER_OF_JOB_ROLE: '# посади',
  SETTINGS: 'Налаштування',
  LOCALE: 'Локаль',
  DEFAULT_LOCALE: 'Локаль за замовчуванням',
  PREFERRED_LOCALE: 'Обрана локаль',
  DEFAULT_DISPLAY_LANGUAGE: 'Мова відображення за замовчуванням',
  PREFERRED_DISPLAY_LANGUAGE: 'Обрана мова відображення',
  TIMEZONE: 'Часовий пояс',
  DEFAULT_TIMEZONE: 'Часовий пояс за замовчуванням',
  DEFAULT_HOUR_CLOCK: 'Годинник за замовчуванням',
  PREFERRED_HOUR_CLOCK: 'Обраний годинник за замовчуванням',
  COMPANY_INFORMATION: 'Інформація про компанію',
  FINANCIAL_YEAR: 'Фінансовий рік',
  LEAVE_YEAR: 'Рік відпустки',
  TAX_PLAYER_IDENTIFICATION_NUMBER:
    'Ідентифікаційний номер платника податків',
  VAT: 'ПДВ',
  PAYROLL_ACCOUNTING: 'Бухгалтерія заробітної плати',
  LEAVE_MANAGEMENT: 'Управління відпустками',
  TRUSTED_DEVICES: 'Довірені пристрої',
  DEFAULT_CURRENCY: 'Валюта за замовчуванням',
  PREFERRED_CURRENCY: 'Обрана валюта',
  COMPANY_LOGO: 'Логотип компанії',
  COMPANY_LOGO_SUPPORTED_FILES:
    'Максимальний розмір файлу: 25 МБ, підтримувані типи файлів (SVG, PNG, JPEG)',
  TAX_PAYER_IDENTIFICATION:
    'Ідентифікаційний номер платника податків',
  TAX_PAYER_IDENTIFICATION_DESCRIPTION:
    'Ідентифікаційний номер платника податків (TIN) - це ідентифікаційний номер, який використовується Інтернальною службою доходів (IRS) для здійснення податкових регулювань. Він видається або Службою соціального забезпечення (SSA), або IRS. Номер соціального страхування (SSN) видається SSA, тоді як всі інші TIN видаються IRS.',
  VAT_DESCRIPTION:
    "Податок на додану вартість (ПДВ) - це податок, який обов'язково сплачується з продажу товарів або послуг на території держав-членів ЄС. Податок, в усіх випадках, остаточно сплачується кінцевим споживачем товару або послуги.",
  DEFAULT_EMAIL: 'Електронна пошта за замовчуванням',
  ALERT_WHEN: 'Сповіщення, коли є два дні в потоці',
  HOW_TO_NOTIFY: 'Як повідомляти',
  NOTIFY_LABEL: 'Сповіщати оригінал?',
  NOTIFY_ORIGINAL: 'Сповіщати оригінал',
  NOTIFICATION_FREQUENCY: 'Частота сповіщень',
  PREFERENCES: 'Уподобання',
  PREFERENCE_SHARED_BACKGROUND:
    'Показати повідомлення, коли завершиться загальний фоновий звіт',
  PREFERENCE_BACKGROUND_REPORT:
    'Показати повідомлення, коли завершиться звіт фонової інформації',
  PREFERENCE_BACKGROUND_SERVICE:
    'Надіслати електронний лист, коли завершиться фонове обслуговування',
  DISABLE_PAYSLIP: 'Вимкнути виписку зарплати в Самообслуговуванні',
  DISABLE_PAYSLIP_VIEWING:
    'Вимкнути перегляд виписки зарплати в Самообслуговуванні',
  ENABLE_PRINT_MULTIPLE:
    'Увімкнути друк кількох виписок зарплати для адміністраторів',
  ENABLE_PAYSLIP: 'Увімкнути інформацію про виписку зарплати',
  ENABLE_COMPANY_INFO: 'Увімкнути інформацію про компанію',
  ENABLE_CURRENT_TOTAL: 'Увімкнути поточну і загальну суму за рік',
  ENABLE_REGURAL_EARNINGS: 'Увімкнути регулярні доходи',
  ENABLE_STATUTORY_TAXES: 'Увімкнути законодавчі податки',
  PAYMENTS: 'Платежі',
  ENABLE_EMPLOYEE_BENEFITS:
    'Увімкнути оплату пільг для співробітників',
  ENABLE_TAXABLE_WAGES: 'Увімкнути оподатковувані заробітні плати',
  ENABLE_WITHHOLDING: 'Увімкнути утримання',
  ENABLE_TIME_OFF: 'Увімкнути відпустку',
  TIME_IN_OUT: 'Час входу-виходу',
  DEFAULT_TIME_IN: 'Час входу за замовчуванням',
  DEFAULT_TIME_OUT: 'Час виходу за замовчуванням',
  AUTOMATIC_TIME_OUT: 'Автоматичний час виходу',
  ENABLE_AUTOMATIC_TIME:
    'Увімкнути автоматичний час виходу, якщо співробітник не виходить з системи',
  TIME_WRITING: 'Ведення обліку часу',
  ENABLE_ONLINE_TIME_WRITING: 'Увімкнути онлайн-ведення обліку часу',
  ENABLE_MOBILE_TIME_WRITING:
    'Увімкнути мобільне ведення обліку часу',
  ACCOUNTING: 'Бухгалтерія',
  ENABLE_INTER_COMPANY: 'Увімкнути міжкомпанійну бухгалтерію',
  PERIOD_AS_BUDGET_DATE:
    'Використовувати дату бюджету як дату платежу за графіком',
  JOURNAL: 'Журнал',
  USE_PAYMENT_DATE:
    'Використовувати дату оплати як дату бухгалтерії для платежів за графіком',
  ENABLE_JOURNAL_DATE: 'Увімкнути деталі журналу',
  ENABLE_PRORATION:
    'Увімкнути пропорціональний розрахунок для відпусток',
  HIDE_LEAVE_BALANCE:
    'Сховати залишок відпусток у Самообслуговуванні',
  VISIBILITY_AND_LEAVE: 'Видимість та відпустка',
  BALANCE_VISIBILITY: 'Видимість залишку',
  LEAVE_YEAR_START: 'Початок робочого року',
  LEAVE_YEAR_ENDS: 'Закінчення робочого року',
  OTHER: 'Інше',
  ENABLE_ON_PAYSLIP: 'Увімкнути на виписці зарплати',
  ENABLE_CARRYOVER: 'Увімкнути перенос',
  ENABLE_JOURNAL_DETAILS: 'Увімкнути деталі журналу',
  MANAGER_CAN_APPLY:
    'Менеджер може подавати відпустки для працівників',
  NOTIFICATIONS: 'Сповіщення',
  READ_FULL: 'читати повністю',
  CURRENT_SALARY: 'Поточна зарплата',
  MANAGER: 'Менеджер',
  PERSONAL_DETAILS: 'Особисті дані',
  CONTACT_INFORMATION: 'Контактна інформація',
  RESIDENTIAL_ADDRESS: 'Адреса проживання',
  EMERGENCY_CONTACT: 'Контакт для екстрених випадків',
  HOME_ADDRESS: 'Домашня адреса',
  STATE: 'Штат',
  POST_CODE: 'Поштовий індекс',
  PHONE_NUMBER: 'Номер телефону',
  SELECT_FORMAT: 'Виберіть формат',
  NEXT_OF_KIN: 'Близька родичка',
  RELATIONSHIP: 'Відносини',
  PAYMENT_INFORMATION: 'Платіжна інформація',
  BANK: 'Банк',
  ACCOUNT_NAME: 'Назва рахунку',
  CODE: 'Код',
  SWIFT_CODE: 'SWIFT-код',
  ACCOUNT_NUMBER: 'Номер рахунку',
  SORT_CODE: 'Сортувальний код',
  PAYMENT_METHOD: 'Спосіб оплати',
  APPLY_DOUBLE_TAXATION_TO_COUNTRY:
    'Застосувати подвійне оподаткування для країни',
  RSA_NUMBER: 'Номер RSA',
  PENSION_FUND_ADMINISTRATOR: 'Адміністратор пенсійного фонду',
  PENSION_START_DATE: 'Дата початку пенсії',
  VOLUNTARY_CONTRIBUTION: 'Добровільний внесок',
  WORK_INFORMATION: 'Інформація про роботу',
  EMPLOYEE_NUMBER: 'Номер співробітника',
  DIVISION: 'Підрозділ',
  CURRENCY: 'Валюта',
  ANNUAL_HOLIDAY: 'Річна відпустка',
  GRADE_LEVEL: 'Рівень посади',
  ANNUAL_GROSS_SALARY: 'Річна валова зарплата',
  COUNTRY_OF_EMPLOYMENT: 'Країна зайнятості',
  LANGUAGE: 'Мова',
  WORK_PERMIT: 'Ліцензія на роботу №',
  START_DATE: 'Дата початку',
  END_DATE: 'Дата закінчення',
  UNION_DUES: 'Членські внески в профспілку',
  MARITAL_STATUS: 'Сімейний стан',
  NUMBER_OF_CHILDREN: 'Кількість дітей',
  PLACE_OF_BIRTH: 'Місце народження',
  NATIONALITY: 'Національність',
  COUNTRY_OF_BIRTH: 'Країна народження',
  NATIONAL_ID: 'Національний ідентифікаційний номер',
  PASSPORT_NUMBER: 'Номер паспорта',
  PAY_DATE: 'Дата виплати',
  PAY_PERIOD: 'Період оплати',
  GROSS_PAY: 'Валова зарплата',
  DEDUCTION: 'Вирахування',
  NET_PAY: 'Чиста зарплата',
  LINK: 'Посилання',
  CERTIFICATE_TYPE: 'Тип сертифіката',
  TITLE_OF_CERTIFICATE: 'Назва сертифіката',
  ISSUE_DATE: 'Дата видачі',
  RENEWAL_DATE: 'Дата поновлення',
  SIZE: 'Розмір',
  ADD: 'Додати',
  ADD_POSITION: 'Додати посаду',
  EDIT_EMPLOYEE: 'Редагувати співробітника',
  ORGANOGRAM: 'Органіграма',
  PREFERRED_TIMEZONE: 'Обрана часова зона',
  PAY_DAY_OPTION: 'Опція дня виплати',
  WINDOWS: 'Windows',
  MAC_OS: 'Mac OS',
  LINUX: 'Linux',
  WHAT_IS_NATIONAL_ID: 'Що таке національний ідентифікаційний номер?',
  NATIONAL_IDENTIFICATION_NUMBER_DESCRIPTION:
    "Національний ідентифікаційний номер, номер національної ідентичності або номер страхування від національних ідентифікаційних номерів, що використовується урядами багатьох країн для відстеження їхніх громадян, постійних резидентів та тимчасових резидентів для регулювання праці, оподаткування, громадських вигод, охорони здоров'я та інших урядових функцій.",
  PASSPORT_NUMBER_DESCRIPTION:
    'Де можна знайти номер паспорта? Шукайте: Кожний паспорт США має унікальний 9-значний ідентифікаційний номер, який називається номером паспорта. Його можна знайти в правому верхньому куті другої сторінки паспорта.',
  WHAT_IS_SWIFT_CODE: 'Що таке SWIFT-код?',
  SWIFT_CODE_DESCRIPTION:
    'SWIFT-код - це стандартний формат кодів ідентифікації бізнесу (BIC), іноді також називається BIC-кодом.',
  RSA: 'RSA',
  RSA_DESCRIPTION:
    'Які податкові наслідки для доходів RSA? Згідно зі звичайними правилами федерального податкового законодавства, ви не сплачуєте податок в момент отримання обмеженого акціонерного винагородження, за умови, що ви не зробили вибору згідно зі статтею 83 (b). Замість цього оподатковування відбувається при надходженні прав, коли обмеження скасовуються.',
  ACCOUNT_NUMBER_DESCRIPTION:
    'Номер рахунку знаходиться внизу паперового чека.',
  WHAT_IS_SORT_CODE: 'Що таке сортувальний код?',
  SORT_CODE_DESCRIPTION:
    'Сортувальний код - це 6-значний номер, який ідентифікує ваш банк.',
  WHAT_IS_IBAN: 'Що таке IBAN?',
  IBAN: 'IBAN',
  SWIFT: 'SWIFT',
  IBAN_DESCRIPTION:
    'Міжнародний банківський номер рахунку - або IBAN - використовується у всьому світі для ідентифікації окремих рахунків. IBAN полегшує обробку міжнародних платежів. Ви можете знайти свій IBAN в Інтернет-банку та на виписці з рахунку.',
  INFO_EMPLOYEE: 'Інформація про співробітника',
  DOUBLE_TAXATION_CODE: 'Код подвійного оподаткування',
  DOUBLE_TAXATION_DESCRIPTION:
    'Подвійне оподаткування вказує на оподаткування доходів двічі з одного джерела доходів. Це стається, коли дохід оподатковується як на рівні корпорації, так і на рівні фізичних осіб.',
  FEW_WORDS: 'Кілька слів тут.',
  WORK_DATE_FORMAT: 'Формат дати роботи',
  PRINT: 'Друк',
  GRADE_INFORMATION: 'Інформація про категорію',
  COMPANY_BANK_ACCOUNT: 'Банківський рахунок компанії',
  COMPANY_ACCOUNT_DETAILS: 'Деталі банківського рахунку компанії',
  EXPORT: 'Експорт',
  CLOSE: 'Закрити',
  TEST: 'Тест',
  VIEW_ALL: 'Переглянути всі',
  EMPTY: '',
  ORGANISATION_CHART: 'Організаційна структура',
  EMPLOYEES_TYPE: 'Типи співробітників',
  DESCRIPTION: 'Опис',
  ANALYSIS: 'Аналіз',
  DOCUMENT_LIST: 'Список документів',
  FOLDER_LIST: 'Список папок',
  FOLDER_DETAILS: 'Деталі папки',
  NEW_DOCUMENT: 'Новий документ',
  CREATE_NEW_FOLDER: 'Створити нову папку',
  CREATION_DATE: 'Дата створення',
  UPLOAD_DOCUMENT: 'Завантажити документ',
  SHARED: 'Спільний',
  SHARE: 'Поділитися',
  SHARE_WITH: 'Поділитися з',
  CHOOSE_FILES: 'Вибрати файли',
  DOCUMENTS_SUPPORTED_FILES:
    'Максимальний розмір файлу: 25 МБ, підтримувані типи файлів (xls, doc, pdf)',
  SHARED_DESC: 'Деякий короткий опис',
  EMPLOYEES_RECORD: 'Записи про співробітників',
  ROW_ID: 'Ідентифікатор рядка',
  NUMBER_OF_EMPLOYEE: '# працівників',
  NUMBER_OF_DEPARTMENT: '# відділень',
  HIRE_DATE: 'Дата прийому на роботу',
  JOB_DESCRIPTION: 'Опис роботи',
  DIVISION_HEAD: 'Керівник підрозділу',
  HEAD_OF_DEPARTMENT: 'Керівник відділу',
  DISPLAY_ORDER: 'Порядок відображення',
  REMAINING_TIME_HEADER: 'Залишилось часу',
  REMAINING_TIME_DESCRIPTION:
    'Після закінчення часу ваш екран буде заблоковано.',
  BULK_LOAD: 'Масове завантаження',
  SEARCH_USER: 'Пошук користувачів',
  EDIT_FOLDER: 'Редагувати папку',
  NEW_FOLDER: 'Нова папка',
  ANALYTICS: 'Аналітика',
  SHOW_IN_ACTIVE: 'Показати неактивні',
  DARK_MODE: 'Темна тема',
  BENEFIT_SETUP: 'Налаштування переваг',
  NEW_BENEFIT: 'Нова перевага',
};

export const allLanguages: {
  [K in 'en' | 'uk']: LanguageObject;
} = { en, uk };

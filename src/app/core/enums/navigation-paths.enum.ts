export enum NavigationPaths {
  EMPTY_PATH = '',
  BACK = '..',
  HOME = 'home',

  // Login's paths
  LOGIN = 'login',
  SIGN_IN = 'sign-in',
  REGISTRATION = 'registration',
  REGISTRATION_COMPANY = 'registration-company',
  PASSWORD_RECOVERY = 'password-recovery',
  PASSWORD_RECOVERY_SUCCESS = 'password-recovery-success',

  // Dashboard's paths
  DASHBOARD = 'dashboard',
  COMPANY = 'company',
  EMPLOYEES = 'employees',
  DOCUMENTS = 'documents',
  USER_ACCOUNT = 'user-account',
  PAYROLL = 'payroll',
  LEAVE = 'leave',
  PAYMENT = 'payment',
  RECRUITMENTS = 'recruitments',
  PERFORMANCE = 'performance',
  LEARNINGS = 'learnings',
  TIMESHEET = 'timesheet',
  SCHEDULING = 'scheduling',
  ENGAGEMENT = 'engagement',
  REPORT_ANALYTICS = 'reports-analytics',
  SETTINGS = 'settings',

  //Company sub-menu  paths
  BANK_ACCOUNT = 'bank-account',
  GROUP_FUNCTION_DIVISION = 'group-function-division',
  DEPARTMENT = 'department',
  GRADE_CATEGORY = 'grade-category',
  POSITION = 'position',
  BENEFIT = 'benefit',
  WORK_SCHEDULE = 'work-schedule',
  PAY_STRUCTURE = 'pay-structure',
  CREATE_COMPANY = 'create-company',
  CREATE_NEW_GROUP_FUNCTION_DIVISION = 'create-group-function-division',
  CREATE_NEW_GRADE_CATEGORY = 'create-grade-category',
  GRADE_CATEGORY_LEVELS = 'grade-category-levels',
  CREATE_NEW_DEPARTMENT = 'create-new-department',
  CREATE_NEW_POSITION = 'create-new-position',

  //Employees sub-menu  paths
  EMPLOYEES_LIST = 'employees-list',
  EMPLOYEES_TYPE = 'employees-type',
  IMPORT_EMPLOYEES = 'import-employees',
  LOAN_MANAGEMENT = 'loan-management',
  DIRECTORY = 'directory',
  ONBOARDING = 'onboarding',
  OFFBOARDING = 'offboarding',
  CREATE_NEW_EMPLOYEE = 'create-new',
  CREATE_NEW_EMPLOYEE_TYPE = 'create-new-type',
  EDIT_EMPLOYEE = 'edit-employee',
  INFO_EMPLOYEE = 'info-employee',

  //Payroll sub-menu  paths
  PROCESS_PAYROLL = 'process-payroll',
  CREATE_NEW_PAYROLL = 'create-new',
  PAYSLIP = 'payslip',
  PENSION = 'pension',
  TAX = 'tax',
  BENEFITS = 'benefits',
  HISTORICAL = 'historical',

  //Documents sub-menu paths
  FOLDER_MANAGEMENT = 'folder-management',
  DOCUMENT_MANAGEMENT = 'document-management',
  EMPLOYEE_DOCUMENT = 'employee-document',
  CREATE_FOLDER = 'create-folder',
  UPLOAD_DOCUMENT = 'upload-document',

  // User Account sub-menu paths
  USER = 'user',
  ROLE = 'role',
  IMPORT_USER = 'import-user',

  //SETTINGS
  WORKFLOW = 'workflow',
  PAYROLL_ACCOUNTING = 'payroll-accounting',
  LEAVE_MANAGEMENT = 'leave-management',
  TRUSTED_DEVICES = 'trusted-devices',

  // Bank account sub-menu path
  CREATE_BANK_ACCOUNT = 'create-bank-account',

  // Engagement path
  ORGANOGRAM = 'organogram',
}

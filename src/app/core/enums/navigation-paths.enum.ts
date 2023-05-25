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
  EMPLOYEE = 'employee',
  DOCUMENTS = 'documents',
  USER_ACCOUNT = 'user-account',

  //Company sub-menu  paths
  BANK_ACCOUNT = 'bank-account',
  GROUP = 'group',
  DEPARTMENT = 'department',
  GRADE_CATEGORY = 'grade-category',
  POSITION = 'position',
  BENEFIT = 'benefit',
  WORK_SCHEDULE = 'work-schedule',
  PAY_STRUCTURE = 'pay-structure',
  CREATE_COMPANY = 'create-company',

  //Employees sub-menu  paths
  EMPLOYMENT_TYPE = 'employment-type',
  EMPLOYEE_RECORD = 'employee-record',
  ORGANIZATION_CHART = 'organization-chart',
  IMPORT_VERIFICATION = 'import-verification',

  //Documents sub-menu paths
  FOLDER_MANAGEMENT = 'folder-management',
  DOCUMENT_MANAGEMENT = 'document-management',
  EMPLOYEE_DOCUMENT = 'employee-document',

  // User Account sub-menu paths
  USER = 'user',
  ROLE = 'role'
}

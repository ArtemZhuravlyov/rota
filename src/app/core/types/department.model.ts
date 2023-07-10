export type DepartmentResponse = {
  departments: Departments[];
  totalCount: number;
};

export type Departments = {
  divisionId: string;
  divisionName: string;
  id: string;
  managerId: string;
  managerTitle: string;
  name: string;
  positionCount: number;
};

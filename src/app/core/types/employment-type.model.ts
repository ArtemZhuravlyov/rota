export type EmploymentTypeResponse = {
  employmentTypes: EmploymentTypes[];
  totalCount: number;
};

export type EmploymentTypes = {
  description: string;
  id: string;
  name: string;
  totalEmployeeNumber: number;
};

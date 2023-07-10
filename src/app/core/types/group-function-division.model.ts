export type DivisionResponse = {
  divisions: Divisions[];
  totalCount: number;
};

export type Divisions = {
  departmentCount: number;
  id: string;
  managerId: string;
  managerTitle: string;
  name: string;
};

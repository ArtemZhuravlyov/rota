export type GradeCategory = {
  companyId: string;
  id: string;
  name: string;
  positionCount: number;
};

export type GradeCategoryResponse = {
  gradeCategories: GradeCategory[];
  totalCount: number;
};

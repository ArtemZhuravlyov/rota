export type Benefit = {
  description: string;
  gradeCategory: string;
  gradeCategoryId: string;
  id: string;
  name: string;
};

export type Benefits = {
  totalCount: number;
  benefits: Benefit[];
};

export type BenefitCreated = Pick<Benefit, 'id'>;

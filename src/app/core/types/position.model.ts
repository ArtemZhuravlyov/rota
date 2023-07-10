export type PositionResponse = {
  positions: Positions[];
  totalCount: number;
};

export type Positions = {
  directReportingLineId: null
  employeeCount: number;
  functionalReportingLineId: null
  id: string;
  jobDescription: string;
  jobFamilyId: string;
  jobFamilyName: string;
  jobProfileId: string;
  name: string;
  numberOfPosition: number;
};

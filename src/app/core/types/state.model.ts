export type State = {
  stateRegions: StateRegion[];
  totalCount: number;
};

export type StateRegion = {
  countryId: string;
  description: string;
  id: string;
  name: string;
};

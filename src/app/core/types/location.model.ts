export type LocationResponse = {
  locations: Locations[];
  totalCount: number;
};

export type Locations = {
  address: string;
  id: string;
  name: string;
};

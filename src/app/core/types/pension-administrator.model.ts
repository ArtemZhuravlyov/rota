export type PensionAdministratorResponse = {
  pensionAdministrators: PensionAdministrator[];
  totalCount: number;
};

export type PensionAdministrator = {
  countryId: string;
  description: string;
  id: string;
  name: string;
};

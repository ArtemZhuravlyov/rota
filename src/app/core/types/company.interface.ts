export interface Country {
  id:	string;
  name:	string;
  twoLetterIsoCode:	string;
  threeLetterIsoCode:string;
  dialingCode: string;
  countryFlag: string;
}

export interface Industry {
  name: string;
  id: string;
}

export interface CompanyRegister {
  name: string;
  address: string;
  industryId: string;
  countryId: string;
}

export interface CompanyRegisterResult {
  id: string;
}

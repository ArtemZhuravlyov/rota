export interface BankAccount {
  bankName: string;
  sortCode: string;
  accountNumber: string;
  swiftCode: string;
  iban: string;
  email: string;
  id?: string;
  companyId?: string;
}

export interface BankAccountResponse {
  bankAccounts: BankAccount[];
  totalCount: number;
}

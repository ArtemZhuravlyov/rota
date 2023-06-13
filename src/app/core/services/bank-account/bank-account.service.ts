import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { ENVIRONMENT } from "@app/app.module";
import { Environment } from "@core/types/environment";
import { Observable } from "rxjs";
import { BankAccount } from "@core/types/bankAccount.interface";

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment,
  ) { }


  getBankAccount(userId: string, companyId: string, pageSize?: number, pageIndex?: number): Observable<any> {
    const params = new HttpParams()
      .append('pageSize', pageSize!)
      .append('pageIndex', pageIndex! + 1);

    return this.http.post(`${this.env.apiUrlCompany}/bank-account/${userId}/${companyId}`, {}, {params})
  }

  createBankAccount(userId: string, companyId: string, body: BankAccount): Observable<BankAccount> {
    return this.http.post<BankAccount>(`${this.env.apiUrlCompany}/bank-account/create/${userId}/${companyId}`, body);
  }

  deleteBankAccount(userId: string, companyId: string, bankAccountId: string){
    return this.http.delete(`${this.env.apiUrlCompany}/bank-account/${userId}/${companyId}/${bankAccountId}`);
  }

}

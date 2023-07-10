import { Inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { ENVIRONMENT } from "@app/app.module";
import { Environment } from "@core/types/environment";
import {BehaviorSubject, catchError, map, Observable, of, Subject, throwError} from "rxjs";
import {BankAccount, BankAccountResponse} from "@core/types/bankAccount.interface";
import {TableActionTypes} from "@core/types/data-table";
import {AuthService} from "@core/services/account/auth.service";

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  action!: typeof TableActionTypes[keyof typeof TableActionTypes];
  selectedBankAccount = {} as any;
  user = this.authService.getCurrentUser();
  selectedTableAccounts = [] as any;
  selectedTableAccounts$ = new BehaviorSubject<any>([]);
  totalBankAccountsNumber: number = 0;


  constructor(
    private readonly authService: AuthService,
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment,
  ) { }


  getBankAccount(userId: string, companyId: string, pageSize?: number, pageIndex?: number): Observable<BankAccountResponse> {
    const params = new HttpParams()
      .append('pageSize', pageSize!)
      .append('pageIndex', pageIndex! + 1);

    return this.http.post<BankAccountResponse>(`${this.env.apiUrlCompany}/bank-account/${userId}/${companyId}`, {}, {params})
  }

  createBankAccount(userId: string, companyId: string, body: BankAccount): Observable<BankAccount> {
    return this.http.post<BankAccount>(`${this.env.apiUrlCompany}/bank-account/create/${userId}/${companyId}`, body);
  }

  editBankAccount(bankAccount: BankAccount, form: BankAccount): Observable<BankAccount>{
    let body = {...form, id: bankAccount.id, companyId: this.user.companyId}
    return this.http.post<BankAccount>(`${this.env.apiUrlCompany}/bank-account/create/${this.user.userId}/${this.user.companyId}`, body)
      .pipe(
        catchError(err => throwError(() => new Error(err))),
      );
  }

  deleteBankAccount(bankAccountId: string, bankAccount: BankAccount){
    return this.http.delete(`${this.env.apiUrlCompany}/bank-account/${this.user.userId}/${this.user.companyId}/${bankAccountId}`);
  }

}

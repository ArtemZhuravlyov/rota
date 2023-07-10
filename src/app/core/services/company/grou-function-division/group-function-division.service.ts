import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ENVIRONMENT } from "@app/app.module";
import { Environment } from "@core/types/environment";
import { AuthService } from "@core/services/account/auth.service";
import {BehaviorSubject, catchError, Observable, throwError} from "rxjs";
import { createHttpParams } from "@shared/utils/create-http-params";
import {FormGroup} from "@angular/forms";
import {TableActionTypes} from "@core/types/data-table";

@Injectable({
  providedIn: 'root'
})
export class GroupFunctionDivisionService {

  user = this.authService.getCurrentUser();
  form!: FormGroup;
  selectedDivision = {} as any;
  action!: typeof TableActionTypes[keyof typeof TableActionTypes];
  selectedTableAccounts = [] as any;
  selectedTableAccounts$ = new BehaviorSubject<any>([])

  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment,
    private authService: AuthService
  ) { }

  getDivisionsList(pageSize: number, pageIndex: number): Observable<any> {
    const params = createHttpParams({ pageIndex , pageSize });
    return this.http.post(`${this.env.apiUrlCompany}/division/${this.user.userId}/${this.user.companyId}`, {}, { params })
      .pipe(
        catchError(err => throwError(() => new Error(err))),
      );
  }

  createDivision(form: any): Observable<any>{
    return this.http.post(`${this.env.apiUrlCompany}/division/create/${this.user.userId}/${this.user.companyId}`, form)
      .pipe(
        catchError(err => throwError(() => new Error(err))),
      );
  }

  editDivision(divisionId: string, form: any): Observable<any>{
    console.log('EDIT DIVISION', form)
    let body = {...form, id: divisionId}
    return this.http.post(`${this.env.apiUrlCompany}/division/create/${this.user.userId}/${this.user.companyId}`, body)
      .pipe(
        catchError(err => throwError(() => new Error(err))),
      );
  }

  deleteDivision(divisionId: string): Observable<any>{
    return this.http.delete(`${this.env.apiUrlCompany}/division/${this.user.userId}/${this.user.companyId}/${divisionId}`)
  }
}

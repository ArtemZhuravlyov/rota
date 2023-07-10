import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ENVIRONMENT} from "@app/app.module";
import {Environment} from "@core/types/environment";
import {AuthService} from "@core/services/account/auth.service";
import {BehaviorSubject, catchError, Observable, throwError} from "rxjs";
import {createHttpParams} from "@shared/utils/create-http-params";
import {TableActionTypes} from "@core/types/data-table";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  action!: typeof TableActionTypes[keyof typeof TableActionTypes];
  selectedDepartment = {} as any;
  user = this.authService.getCurrentUser();
  selectedTableAccounts = [] as any;
  selectedTableAccounts$ = new BehaviorSubject<any>([]);

  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment,
    private authService: AuthService
  ) { }

  getDepartmentList(pageSize: number, pageIndex: number): Observable<any> {
    const params = createHttpParams({ pageSize, pageIndex });
    return this.http.post(`${this.env.apiUrlCompany}/department/${this.user.userId}/${this.user.companyId}`, {}, { params })
      .pipe(
        catchError(err => throwError(() => new Error(err))),
      );
  }

  createDepartment(form: any): Observable<any>{
    console.log('create department', form)
    return this.http.post(`${this.env.apiUrlCompany}/department/create/${this.user.userId}/${this.user.companyId}`, form)
      .pipe(
        catchError(err => throwError(() => new Error(err))),
      );
  }

  editDepartment(departmentId: string, form: any): Observable<any> {
    let body = {...form, id: departmentId};
    console.log('REQUEST BODY', body)
    return this.http.post(`${this.env.apiUrlCompany}/department/create/${this.user.userId}/${this.user.companyId}`, body)
      .pipe(
        catchError(err => throwError(() => new Error(err))),
      );
  }

  deleteDepartment(departmentId: string): Observable<any>{
    console.log('DELETE in SERVICE', )
    return this.http.delete(`${this.env.apiUrlCompany}/division/${this.user.userId}/${this.user.companyId}/${departmentId}`)
  }
}

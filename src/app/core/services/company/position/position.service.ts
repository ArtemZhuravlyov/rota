import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ENVIRONMENT} from "@app/app.module";
import {Environment} from "@core/types/environment";
import {AuthService} from "@core/services/account/auth.service";
import {catchError, Observable, throwError} from "rxjs";
import {createHttpParams} from "@shared/utils/create-http-params";
import {GradeCategoryResponse} from "@core/types/grade-category.model";
import {TableActionTypes} from "@core/types/data-table";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  user = this.authService.getCurrentUser();
  action!: typeof TableActionTypes[keyof typeof TableActionTypes];
  selectedPosition = {} as any;
  selectedTableAccounts = [] as any;

  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment,
    private authService: AuthService
  ) { }

  getPositionsList(pageSize: number, pageIndex: number): Observable<any> {
    const params = createHttpParams({ pageSize, pageIndex });
    return this.http.post(`${this.env.apiUrlCompany}/position/${this.user.userId}/${this.user.companyId}`, {}, { params })
      .pipe(
        catchError(err => throwError(() => new Error(err))),
      );
  }

  createPosition(form: any): Observable<any>{
    return this.http.post(`${this.env.apiUrlCompany}/position/create/${this.user.userId}/${this.user.companyId}`, form)
      .pipe(
        catchError(err => throwError(() => new Error(err))),
      );
  }

  editPosition(positionId: string, form: any): Observable<any>{
    let body = {...form, id: positionId}
    return this.http.post(`${this.env.apiUrlCompany}/position/create/${this.user.userId}/${this.user.companyId}`, body)
      .pipe(
        catchError(err => throwError(() => new Error(err))),
      );
  }

  deletePosition(positionId: string): Observable<any>{
    console.log('DELETE in SERVICE', )
    return this.http.delete(`${this.env.apiUrlCompany}/position/${this.user.userId}/${this.user.companyId}/${positionId}`)
  }

  getJobFamilyList(pageSize: number, pageIndex: number): Observable<any> {
    const params = createHttpParams({ pageSize, pageIndex });
    return this.http.post<any>(`${this.env.apiUrlCompany}/job-family/${this.user.userId}/${this.user.companyId}`, {}, { params })
      .pipe(
        catchError(err => throwError(() => new Error(err))),
      );
  }

  getJobProfileList(jobFamilyId: string): Observable<any> {
    return this.http.get<any>(`${this.env.apiUrlCompany}/job-profile/${this.user.userId}/${this.user.companyId}/profiles/${jobFamilyId}`, {})
      .pipe(
        catchError(err => throwError(() => new Error(err))),
      );
  }
}

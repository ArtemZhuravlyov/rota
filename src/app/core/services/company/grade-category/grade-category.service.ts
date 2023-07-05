import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ENVIRONMENT } from "@app/app.module";
import { Environment } from "@core/types/environment";
import { AuthService } from "@core/services/account/auth.service";
import {catchError, Observable, ReplaySubject, throwError} from "rxjs";
import { createHttpParams } from "@shared/utils/create-http-params";
import {GradeCategory, GradeCategoryResponse} from "@core/types/grade-category.model";

@Injectable({
  providedIn: 'root'
})
export class GradeCategoryService {

  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment,
    private authService: AuthService
  ) { }

  selectedGrade$ = new ReplaySubject<GradeCategory>(1);
  user = this.authService.getCurrentUser();
  selectedTableAccounts = [] as any;

  getGradeCategoriesList(pageSize: number, pageIndex: number): Observable<GradeCategoryResponse> {
    const params = createHttpParams({ pageSize, pageIndex });
    return this.http.post<GradeCategoryResponse>(`${this.env.apiUrlCompany}/grade-category/${this.user.userId}/${this.user.companyId}`, {}, { params })
      .pipe(
        catchError(err => throwError(() => new Error(err))),
      );
  }

  createGradeCategory(form: any): Observable<any> {
    return this.http.post(`${this.env.apiUrlCompany}/grade-category/create/${this.user.userId}/${this.user.companyId}`, form)
      .pipe(
        catchError(err => throwError(() => new Error(err))),
      );
  }

  deleteGradeCategory(gradeCategoryId: string): Observable<any>{
    return this.http.delete(`${this.env.apiUrlCompany}/grade-category/${this.user.userId}/${this.user.companyId}/${gradeCategoryId}`)
  }

  getGradeCategoryLevels(gradeCategoryId: string): Observable<any>{
    return this.http.get(`${this.env.apiUrlCompany}/grade-level/${this.user.userId}/${this.user.companyId}/levels/${gradeCategoryId}`)
  }

  createGradeLevel(gradeCategoryId: string, form: any): Observable<any>{
    form = {...form, gradeCategoryId: gradeCategoryId};
    console.log('Create GRADE LEVEL',form);
    return this.http.post(`${this.env.apiUrlCompany}/grade-level/create/${this.user.userId}/${this.user.companyId}`, form)
  }

  deleteGradeLevel(gradeLevelId: string): Observable<any>{
    return this.http.delete(`${this.env.apiUrlCompany}/grade-category/${this.user.userId}/${this.user.companyId}/${gradeLevelId}`,)

  }

}

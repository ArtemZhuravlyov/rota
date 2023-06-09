import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ENVIRONMENT } from "@app/app.module";
import { Environment } from "@core/types/environment";
import { AuthService } from "@core/services/account/auth.service";
import { catchError, Observable, throwError } from "rxjs";
import { createHttpParams } from "@shared/utils/create-http-params";
import { GradeCategoryResponse } from "@core/types/grade-category.model";

@Injectable({
  providedIn: 'root'
})
export class GradeCategoryService {

  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment,
    private authService: AuthService
  ) { }

  getGradeCategoriesList(pageSize: number, pageIndex: number): Observable<GradeCategoryResponse> {
    const { userId, companyId } = this.authService.getCurrentUser();
    const params = createHttpParams({ pageSize, pageIndex });
    return this.http.post<GradeCategoryResponse>(`${this.env.apiUrlCompany}/grade-category/${userId}/${companyId}`, {}, { params })
      .pipe(
        catchError(err => throwError(() => new Error(err))),
      );
  }

  createGradeCategory(form: any): Observable<any> {
    const { userId, companyId } = this.authService.getCurrentUser();
    return this.http.post(`${this.env.apiUrlCompany}/grade-category/create/${userId}/${companyId}`, form)
      .pipe(
        catchError(err => throwError(() => new Error(err))),
      );
  }
}

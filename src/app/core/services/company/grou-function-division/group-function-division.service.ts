import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ENVIRONMENT } from "@app/app.module";
import { Environment } from "@core/types/environment";
import { AuthService } from "@core/services/account/auth.service";
import { catchError, Observable, throwError } from "rxjs";
import { createHttpParams } from "@shared/utils/create-http-params";

@Injectable({
  providedIn: 'root'
})
export class GroupFunctionDivisionService {

  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment,
    private authService: AuthService
  ) { }

  getDivisionsList(pageSize: number, pageIndex: number): Observable<any> {
    const { userId, companyId } = this.authService.getCurrentUser();
    const params = createHttpParams({ pageSize, pageIndex });
    return this.http.post(`${this.env.apiUrlCompany}/division/${userId}/${companyId}`, {}, { params })
      .pipe(
        catchError(err => throwError(() => new Error(err))),
      );
  }
}

import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENVIRONMENT } from '@app/app.module';
import { Environment } from '@core/types/environment';
import { AuthService } from '@core/services/account/auth.service';
import { catchError, Observable, of, shareReplay } from 'rxjs';
import { createHttpParams } from '@shared/utils/create-http-params';
import {
  EmploymentTypeResponse,
  EmploymentTypes,
} from '@core/types/employment-type.model';

@Injectable({
  providedIn: 'root',
})
export class EmploymentTypeService {
  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment,
    private authService: AuthService
  ) {}

  user = this.authService.getCurrentUser();

  getEmploymentTypeList(
    pageSize: number,
    pageIndex: number
  ): Observable<EmploymentTypeResponse> {
    const params = createHttpParams({
      pageSize,
      pageIndex: pageIndex + 1,
    });
    return this.http
      .post<EmploymentTypeResponse>(
        `${this.env.apiUrlCompany}/employment-type/${this.user.userId}/${this.user.companyId}`,
        {},
        { params }
      )
      .pipe(
        catchError(() =>
          of({
            employmentTypes: [],
            totalCount: 0,
          })
        )
      );
  }

  getEmploymentTypeById(
    employmentTypeId: string
  ): Observable<EmploymentTypes> {
    return this.http
      .get<EmploymentTypes>(
        `${this.env.apiUrlCompany}/employment-type/${this.user.userId}/${this.user.companyId}/${employmentTypeId}`
      )
      .pipe(shareReplay(1));
  }

  creteNewEmploymentType({
    name,
    description,
  }: {
    name: string;
    description: string;
  }): Observable<{ id: string }> {
    return this.http.post<{ id: string }>(
      `${this.env.apiUrlCompany}/employment-type/create/${this.user.userId}/${this.user.companyId}`,
      { id: null, name, description }
    );
  }

  editEmploymentType(body: {
    id: string;
    name: string;
    description: string;
  }): Observable<{ id: string }> {
    return this.http.post<{ id: string }>(
      `${this.env.apiUrlCompany}/employment-type/create/${this.user.userId}/${this.user.companyId}`,
      body
    );
  }

  deleteEmploymentType(id: string) {
    return this.http.delete(
      `${this.env.apiUrlCompany}/employment-type/${this.user.userId}/${this.user.companyId}/${id}`
    );
  }
}

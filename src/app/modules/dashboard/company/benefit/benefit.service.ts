import { Inject, inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { Benefits } from '@core/types/benefit.model';
import { CommonPaginationParams } from '@core/types/pagination.type';
import { CompanyRegisterResult } from '@core/types/company.interface';
import { ENVIRONMENT } from '@app/app.module';
import { Environment } from '@core/types/environment';
import { AuthService } from '@core/services/account/auth.service';

@Injectable()
export class BenefitService {
  private readonly apiUrlCompany = environment.apiUrlCompany;
  user = this.authService.getCurrentUser();
  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment,
    private authService: AuthService
  ) {}

  getList({
    pageSize,
    pageIndex,
  }: CommonPaginationParams): Observable<Benefits> {
    return this.http
      .post<Benefits>(
        `${this.apiUrlCompany}/benefit/${this.user.userId}/${this.user.companyId}`,
        {},
        { params: { pageSize, pageIndex } }
      )
      .pipe(
        catchError(() =>
          of<Benefits>({ benefits: [], totalCount: 0 })
        )
      );
  }

  createBenefit(body: any) {
    return this.http.post<any>(
      `${this.env.apiUrlCompany}/benefit/create/${this.user.userId}/${this.user.companyId}`,
      body
    );
  }
}

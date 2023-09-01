import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { BenefitCreated, Benefits } from '@core/types/benefit.model';
import { CommonPaginationParams } from '@core/types/pagination.type';
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

  createBenefit(body: Benefits): Observable<BenefitCreated> {
    return this.http.post<BenefitCreated>(
      `${this.env.apiUrlCompany}/benefit/create/${this.user.userId}/${this.user.companyId}`,
      body
    );
  }
}

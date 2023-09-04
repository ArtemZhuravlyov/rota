import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, of } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { BenefitCreated, Benefits } from '@core/types/benefit.model';
import {
  CommonPaginationParams,
  PaginationParams,
} from '@core/types/pagination.type';
import { ENVIRONMENT } from '@app/app.module';
import { Environment } from '@core/types/environment';
import { AuthService } from '@core/services/account/auth.service';

@Injectable()
export class BenefitService {
  private readonly apiUrlCompany = environment.apiUrlCompany;
  user = this.authService.getCurrentUser();
  selectedTableAccounts$ = new BehaviorSubject<any>([]);
  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment,
    private authService: AuthService
  ) {}

  getList(body: PaginationParams): Observable<Benefits> {
    let params = new HttpParams();

    params = params
      .append('pageSize', body.pageSize)
      .append('pageIndex', body.pageIndex + 1);
    return this.http
      .post<Benefits>(
        `${this.apiUrlCompany}/benefit/${this.user.userId}/${this.user.companyId}`,
        {},
        { params: params }
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

  deleteBenefit(benefitId: string) {
    return this.http.delete(
      `${this.env.apiUrlCompany}/benefit/${this.user.userId}/${this.user.companyId}/${benefitId}`
    );
  }
}

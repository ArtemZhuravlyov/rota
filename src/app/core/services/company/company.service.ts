import { Inject, Injectable } from '@angular/core';
import { Observable, share, tap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  CompanyRegister,
  CompanyRegisterResult,
  CompanyResponse,
  Country,
  Industry,
} from '../../types/company.interface';
import { ENVIRONMENT } from '@app/app.module';
import { Environment } from '@core/types/environment';
import { AuthService } from '@core/services/account/auth.service';

const PAGE_SIZE = 10;
const PAGE_INDEX = 0;

@Injectable({ providedIn: 'root' })
export class CompanyService {
  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment,
    private authService: AuthService
  ) {}

  getCountry(): Observable<Country[]> {
    return this.http.get<Country[]>(
      `${this.env.apiUrlCompany}/country`
    );
  }

  getCountryById(countryId: string): Observable<Country> {
    const currentUserId = this.authService.getCurrentUserId();
    return this.http.get<Country>(
      `${this.env.apiUrlCompany}/country/${currentUserId}/${countryId}`
    );
  }

  getIndustry(): Observable<Industry[]> {
    return this.http.get<Industry[]>(
      `${this.env.apiUrlCompany}/industry`
    );
  }

  registerCompany(
    body: CompanyRegister,
    userId: string
  ): Observable<CompanyRegisterResult> {
    return this.http.post<CompanyRegisterResult>(
      `${this.env.apiUrlCompany}/company/register/${userId}`,
      body
    );
  }

  createCompany(
    body: CompanyRegister,
    userId: string
  ): Observable<CompanyRegisterResult> {
    return this.http.post<CompanyRegisterResult>(
      `${this.env.apiUrlCompany}/company/create/${userId}`,
      body
    );
  }

  getCompanies(
    userId: string,
    pageSize = PAGE_SIZE,
    pageIndex = PAGE_INDEX
  ): Observable<CompanyResponse> {
    let params = new HttpParams();

    if (pageSize && pageIndex && pageIndex >= 0) {
      params = params
        .append('pageSize', pageSize)
        .append('pageIndex', pageIndex + 1);
    }
    return this.http
      .post<CompanyResponse>(
        `${this.env.apiUrlCompany}/company/${userId}`,
        {},
        { params: params }
      )
      .pipe(share());
  }

  getCompany(userId: string, companyId: string) {
    return this.http.get<any>(
      `${this.env.apiUrlCompany}/company/${userId}/${companyId}`
    );
  }

  exportTemplate(): Observable<any> {
    const { userId, companyId } = this.authService.getCurrentUser();
    return this.http
      .get(
        `${this.env.apiUrlCompany}/export/${userId}/${companyId}/download-employee-template`,
        { responseType: 'blob' }
      )
      .pipe(
        tap((file: any) => {
          const blob = new Blob([file], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          });
          const url = window.URL.createObjectURL(blob);
          window.open(url);
        })
      );
  }
}

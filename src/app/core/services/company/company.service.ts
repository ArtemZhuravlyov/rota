import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import {
  CompanyRegister,
  CompanyRegisterResult,
  CompanyResponse,
  Country,
  Industry
} from "../../types/company.interface";
import { ENVIRONMENT } from "@app/app.module";
import { Environment } from "@core/types/environment";
import { AuthService } from '@core/services/account/auth.service';


@Injectable({ providedIn: 'root' })
export class CompanyService {
  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment,
    private authService: AuthService
  ) {
  }

  getCountry(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.env.apiUrlCompany}/country`);
  }

  getCountryById(countryId: string): Observable<Country> {
    const currentUserId = this.authService.getCurrentUserId();
    return this.http.get<Country>(`${this.env.apiUrlCompany}/country/${currentUserId}/${countryId}`);
  }

  getIndustry(): Observable<Industry[]> {
    return this.http.get<Industry[]>(`${this.env.apiUrlCompany}/industry`);
  }

  registerCompany(body: CompanyRegister, userId: string): Observable<CompanyRegisterResult> {
    return this.http.post<CompanyRegisterResult>(`${this.env.apiUrlCompany}/company/register/${userId}`, body);
  }

  createCompany(body: CompanyRegister, userId: string): Observable<CompanyRegisterResult> {
    return this.http.post<CompanyRegisterResult>(`${this.env.apiUrlCompany}/company/create/${userId}`, body);
  }

  getCompany(userId: string, pageSize?: number, pageIndex?: number): Observable<CompanyResponse> {
    const params = new HttpParams()
      .append('pageSize', pageSize!)
      .append('pageIndex', pageIndex! + 1);

    return this.http.post<CompanyResponse>(`${this.env.apiUrlCompany}/company/${userId}`, {}, { params })
  }

  exportTemplate(): Observable<any> {
    const { userId, companyId, } = this.authService.getCurrentUser();
    return this.http.get(`${this.env.apiUrlCompany}/export/${userId}/${companyId}/download-employee-template`)
  }
}

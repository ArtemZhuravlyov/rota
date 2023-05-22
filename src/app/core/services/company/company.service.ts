import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
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

  getCompany(userId: string): Observable<CompanyResponse> {
    return this.http.post<CompanyResponse>(`${this.env.apiUrlCompany}/company/${userId}`, {})
  }
}

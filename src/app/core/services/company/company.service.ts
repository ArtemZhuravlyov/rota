import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { CompanyRegister, CompanyRegisterResult, Country, Industry } from "../../types/company.interface";
import { ENVIRONMENT } from "@app/app.module";
import { Environment } from "@core/types/environment";

@Injectable({ providedIn: 'root' })
export class CompanyService {
  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment,
  ) {
  }
  getCountry(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.env.apiUrlCompany}/country`);
  }

  getIndustry(): Observable<Industry[]> {
    return this.http.get<Industry[]>(`${this.env.apiUrlCompany}/industry`);
  }

  registerCompany(body: CompanyRegister, userId: string): Observable<CompanyRegisterResult> {
    return this.http.post<CompanyRegisterResult>(`${this.env.apiUrlCompany}/company/register/${userId}`, body);
  }

  getCompany(userId: string): Observable<any> {
    return this.http.post(`${this.env.apiUrlCompany}company/${userId}`, {})
  }
}

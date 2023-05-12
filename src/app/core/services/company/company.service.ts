import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { CompanyRegister, Country, Industry } from "../../types/company.interface";

@Injectable({ providedIn: 'root' })
export class CompanyService {
  constructor(private http: HttpClient) {
  }
  get country(): Observable<Country[]> {
    return this.http.get<Country[]>(`${environment.apiUrlCompany}country`);
  }

  get industry(): Observable<Industry[]> {
    return this.http.get<Industry[]>(`${environment.apiUrlCompany}industry`);
  }

  registerCompany(body: CompanyRegister, userId: string): Observable<any> {
    return this.http.post(`${environment.apiUrlCompany}company/register/${userId}`, body)
  }
}

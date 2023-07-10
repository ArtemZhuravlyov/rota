import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ENVIRONMENT } from "@app/app.module";
import { Environment } from "@core/types/environment";
import { FiscalYear } from "@core/types/fiscal-year.interface";

@Injectable({
  providedIn: 'root'
})
export class FiscalYearService {

  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment
  ) {
  }

  getHourClock() {
    return this.http.get<FiscalYear[]>(`${this.env.apiUrlCompany}/hour-clock`)
  }

  getFinancialYear() {
    return this.http.get<FiscalYear[]>(`${this.env.apiUrlCompany}/financial-year`)
  }

  getLeaveYear() {
    return this.http.get<FiscalYear[]>(`${this.env.apiUrlCompany}/leave-year`)
  }
}

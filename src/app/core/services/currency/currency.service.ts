import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ENVIRONMENT } from "@app/app.module";
import { Environment } from "@core/types/environment";
import { Currency } from "@core/types/currency.interface";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment
  ) {
  }

  getCurrencies() {
    return this.http.get<Currency[]>(`${this.env.apiUrlCompany}/currency`)
  }
}

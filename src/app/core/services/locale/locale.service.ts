import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ENVIRONMENT } from "@app/app.module";
import { Environment } from "@core/types/environment";
import { LocaleResourceResponse } from "@core/types/locale-resource.interface";

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment
  ) {
  }

  getUserLocales(userId: string) {
    return this.http.post<LocaleResourceResponse>(`${this.env.apiUrlCompany}/locale-resource/${userId}`, {})
  }
}

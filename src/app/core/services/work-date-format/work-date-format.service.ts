import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ENVIRONMENT } from "@app/app.module";
import { Environment } from "@core/types/environment";

@Injectable({
  providedIn: 'root'
})
export class WorkDateFormatService {
  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment
  ) {
  }

  getWorkDateFormat(userId: string) {
    return this.http.post<any>(`${this.env.apiUrlCompany}/work-date-format/${userId}`, {})
  }

}

import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ENVIRONMENT } from "@app/app.module";
import { Environment } from "@core/types/environment";
import { Timezone } from "@core/types/timezone.interface";

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {

  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment
  ) {
  }

  getUserTimezones(userId: string, companyId: string) {
    return this.http.get<Timezone[]>(`${this.env.apiUrlCompany}/timezone/${userId}/${companyId}`)
  }
}

import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ENVIRONMENT} from "@app/app.module";
import {Environment} from "@core/types/environment";
import {AuthService} from "@core/services/account/auth.service";
import {Observable} from "rxjs";
import {createHttpParams} from "@shared/utils/create-http-params";
import {EmploymentTypeResponse} from "@core/types/employment-type.model";

@Injectable({
  providedIn: 'root'
})
export class EmploymentTypeService {

  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment,
    private authService: AuthService
  ) { }

  user = this.authService.getCurrentUser();

  getEmploymentTypeList(pageSize: number, pageIndex: number): Observable<EmploymentTypeResponse> {
    const params = createHttpParams({ pageSize, pageIndex });
    return this.http.post<EmploymentTypeResponse>(`${this.env.apiUrlCompany}/employment-type/${this.user.userId}/${this.user.companyId}`, {}, { params });
  }
}

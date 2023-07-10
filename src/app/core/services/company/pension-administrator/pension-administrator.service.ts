import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ENVIRONMENT} from "@app/app.module";
import {Environment} from "@core/types/environment";
import {AuthService} from "@core/services/account/auth.service";
import {Observable} from "rxjs";
import {createHttpParams} from "@shared/utils/create-http-params";
import {PensionAdministratorResponse} from "@core/types/pension-administrator.model";

@Injectable({
  providedIn: 'root'
})
export class PensionAdministratorService {

  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment,
    private authService: AuthService
  ) { }

  user = this.authService.getCurrentUser();

  getPensionAdministratorList(pageSize: number, pageIndex: number): Observable<PensionAdministratorResponse> {
    const params = createHttpParams({ pageSize, pageIndex });
    return this.http.post<PensionAdministratorResponse>(`${this.env.apiUrlCompany}/pension-administrator/${this.user.userId}/${this.user.companyId}`, {}, { params });
  }
}

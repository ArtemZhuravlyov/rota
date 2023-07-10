import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ENVIRONMENT} from "@app/app.module";
import {Environment} from "@core/types/environment";
import {AuthService} from "@core/services/account/auth.service";
import {Observable} from "rxjs";
import {createHttpParams} from "@shared/utils/create-http-params";
import {State} from "@core/types/state.model";

@Injectable({
  providedIn: 'root'
})
export class StateRegionService {

  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment,
    private authService: AuthService
  ) { }

  user = this.authService.getCurrentUser();

  getStateRegionList(pageSize: number, pageIndex: number): Observable<State> {
    const params = createHttpParams({ pageSize, pageIndex });
    return this.http.post<State>(`${this.env.apiUrlCompany}/state-region/${this.user.userId}/${this.user.companyId}`, {}, { params });
  }
}

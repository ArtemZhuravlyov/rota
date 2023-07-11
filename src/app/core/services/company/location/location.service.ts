import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ENVIRONMENT} from "@app/app.module";
import {Environment} from "@core/types/environment";
import {AuthService} from "@core/services/account/auth.service";
import {catchError, Observable, throwError} from "rxjs";
import {createHttpParams} from "@shared/utils/create-http-params";
import {LocationResponse} from "@core/types/location.model";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment,
    private authService: AuthService
  ) { }

  user = this.authService.getCurrentUser();

  getLocationList(pageSize: number, pageIndex: number): Observable<LocationResponse> {
    const params = createHttpParams({ pageSize, pageIndex });
    return this.http.post<LocationResponse>(`${this.env.apiUrlCompany}/location/${this.user.userId}/${this.user.companyId}`, {}, { params })
      .pipe(
        catchError(err => throwError(() => new Error(err))),
      );
  }
}

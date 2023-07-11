import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ENVIRONMENT} from "@app/app.module";
import {Environment} from "@core/types/environment";
import {AuthService} from "@core/services/account/auth.service";
import {Observable} from "rxjs";
import {createHttpParams} from "@shared/utils/create-http-params";
import {PaymentMethodResponse} from "@core/types/payment-method.model";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment,
    private authService: AuthService
  ) { }

  user = this.authService.getCurrentUser();

  getPaymentMethodList(pageSize: number, pageIndex: number): Observable<PaymentMethodResponse> {
    const params = createHttpParams({ pageSize, pageIndex });
    return this.http.post<PaymentMethodResponse>(`${this.env.apiUrlCompany}/payment-method/${this.user.userId}/${this.user.companyId}`, {}, { params });
  }
}

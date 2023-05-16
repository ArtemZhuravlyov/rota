import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { ENVIRONMENT } from "@app/app.module";
import { Environment } from "@core/types/environment";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment
  ) {
  }

  passwordRecovery(body: { email: string }) {
    return this.http.post(`${this.env.apiUrlAccount}/password-recovery`, body);
  }
}

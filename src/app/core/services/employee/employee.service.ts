import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ENVIRONMENT } from "@app/app.module";
import { Environment } from "@core/types/environment";
import { Observable } from "rxjs";
import { AuthService } from "@core/services/account/auth.service";

type RecordFileResult = Observable<{ id: string }>;

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment,
    private authService: AuthService,
  ) {
  }

  getEmployeesList(): Observable<any> {
    const { companyId, userId } = this.authService.getCurrentUser();
    return this.http.post(`${this.env.apiUrlEmployee}/employee/${userId}/${companyId}`, {}, {});
  }

  createNewEmployee(form: any): any {
    console.log(form);
  }

  recordFile(userId: string, companyId: string, uploadFile: any): RecordFileResult {
    return this.http.post(`${this.env.apiUrlEmployee}/employee/process/${userId}/${companyId}/records`, uploadFile) as RecordFileResult;
  }

}

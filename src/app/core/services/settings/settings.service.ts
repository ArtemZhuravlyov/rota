import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ENVIRONMENT } from "@app/app.module";
import { Environment } from "@core/types/environment";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment
  ) {
  }

  createCompanyPreference(userId: string, companyId: string, body: any) {
    return this.http.post<any>(`${this.env.apiUrlCompany}/company-preference/create/${userId}/${companyId}`, body)
  }

  getCompanyPreference(userId: string, companyId: string) {
    return this.http.get<any>(`${this.env.apiUrlCompany}/company-preference/${userId}/${companyId}`)
  }

  createWorkflowPreference(userId: string, companyId: string, body: any) {
    return this.http.post<any>(`${this.env.apiUrlCompany}/workflow-preference/create/${userId}/${companyId}`, body)
  }
  getWorkflowPreference(userId: string, companyId: string) {
    return this.http.get<any>(`${this.env.apiUrlCompany}/workflow-preference/${userId}/${companyId}`)
  }

  createPayrollPreference(userId: string, companyId: string, body: any) {
    return this.http.post<any>(`${this.env.apiUrlCompany}/payroll-preference/create/${userId}/${companyId}`, body)
  }
  getPayrollPreference(userId: string, companyId: string) {
    return this.http.get<any>(`${this.env.apiUrlCompany}/payroll-preference/${userId}/${companyId}`)
  }

  createTimesheetPreference(userId: string, companyId: string, body: any) {
    return this.http.post<any>(`${this.env.apiUrlCompany}/timesheet-preference/create/${userId}/${companyId}`, body)
  }
  getTimesheetPreference(userId: string, companyId: string) {
    return this.http.get<any>(`${this.env.apiUrlCompany}/timesheet-preference/${userId}/${companyId}`)
  }

  createPayrollAccountingPreference(userId: string, companyId: string, body: any) {
    return this.http.post<any>(`${this.env.apiUrlCompany}/payroll-accounting-preference/create/${userId}/${companyId}`, body)
  }
  getPayrollAccountingPreference(userId: string, companyId: string) {
    return this.http.get<any>(`${this.env.apiUrlCompany}/payroll-accounting-preference/${userId}/${companyId}`)
  }

  createLeaveManagementPreference(userId: string, companyId: string, body: any) {
    return this.http.post<any>(`${this.env.apiUrlCompany}/leave-management-preference/create/${userId}/${companyId}`, body)
  }
  getLeaveManagementPreference(userId: string, companyId: string) {
    return this.http.get<any>(`${this.env.apiUrlCompany}/leave-management-preference/${userId}/${companyId}`)
  }

  getPayDayOptions(userId: string) {
    return this.http.get<any>(`${this.env.apiUrlCompany}/pay-day-option/${userId}`);
  }

  getTrustedDevices(userId: string, companyId: string) {
    return this.http.get<any>(`${this.env.apiUrlCompany}/trusted-device-preference/${userId}/${companyId}/devices`);
  }

  getNotificationFrequency() {
    return this.http.get<any>(`${this.env.apiUrlCompany}/frequency-type`);
  }

  getAlertDays() {
    return this.http.get<any>(`${this.env.apiUrlCompany}/alert-day`);
  }
}

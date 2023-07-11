import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ENVIRONMENT} from "@app/app.module";
import {Environment} from "@core/types/environment";
import {Observable} from "rxjs";
import {PersonalInformation} from "@core/types/settings.interface";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment,
  ) { }

  getGender(userId: string): Observable<PersonalInformation[]> {
    return this.http.get<PersonalInformation[]>(`${this.env.apiUrlCompany}/gender/${userId}`);
  }

  getMaritalStatus(userId: string): Observable<PersonalInformation[]> {
    return this.http.get<PersonalInformation[]>(`${this.env.apiUrlCompany}/marital-status/${userId}`);
  }

  getRelationshipType(userId: string): Observable<PersonalInformation[]> {
    return this.http.get<PersonalInformation[]>(`${this.env.apiUrlCompany}/relationship-type/${userId}`);
  }
}

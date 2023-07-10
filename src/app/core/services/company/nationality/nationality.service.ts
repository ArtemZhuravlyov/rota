import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ENVIRONMENT} from "@app/app.module";
import {Environment} from "@core/types/environment";
import {Observable} from "rxjs";
import {Nationality} from "@core/types/nationality.interface";

@Injectable({
  providedIn: 'root'
})
export class NationalityService {

  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment,
  ) { }

  getNationality(): Observable<Nationality[]> {
    return this.http.get<Nationality[]>(`${this.env.apiUrlCompany}/nationality`);
  }
}

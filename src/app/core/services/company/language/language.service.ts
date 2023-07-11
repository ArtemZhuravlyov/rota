import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ENVIRONMENT} from "@app/app.module";
import {Environment} from "@core/types/environment";
import {Observable} from "rxjs";
import {Language} from "@core/types/language.interface";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment,
  ) { }

  getLanguage(): Observable<Language[]> {
    return this.http.get<Language[]>(`${this.env.apiUrlCompany}/language`);
  }
}

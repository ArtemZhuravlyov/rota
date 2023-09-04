import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENVIRONMENT } from '@app/app.module';
import { Environment } from '@core/types/environment';
import { Language } from '@core/types/language.interface';
import { of, share } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT) private env: Environment,
    private translateService: TranslateService
  ) {}

  setLanguage(key: string) {
    this.translateService.setDefaultLang(key);
  }

  getLanguages() {
    // todo decide where get language after connect api because right now json stores localy
    return of<Language[]>([
      {
        id: '1044d823-929d-ed11-b6c4-b07b255c1bbb',
        name: 'English UK',
        languageCulture: 'en-GB',
        uniqueSeoCode: 'GB',
        flagImageFileName: 'GB',
        rtl: false,
      },
      {
        id: 'd8fb2638-929d-ed11-b6c4-b07b255c2bbb',
        name: 'Українська',
        languageCulture: 'uk-UA',
        uniqueSeoCode: 'UA',
        flagImageFileName: 'ua-flag',
        rtl: false,
      },
    ]);
    // return this.http
    //   .get<Language[]>(`${this.env.apiUrlCompany}/language`)
    //   .pipe(share());
  }
}

import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { LanguageObject } from '../types/language-object.type';
import { environment } from '../../../environments/environment';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';

export class TranslateHttpLoader implements TranslateLoader {
  constructor(
    private http: HttpClient,
    public prefix: string = '/assets/i18n/',
    public suffix: string = '.json'
  ) {}

  /**
   * Gets the translations from the server
   */
  public getTranslation(lang: 'en'): Observable<LanguageObject> {
    return environment.isProductionBuild
      ? this.http.get<LanguageObject>(
          `${this.prefix}${lang}${this.suffix}`
        )
      : fromPromise(import('../languages/languages')).pipe(
          map(({ allLanguages }) => allLanguages[lang])
        );
  }
}

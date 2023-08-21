import {
  APP_INITIALIZER,
  InjectionToken,
  NgModule,
} from '@angular/core';
import {
  BrowserModule,
  DomSanitizer,
} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from '@core/interceptors/auth.interceptor';
import { JwtModule } from '@auth0/angular-jwt';
import { tokenGetter } from '@shared/utils/token-getter';
import { environment } from '../environments/environment';
import { Environment } from '@core/types/environment';
import { MaterialModule } from '@shared/modules/material.module';
import { MatIconRegistry } from '@angular/material/icon';
import { InfoModalComponent } from '@shared/modalWindows/info-modal/info-modal.component';
import { ButtonModule } from '@shared/modules/button/button.module';
import { AuthService } from '@core/services/account/auth.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function matIconsRegistryFactory(
  matIconRegistry: MatIconRegistry,
  domSanitizer: DomSanitizer
): void {
  MaterialModule.forRoot(matIconRegistry, domSanitizer);
}

export const ENVIRONMENT = new InjectionToken<Environment>('ENV');

@NgModule({
  declarations: [AppComponent, InfoModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [window.location.host],
        disallowedRoutes: [],
      },
    }),
    HttpClientModule,
    ButtonModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: matIconsRegistryFactory,
      deps: [MatIconRegistry, DomSanitizer],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthService,
    {
      provide: ENVIRONMENT,
      useValue: environment,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

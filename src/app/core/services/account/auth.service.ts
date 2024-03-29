import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, signal } from '@angular/core';
import {
  AuthRegistration,
  AuthSignIn,
  AuthUser,
} from '../../types/auth.interface';
import {
  BehaviorSubject,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { TOKEN_NAME } from '@shared/utils/token-getter';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ENVIRONMENT } from '@app/app.module';
import { Environment } from '@core/types/environment';
import { Router } from '@angular/router';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';

const USER = 'USER';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private user = signal<AuthUser>({} as AuthUser);
  user$ = new BehaviorSubject<AuthUser>({} as AuthUser);

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    @Inject(ENVIRONMENT) private env: Environment,
    private route: Router
  ) {}
  getCurrentUser(): AuthUser {
    return this.user();
  }

  getCurrentUserId(): string {
    return this.getCurrentUser().userId;
  }

  getCompanyId(): string {
    return this.user().companyId;
  }

  registration(body: AuthRegistration): Observable<AuthUser> {
    return this.http
      .post<AuthUser>(`${this.env.apiUrlAccount}/user/register`, body)
      .pipe(
        tap(authUser => {
          this.setToken(authUser.jwtToken);
          this.setOptions(authUser);
        })
      );
  }

  signIn(body: AuthSignIn): Observable<AuthUser> {
    return this.http
      .post<AuthUser>(`${this.env.apiUrlAccount}/account/login`, body)
      .pipe(
        tap(user => this.setToken(user.jwtToken)),
        switchMap((authUser: AuthUser) =>
          this.setCompanyId(authUser.userId).pipe(
            switchMap(({ companyId }) => {
              const user = { ...authUser, companyId };
              this.setOptions(user);
              return of(user);
            })
          )
        )
      );
  }

  updateCompanyId(companyId: string): void {
    this.setOptions({
      ...this.getUserFormStorage(),
      companyId: companyId,
    });
    this.user$.next(this.getCurrentUser());
  }

  checkUserAuth(): boolean {
    if (this.jwtHelper.isTokenExpired()) {
      this.route.navigate([
        `${NavigationPaths.LOGIN}/${NavigationPaths.SIGN_IN}`,
      ]);
      return false;
    } else {
      const authUser = this.getUserFormStorage();
      this.user.set(authUser);
      this.user$.next(authUser);
      return true;
    }
  }

  clearLocalStorage() {
    localStorage.clear();
  }

  private setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  private setUserLocalStorage(user: AuthUser): void {
    localStorage.setItem(USER, JSON.stringify(user));
  }

  private getUserFormStorage(): AuthUser {
    return JSON.parse(localStorage.getItem(USER) ?? '');
  }

  private setCompanyId(userId: string): Observable<any> {
    return this.http.get<{ companyId: string }>(
      `${this.env.apiUrlAccount}/user-setting/${userId}`
    );
  }

  private setOptions(authUser: AuthUser): void {
    this.setToken(authUser.jwtToken);
    this.user.set(authUser);
    this.user$.next(authUser);
    this.setUserLocalStorage(authUser);
  }
}

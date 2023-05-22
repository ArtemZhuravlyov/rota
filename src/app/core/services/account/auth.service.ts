import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, signal } from "@angular/core";
import { AuthRegistration, AuthSignIn, AuthUser } from "../../types/auth.interface";
import { Observable, tap } from "rxjs";
import { TOKEN_NAME } from "@shared/utils/token-getter";
import { JwtHelperService } from "@auth0/angular-jwt";
import { ENVIRONMENT } from "@app/app.module";
import { Environment } from "@core/types/environment";
import { Router } from "@angular/router";
import { NavigationPaths } from "@core/enums/navigation-paths.enum";

const USER = 'USER';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private user = signal<AuthUser>({} as AuthUser);

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    @Inject(ENVIRONMENT) private env: Environment,
    private route: Router,
  ) {
  }

  getCurrentUser(): AuthUser | undefined {
    return this.user();
  }

  registration(body: AuthRegistration): Observable<AuthUser> {
    return this.http.post<AuthUser>(`${this.env.apiUrlAccount}/user/register`, body).pipe(
      tap(v => this.setOptions(v))
    );
  }

  signIn(body: AuthSignIn): Observable<AuthUser> {
    return this.http.post<AuthUser>(`${this.env.apiUrlAccount}/account/login`, body).pipe(
      tap(v => this.setOptions(v))
    );
  }

  checkUserAuth(): boolean {
    if (this.jwtHelper.isTokenExpired()) {
      this.route.navigate([`${NavigationPaths.LOGIN}/${NavigationPaths.SIGN_IN}`]);
      return false;
    } else {
      this.user.set(this.getUserFormStorage());
      return true;
    }
  }

  private setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  private setUserLocalStorage(user: AuthUser): void {
    localStorage.setItem(USER, JSON.stringify(user))
  }

  private getUserFormStorage(): AuthUser {
    return JSON.parse(localStorage.getItem(USER) ?? '');
  }


  private setOptions(authUser: AuthUser): void {
    this.setToken(authUser.jwtToken);
    this.user.set(authUser);
    this.setUserLocalStorage(authUser);
  }
}

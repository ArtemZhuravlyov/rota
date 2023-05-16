import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { AuthRegistration, AuthSignIn, AuthUser } from "../../types/auth.interface";
import { Observable, ReplaySubject, tap } from "rxjs";
import { TOKEN_NAME } from "@shared/utils/token-getter";
import { JwtHelperService } from "@auth0/angular-jwt";
import { ENVIRONMENT } from "@app/app.module";
import { Environment } from "@core/types/environment";
import { Router } from "@angular/router";
import { NavigationPaths } from "@core/enums/navigation-paths.enum";


@Injectable({ providedIn: 'root' })
export class AuthService {

  private user$ = new ReplaySubject<AuthUser>(1);

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    @Inject(ENVIRONMENT) private env: Environment,
    private route: Router,
  ) {
  }

  getCurrentUser$(): Observable<AuthUser> {
    return this.user$.asObservable();
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
    console.log(this.jwtHelper)
    if (this.jwtHelper.isTokenExpired()) {
      this.route.navigate([`${NavigationPaths.LOGIN}/${NavigationPaths.SIGN_IN}`]);
      return false;
    } else {
      return true;
    }
  }

  private setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }


  private setOptions(authUser: AuthUser): void {
    this.setToken(authUser.jwtToken);
    this.user$.next(authUser);
  }
}

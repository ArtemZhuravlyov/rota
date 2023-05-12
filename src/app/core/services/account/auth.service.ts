import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { AuthRegistration, AuthSignIn, AuthUser } from "../../types/auth.interface";
import { Observable, ReplaySubject, tap } from "rxjs";

export const TOKEN_NAME = 'authToken'
export const USER_ID = 'userId';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private user$ = new ReplaySubject<AuthUser>(1);
  private user!: AuthUser;

  private baseUrl = `${environment.apiUrlAccount}user`;

  constructor(
    private http: HttpClient,
  ) {
    this.checkUserAuth();
  }

  get currentUser$(): Observable<AuthUser> {
    return this.user$.asObservable();
  }

  get currentUser(): AuthUser | null {
    return this.user;
  }

  registration(body: AuthRegistration): Observable<AuthUser> {
    return this.http.post<AuthUser>(`${this.baseUrl}/register`, body).pipe(
      tap(v => this.setOptions(v))
    );
  }

  signIn(body: AuthSignIn): Observable<AuthUser> {
    return this.http.post<AuthUser>(`${environment.apiUrlAccount}account/login`, body).pipe(
      tap(v => this.setOptions(v))
    );
  }

  private checkUserAuth(): void {
    if (!localStorage.getItem(TOKEN_NAME)?.length) {
      localStorage.removeItem(USER_ID);
    } else {
      this.user = { ...this.user, userId: `${localStorage.getItem(USER_ID)}` };
      console.log(this.user)
    }
  }

  private setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  private setUserIdInLocalstorage(userId: string): void {
    localStorage.setItem(USER_ID, userId);
  }

  private setOptions(authUser: AuthUser): void {
    this.setToken(authUser.jwtToken);
    this.setUserIdInLocalstorage(authUser.userId);
    this.user$.next(authUser);
    this.user = authUser;
  }
}

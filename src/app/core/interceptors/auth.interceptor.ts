import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TOKEN_NAME } from "../services/account/auth.service";

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = `bearer ${localStorage.getItem(TOKEN_NAME)}`;
    if (token.length) {
      const newReq = req.clone({
        setHeaders: { authorization: token },
      });
      return next.handle(newReq);
    }
    return next.handle(req);
  }
}

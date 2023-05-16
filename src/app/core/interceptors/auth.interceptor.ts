import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tokenGetter } from "@shared/utils/token-getter";

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = `bearer ${tokenGetter()}`;
    if (token.length) {
      const newReq = req.clone({
        setHeaders: { authorization: token },
      });
      return next.handle(newReq);
    }
    return next.handle(req);
  }
}

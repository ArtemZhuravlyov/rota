import {
  CanActivateFn,
} from '@angular/router';
import { AuthService } from "@core/services/account/auth.service";
import { inject } from "@angular/core";

export const authGuard: CanActivateFn = (): boolean => {
  const authService = inject(AuthService);
  return authService.checkUserAuth()
};

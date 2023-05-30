import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";
import { AuthService } from "@core/services/account/auth.service";
import { CompanyService } from "@core/services/company/company.service";
import { map, Observable, tap } from "rxjs";
import { NavigationPaths } from "@core/enums/navigation-paths.enum";

export const existsRegisteredCompanyGuard: CanActivateFn = (): Observable<boolean> => {
  const authService = inject(AuthService);
  const companyService = inject(CompanyService);
  const router = inject(Router);
  authService.checkUserAuth();

  return companyService.getCompany(authService.getCurrentUser().userId)
    .pipe(
      map(v => !v),
      tap((v) => v
        ? null
        : router.navigate([NavigationPaths.DASHBOARD])
      ),
    );
};

import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { PrintService } from '@core/services/print/print.service';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { benefitListConfig } from '@modules/dashboard/company/configs/benefit-list.config';
import { BenefitService } from '@modules/dashboard/company/benefit/benefit.service';
import { AuthService } from '@core/services/account/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonPaginationParams } from '@core/types/pagination.type';
import { Benefits } from '@core/types/benefit.model';
import { ActionButton } from '@shared/components/action-button/types/action-button.type';
import { ActionButtonName } from '@shared/components/action-button/enums/action-button-name.enum';

@Component({
  selector: 'app-benefit',
  templateUrl: './benefit.component.html',
  styleUrls: ['./benefit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BenefitComponent implements OnInit {
  private printService = inject(PrintService);
  private benefitService = inject(BenefitService);
  private authService = inject(AuthService);
  private destroyRef = inject(DestroyRef);

  public readonly CREATE_NEW_BENEFIT =
    NavigationPaths.CREATE_NEW_BENEFIT;
  public readonly benefitListConfig = benefitListConfig;

  actionConfig: ActionButton[] = [
    { type: ActionButtonName.APPLY, disabled: false },
    { type: ActionButtonName.VIEW_DETAILS, disabled: false },
    { type: ActionButtonName.DELETE, disabled: false },
  ];

  public isLoading = true;

  protected readonly isPrinting$ = this.printService.isPrinting$;

  public benefitsParams$ =
    new BehaviorSubject<CommonPaginationParams>({
      userId: this.authService.user$.value.userId,
      companyId: this.authService.user$.value.companyId,
      pageSize: 10,
      pageIndex: 1,
    });
  public benefits$ = new BehaviorSubject({} as Benefits);

  ngOnInit() {
    this.benefitsParams$
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        switchMap(params => {
          this.isLoading = true;
          return this.benefitService.getList(params);
        })
      )
      .subscribe({
        next: benefits => {
          this.isLoading = false;
          this.benefits$.next(benefits);
        },
        error: () => {
          this.isLoading = false;
        },
      });
  }
}

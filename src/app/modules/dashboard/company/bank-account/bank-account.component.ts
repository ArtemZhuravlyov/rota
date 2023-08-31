import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { bankAccountTableConfig } from '@app/modules/dashboard/company/configs/bank-account-table-config';
import { PageEvent } from '@angular/material/paginator';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { AuthService } from '@core/services/account/auth.service';
import { BankAccountService } from '@core/services/bank-account/bank-account.service';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import {
  TableAction,
  TableActionTypes,
} from '@core/types/data-table';
import { ButtonTypeEnum } from '@core/enums/button-type.enum';
import { PrintService } from '@core/services/print/print.service';
import { BankAccount } from '@core/types/bankAccount.interface';
import { ActionButtonName } from '@shared/components/action-button/enums/action-button-name.enum';
import { ActionButton } from '@shared/components/action-button/types/action-button.type';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BankAccountComponent implements OnInit {
  readonly bankAccountTableConfig = bankAccountTableConfig;
  readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly NavigationPaths = NavigationPaths;
  tableStyle = 'bankAccount';
  bankAccounts$!: Observable<{ bankAccounts: any }>;
  isPrinting$ = this.printService.isPrinting$;
  exporting$ = new BehaviorSubject([]);
  selectedTableAccs$ = this.bankAccountService.selectedTableAccounts$;

  constructor(
    private authService: AuthService,
    private bankAccountService: BankAccountService,
    private printService: PrintService
  ) {}

  ngOnInit() {
    this.setDefaultAccounts();
  }

  onActionClicked(event: TableAction) {
    const selectedAccounts$ = of(
      this.bankAccountService.selectedTableAccounts
    ).pipe(
      map((accounts: any) => ({
        bankAccounts: accounts,
        totalCount: accounts.length,
      }))
    );
    switch (event.action) {
      case TableActionTypes.DELETE:
        this.bankAccountService
          .deleteBankAccount(event.payload.id, event.payload)
          .subscribe();
        break;
      case TableActionTypes.EXPORT:
        const exportTable =
          this.bankAccountService.selectedTableAccounts.map(
            (r: BankAccount) => ({
              bank: r.bankName,
              sortCode: r.sortCode,
              AccountNumber: r.accountNumber,
              swift: r.swiftCode,
              iban: r.iban,
            })
          );
        this.exporting$.next(exportTable);
        break;
    }
  }

  @HostListener('window:afterprint', ['$event'])
  onPrintWindowClosed(): void {
    this.printService.isPrinting$.next(false);
    this.setDefaultAccounts();
  }

  onPageChange({ pageSize, pageIndex }: PageEvent) {
    this.bankAccounts$ = this.bankAccountService.getBankAccount(
      this.authService.getCurrentUserId(),
      this.authService.getCompanyId(),
      pageSize,
      pageIndex
    );
  }

  onSelectedTableItems(items: any) {
    this.bankAccountService.selectedTableAccounts = [
      ...items.values(),
    ];
    this.bankAccountService.selectedTableAccounts$.next([
      ...items.values(),
    ]);
  }

  setDefaultAccounts() {
    this.bankAccounts$ = this.bankAccountService.getBankAccount(
      this.authService.getCurrentUserId(),
      this.authService.getCompanyId(),
      2,
      0
    );
  }

  actionConfig: ActionButton[] = [
    { type: ActionButtonName.VIEW_DETAILS, disabled: false },
    { type: ActionButtonName.DELETE, disabled: false },
  ];
}

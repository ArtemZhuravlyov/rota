import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { bankAccountTableConfig } from '@app/modules/dashboard/company/configs/bank-account-table-config';
import { PageEvent } from '@angular/material/paginator';
import { BehaviorSubject, map, Observable, of, take } from 'rxjs';
import { AuthService } from '@core/services/account/auth.service';
import { BankAccountService } from '@core/services/bank-account/bank-account.service';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import {
  TableAction,
  TableActionConfig,
  TableActionTypes,
} from '@core/types/data-table';
import { ButtonTypeEnum } from '@core/enums/button-type.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { PrintService } from '@core/services/print/print.service';
import { debounceTime } from 'rxjs/operators';
import { BankAccount } from '@core/types/bankAccount.interface';

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
    private printService: PrintService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
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
      case TableActionTypes.ADD:
        this.bankAccountService.selectedBankAccount = event.payload;
        break;
      case TableActionTypes.PRINT:
        this.isPrinting$
          .pipe(debounceTime(1), take(1))
          .subscribe(r => {
            if (r) {
              window.print();
            }
          });
        this.bankAccounts$ = selectedAccounts$;
        this.printService.isPrinting$.next(true);
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
      case TableActionTypes.IMPORT:
        console.log('import', event.action);
        break;
      case TableActionTypes.VIEW:
        this.bankAccountService.action = event.action;
        this.bankAccountService.selectedBankAccount = event.payload;
        this.router.navigate([NavigationPaths.CREATE_BANK_ACCOUNT], {
          relativeTo: this.route,
        });
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

  actionConfig: TableActionConfig[] = [
    {
      icon: 'eye',
      disabled: false,
      type: TableActionTypes.VIEW,
      styleConfig: {
        width: '30px',
        height: '30px',
        background: '#FFFFFF',
        border: '1px solid #E4EDF4',
        color: '#91ACC2',
      },
    },
    {
      icon: 'delete',
      disabled: false,
      type: TableActionTypes.DELETE,
      styleConfig: {
        width: '30px',
        height: '30px',
        background: '#FFFFFF',
        border: '1px solid #E4EDF4',
        color: '#FF0000',
      },
    },
  ];
}

import {ChangeDetectionStrategy, Component, HostListener, OnInit} from '@angular/core';
import { bankAccountTableConfig } from "@app/modules/dashboard/company/configs/bank-account-table-config";
import { PageEvent } from "@angular/material/paginator";
import {map, Observable, of, take} from "rxjs";
import { AuthService } from "@core/services/account/auth.service";
import { BankAccountService } from "@core/services/bank-account/bank-account.service";
import { NavigationPaths } from "@core/enums/navigation-paths.enum";
import { TableAction, TableActionTypes } from "@core/types/data-table";
import { ButtonTypeEnum } from "@core/enums/button-type.enum";
import {ActivatedRoute, Router} from "@angular/router";
import {PrintService} from "@core/services/print/print.service";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BankAccountComponent implements OnInit{
  readonly bankAccountTableConfig = bankAccountTableConfig;
  readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly NavigationPaths = NavigationPaths;
  tableStyle = 'bankAccount'
  bankAccounts$!: Observable<{ bankAccounts: any }>;
  isPrinting$ = this.printService.isPrinting$;


  constructor(
    private authService: AuthService,
    private bankAccountService: BankAccountService,
    private printService: PrintService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ){}

  ngOnInit() {
    this.bankAccounts$ = this.bankAccountService.getBankAccount(this.authService.getCurrentUserId(), this.authService.getCompanyId(), 2, 0)
  }


  onActionClicked(event: TableAction){
    switch (event.action){
      case TableActionTypes.DELETE:
        this.bankAccountService.deleteBankAccount(event.payload.id, event.payload).subscribe();
        break;
      case TableActionTypes.ADD:
        this.bankAccountService.selectedBankAccount = event.payload;
        break;
      case TableActionTypes.PRINT:
        this.isPrinting$.pipe(
          debounceTime(1),
          take(1)
        ).subscribe((r) => {
          if (r) {
            window.print()
          }
        })
        let selectedAccounts$ = of(this.bankAccountService.selectedTableAccounts).pipe(
          map((accounts: any) => ({
            bankAccounts: accounts,
            totalCount: accounts.length
          })));
        this.bankAccounts$ = selectedAccounts$;
        this.printService.isPrinting$.next(true);
        break;
      case TableActionTypes.EXPORT:
        console.log('EXPORT', event.action);
        break;
      case TableActionTypes.IMPORT:
        console.log('import', event.action);
        break;
      case TableActionTypes.VIEW:
        this.bankAccountService.action = event.action;
        this.bankAccountService.selectedBankAccount = event.payload;
        this.router.navigate(
          [NavigationPaths.CREATE_BANK_ACCOUNT],
          { relativeTo: this.route })
      break;
      }
    }

  @HostListener('window:afterprint', ['$event'])
  onPrintWindowClosed(): void{
    this.printService.isPrinting$.next(false);
    this.bankAccounts$ = this.bankAccountService.getBankAccount(this.authService.getCurrentUserId(), this.authService.getCompanyId(), 2, 0)
  }

  onPageChange({pageSize, pageIndex}: PageEvent){
    this.bankAccounts$ = this.bankAccountService.getBankAccount(this.authService.getCurrentUserId(), this.authService.getCompanyId(), pageSize, pageIndex)
  }

  onSelectedTableItems(items: any){
   this.bankAccountService.selectedTableAccounts = [...items.values()];
  }

  actionConfig = [
    { icon: 'eye', type: TableActionTypes.VIEW, styleConfig: {
        'width': '30px',
        'height': '30px',
        'background': '#FFFFFF',
        'border': '1px solid #E4EDF4',
        'color': '#91ACC2'
      } },
    { icon: 'delete', type: TableActionTypes.DELETE, styleConfig: {
        'width': '30px',
        'height': '30px',
        'background': '#FFFFFF',
        'border': '1px solid #E4EDF4',
        'color': '#FF0000'} },
  ];
}

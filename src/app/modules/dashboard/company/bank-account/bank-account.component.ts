import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { bankAccountTableConfig } from "@app/modules/dashboard/company/configs/bank-account-table-config";
import { PageEvent } from "@angular/material/paginator";
import { Observable } from "rxjs";
import { AuthService } from "@core/services/account/auth.service";
import { BankAccountService } from "@core/services/bank-account/bank-account.service";
import { NavigationPaths } from "@core/enums/navigation-paths.enum";
import { BankAccount } from "@core/types/bankAccount.interface";
import { TableAction, TableActionTypes } from "@core/types/data-table";
import { ButtonTypeEnum } from "@core/enums/button-type.enum";

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
  bankAccounts$!: Observable<BankAccount[]>;


  constructor(
    private authService: AuthService,
    private bankAccountService: BankAccountService
  ){}

  ngOnInit() {
    this.bankAccounts$ = this.bankAccountService.getBankAccount(this.authService.getCurrentUserId(), this.authService.getCompanyId(), 2, 0)
  }

  onActionClicked(event: TableAction){
    if (event.action === 'delete'){
      this.bankAccountService.deleteBankAccount(this.authService.getCurrentUserId(), event.payload.companyId, event.payload.id).subscribe()
    }
  }

  onPageChange({pageSize, pageIndex}: PageEvent){
    this.bankAccounts$ = this.bankAccountService.getBankAccount(this.authService.getCurrentUserId(), this.authService.getCompanyId(), pageSize, pageIndex)
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

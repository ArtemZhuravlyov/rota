import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  bankCardInformationFormFields,
  rsaFormFields,
  taxationSettingsFormFields,
} from '@app/modules/dashboard/employee/create-employee/employee-settings/payment-information/configs/payment-information-form.config';
import { BankAccountService } from '@core/services/bank-account/bank-account.service';
import { AuthService } from '@core/services/account/auth.service';
import { tap } from 'rxjs';
import { PaymentService } from '@core/services/company/payment/payment.service';
import { PensionAdministratorService } from '@core/services/company/pension-administrator/pension-administrator.service';
import { TranslateKey } from '../../../../../../../assets/i18n/enums/translate-key.enum';

const PAGE_SIZE = 100;
const PAGE_INDEX = 0;

@Component({
  selector: 'app-payment-information',
  templateUrl: './payment-information.component.html',
  styleUrls: ['./payment-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentInformationComponent implements OnInit {
  protected PAYMENT_INFORMATION = TranslateKey.PAYMENT_INFORMATION;

  bankCardInformationFormFields = bankCardInformationFormFields;
  taxationSettingsFormFields = taxationSettingsFormFields;
  rsaFormFields = rsaFormFields;

  form!: FormGroup;

  constructor(
    private readonly bankAccountService: BankAccountService,
    private readonly authService: AuthService,
    private readonly paymentService: PaymentService,
    private readonly pensionAdministratorService: PensionAdministratorService
  ) {}

  ngOnInit(): void {
    this.bankAccountService
      .getBankAccount(
        this.authService.getCurrentUserId(),
        this.authService.getCompanyId(),
        PAGE_SIZE,
        PAGE_INDEX
      )
      .pipe(
        tap(
          response =>
            (this.bankCardInformationFormFields[0].data =
              response.bankAccounts.map(bankAccount => ({
                displayName: bankAccount.bankName,
                value: bankAccount.id,
              })))
        )
      )
      .subscribe();

    this.paymentService
      .getPaymentMethodList(PAGE_SIZE, PAGE_INDEX)
      .pipe(
        tap(
          response =>
            (this.taxationSettingsFormFields[0].data =
              response.paymentMethods.map(paymentMethod => ({
                displayName: paymentMethod.name,
                value: paymentMethod.id,
              })))
        )
      )
      .subscribe();

    this.pensionAdministratorService
      .getPensionAdministratorList(PAGE_SIZE, PAGE_INDEX)
      .pipe(
        tap(response => {
          this.rsaFormFields[2].data =
            response.pensionAdministrators.map(pension => ({
              displayName: pension.name,
              value: pension.id,
            }));
        })
      )
      .subscribe();
  }
}

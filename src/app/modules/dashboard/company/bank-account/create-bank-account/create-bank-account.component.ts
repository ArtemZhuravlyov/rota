import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { AuthService } from '@core/services/account/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BankAccountService } from '@core/services/bank-account/bank-account.service';
import { FormField } from '@core/types/form-builder.model';
import { FormGroup, Validators } from '@angular/forms';
import { finalize, tap } from 'rxjs';
import { TranslateKey } from '../../../../../../assets/i18n/enums/translate-key.enum';

@Component({
  selector: 'app-create-bank-account',
  templateUrl: './create-bank-account.component.html',
  styleUrls: ['./create-bank-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateBankAccountComponent implements OnInit {
  protected readonly NavigationPaths = NavigationPaths;
  protected readonly COMPANY_ACCOUNT_DETAILS =
    TranslateKey.COMPANY_ACCOUNT_DETAILS;

  formFields: FormField[] = [
    {
      key: 'bankName',
      label: 'Bank',
      componentType: 'textbox',
      inputType: 'text',
      validators: [Validators.required],
      placeholder: 'ENTER',
      maxLength: 500,
    },
    {
      key: 'sortCode',
      label: 'Sort Code',
      componentType: 'textbox',
      inputType: 'text',
      validators: [Validators.required],
      placeholder: 'ENTER',
      maxLength: 500,
    },
    {
      key: 'email',
      label: 'EMAIL',
      componentType: 'textbox',
      inputType: 'email',
      placeholder: 'ENTER',
      validators: [Validators.required, Validators.email],
      maxLength: 50,
    },
    {
      key: 'accountNumber',
      label: 'Account Number',
      componentType: 'textbox',
      inputType: 'text',
      placeholder: 'ENTER',
      validators: [Validators.required],
      maxLength: 50,
    },
    {
      key: 'swiftCode',
      label: 'SWIFT/BIC Code',
      componentType: 'textbox',
      inputType: 'text',
      placeholder: 'ENTER',
      validators: [Validators.required],
      maxLength: 50,
    },
    {
      key: 'iban',
      label: 'IBAN',
      componentType: 'textbox',
      inputType: 'text',
      placeholder: 'ENTER',
      validators: [Validators.required],
      maxLength: 50,
    },
  ];

  form!: FormGroup;

  constructor(
    private readonly authService: AuthService,
    private readonly bankAccountService: BankAccountService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  //need a comment on chat
  ngOnInit() {
    setTimeout(() => this.addDataToForm(), 100);
  }

  createBakAccount(form: FormGroup) {
    if (this.bankAccountService.action === 'view') {
      this.bankAccountService
        .editBankAccount(
          this.bankAccountService.selectedBankAccount,
          form.getRawValue()
        )
        .pipe(
          tap(() =>
            this.router.navigate([NavigationPaths.BACK], {
              relativeTo: this.route,
            })
          )
        )
        .subscribe();
    } else {
      this.bankAccountService
        .createBankAccount(
          this.authService.getCurrentUserId(),
          this.authService.getCompanyId(),
          form.getRawValue()
        )
        .pipe(
          finalize(() => {
            this.router.navigate([NavigationPaths.BACK], {
              relativeTo: this.route,
            });
          })
        )
        .subscribe();
    }
  }

  addDataToForm() {
    if (
      Object.keys(this.bankAccountService.selectedBankAccount).length
    ) {
      Object.keys(
        this.bankAccountService.selectedBankAccount
      ).forEach((key: any) => {
        if (this.form.controls[key]) {
          this.form.controls[key].setValue(
            this.bankAccountService.selectedBankAccount[key]
          );
        }
      });
    }
  }
}

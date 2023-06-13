import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationPaths } from "@core/enums/navigation-paths.enum";
import { ButtonTypeEnum } from "@core/enums/button-type.enum";
import { AuthService } from "@core/services/account/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { BankAccountService } from "@core/services/bank-account/bank-account.service";
import { FormField } from "@core/types/form-builder.model";
import { FormGroup, Validators } from "@angular/forms";
import { finalize } from "rxjs";

@Component({
  selector: 'app-create-bank-account',
  templateUrl: './create-bank-account.component.html',
  styleUrls: ['./create-bank-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateBankAccountComponent {

  protected readonly NavigationPaths = NavigationPaths;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;


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


  constructor( private readonly authService: AuthService,
               private readonly router: Router,
               private readonly bankAccountService: BankAccountService,
               private readonly activatedRoute: ActivatedRoute
               ) {}

  createBakAccount(){
    this.bankAccountService.createBankAccount(this.authService.getCurrentUserId(), this.authService.getCompanyId(), this.form.getRawValue()).pipe(
      finalize( () => {
        this.router.navigate([NavigationPaths.BACK], {relativeTo: this.activatedRoute});
      })
    ).subscribe()
  }

}

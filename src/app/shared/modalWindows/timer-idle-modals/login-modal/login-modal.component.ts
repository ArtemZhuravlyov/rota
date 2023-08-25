import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '@shared/modules/button/button.module';
import { TimerFormatModule } from '@shared/pipes/timer-format/timer-format.module';
import { FormField } from '@core/types/form-builder.model';
import { FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '@shared/utils/custom-validators/password.validator';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { FormBuilderModule } from '@shared/modules/form-builder/form-builder.module';
import { ButtonTypeEnum } from '@core/enums/button-type.enum';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '@core/services/account/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    TimerFormatModule,
    FormBuilderModule,
  ],
  templateUrl: './login-modal.component.html',
  styleUrls: ['../timer-idle-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginModalComponent {
  private dialogRef = inject(MatDialogRef);
  private authService = inject(AuthService);
  private route = inject(Router);

  form!: FormGroup;
  formFields: FormField[] = [
    {
      key: 'password',
      label: 'PASSWORD',
      componentType: 'textbox',
      inputType: 'password',
      placeholder: 'ENTER_PASSWORD',
      validators: [Validators.required, passwordValidator(true)],
      icon: 'lock',
      hint: 'FORGOT_PASSWORD_LINK',
      hintLink: [
        NavigationPaths.LOGIN,
        NavigationPaths.PASSWORD_RECOVERY,
      ],
      extendedValidation: true,
    },
  ];

  onSubmit(): void {
    this.form.disable();
    const { email } = this.authService.getCurrentUser();
    const { password } = this.form.value;
    this.authService.signIn({ email, password }).subscribe({
      complete: () => {
        this.dialogRef.close();
        this.route.navigate([
          NavigationPaths.BACK,
          NavigationPaths.DASHBOARD,
        ]);
      },
      error: () => {
        this.onClose();
      },
    });
  }

  onClose(): void {
    this.authService.clearLocalStorage();
    this.authService.checkUserAuth();
  }

  protected readonly ButtonTypeEnum = ButtonTypeEnum;
}

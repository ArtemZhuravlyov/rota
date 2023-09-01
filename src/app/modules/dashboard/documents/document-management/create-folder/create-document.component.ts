import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { ButtonTypeEnum } from '@core/enums/button-type.enum';
import { FormField } from '@core/types/form-builder.model';
import { FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { AuthService } from '@core/services/account/auth.service';
import { Router } from '@angular/router';
import { DocumentsService } from '@core/services/documents/documents.service';
import { folderFormConfig } from '@modules/dashboard/documents/configs/folder-form.config';

@Component({
  selector: 'app-create-folder',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateDocumentComponent {
  protected readonly NavigationPaths = NavigationPaths;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;

  formFields: FormField[] = folderFormConfig;
  form!: FormGroup;

  constructor(
    private readonly documentsService: DocumentsService,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  createDocument(): void {
    console.log(this.form.getRawValue());
    this.documentsService
      .createFolder(
        this.form.getRawValue(),
        this.authService.getCurrentUserId(),
        this.authService.getCompanyId()
      )
      .pipe(
        finalize(() => {
          this.router.navigate([NavigationPaths.BACK]);
        })
      )
      .subscribe();
  }
}

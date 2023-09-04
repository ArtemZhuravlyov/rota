import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
} from '@angular/core';
import { FormField } from '@core/types/form-builder.model';
import { FormGroup } from '@angular/forms';
import { DocumentsService } from '@core/services/documents/documents.service';
import { AuthService } from '@core/services/account/auth.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { ButtonTypeEnum } from '@core/enums/button-type.enum';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { ApprovalService } from '@core/services/documents/approval.service';
import { folderFormConfig } from '@modules/dashboard/documents/configs/folder-form.config';

@Component({
  selector: 'app-edit-folder',
  templateUrl: './edit-folder.component.html',
  styleUrls: ['./edit-folder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditFolderComponent implements OnDestroy {
  protected readonly NavigationPaths = NavigationPaths;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  private folderData: { [key: string]: string } = {
    id: '',
    name: '',
    description: '',
  };

  formFields: FormField[] = folderFormConfig;
  form!: FormGroup;

  constructor(
    private readonly documentsService: DocumentsService,
    private readonly authService: AuthService,
    private readonly router: Router,
    private appService: ApprovalService
  ) {}

  ngOnInit() {
    this.appService.currentValue.subscribe({
      next: value => (this.folderData = value),
    });
    this.formFields.map(
      item => (item.data = this.folderData[item.key])
    );
  }

  editFolder(): void {
    const body = {
      ...this.form.getRawValue(),
      id: this.folderData['id'],
    };

    this.documentsService
      .editFolder(
        body,
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

  //todo refresh form fields
  ngOnDestroy() {
    this.appService.updateValue({});
  }
}

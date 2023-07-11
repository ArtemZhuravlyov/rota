import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  documentsTableConfig
} from "@app/modules/dashboard/employee/edit-employee/employee-profile/documents/configs/documents-table.config";
import {
  documentsFormConfig
} from "@app/modules/dashboard/employee/edit-employee/employee-profile/documents/configs/documents-form.config";

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentsComponent {

  documentsTableConfig = documentsTableConfig;
  documentsFormConfig = documentsFormConfig;
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  documentsFormConfig
} from "@app/modules/dashboard/employee/info-employee/employee-profile/documents/configs/documents-form.config";
import {
  documentsTableConfig
} from "@app/modules/dashboard/employee/info-employee/employee-profile/documents/configs/documents-table.config";

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

import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  documentsTableConfig
} from "@app/modules/dashboard/employee/create-employee/employee-profile/documents/configs/documents-table.config";
import {TableActionTypes} from "@core/types/data-table";
import {
  documentsFormConfig
} from "@app/modules/dashboard/employee/create-employee/employee-profile/documents/configs/documents-form.config";

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentsComponent {

  documentsTableConfig = documentsTableConfig;
  documentsFormConfig = documentsFormConfig;

  actionConfig = [
    { icon: 'delete', type: TableActionTypes.DELETE, styleConfig: {
        'width': '30px',
        'height': '30px',
        'background': '#FFFFFF',
        'border': '1px solid #E4EDF4',
        'color': '#FF0000'} },
  ];
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { documentsSubMenuConfig } from "./configs/documents-sub-menu-config";

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentsComponent {

  documentsSubMenuConfig = documentsSubMenuConfig;
}

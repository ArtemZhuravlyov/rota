import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { TranslateKey } from '../../../../../assets/i18n/enums/translate-key.enum';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  title = TranslateKey.USER;
  routerLinkToImport = [
    NavigationPaths.BACK,
    NavigationPaths.IMPORT_USER,
  ];

  tableConfig = [
    {
      fieldName: 'firstName',
      type: 'SINGLE_TEXT',
    },
    {
      fieldName: 'lastName',
      type: 'SINGLE_TEXT',
    },
  ];

  constructor() {}

  ngOnInit() {}
}

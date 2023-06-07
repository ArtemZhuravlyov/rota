import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationPaths } from "@core/enums/navigation-paths.enum";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  title = 'USER';
  routerLinkToImport = [
    NavigationPaths.BACK,
    NavigationPaths.IMPORT_USER
  ];

  constructor() {}

  ngOnInit() {

  }
}

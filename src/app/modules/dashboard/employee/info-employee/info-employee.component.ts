import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ButtonTypeEnum} from "@core/enums/button-type.enum";
import {NavigationPaths} from "@core/enums/navigation-paths.enum";
import {ImageUrl} from "@core/enums/image-url";

@Component({
  selector: 'app-info-employee',
  templateUrl: './info-employee.component.html',
  styleUrls: ['./info-employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoEmployeeComponent {

  buttonTypeEnum = ButtonTypeEnum;
  protected readonly NavigationPaths = NavigationPaths;
  imgUrl = ImageUrl.PROFILE;
  isShow = false;

  constructor() {
  }

  onToggleShow(): void {
    this.isShow = !this.isShow;
  }
}

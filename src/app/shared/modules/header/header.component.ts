import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonTypeEnum } from "../../../core/enums/button-type.enum";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  buttonTypeEnum = ButtonTypeEnum;

}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ButtonTypeEnum} from "@core/enums/button-type.enum";

@Component({
  selector: 'app-info-employee',
  templateUrl: './info-employee.component.html',
  styleUrls: ['./info-employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoEmployeeComponent {

    buttonTypeEnum = ButtonTypeEnum;
}

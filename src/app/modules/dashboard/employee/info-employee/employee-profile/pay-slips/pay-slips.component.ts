import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  paySlipsTableConfig
} from "@app/modules/dashboard/employee/info-employee/employee-profile/pay-slips/configs/pay-slips-table.config";

@Component({
  selector: 'app-pay-slips',
  templateUrl: './pay-slips.component.html',
  styleUrls: ['./pay-slips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaySlipsComponent {

  paySlipsTableConfig = paySlipsTableConfig;
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  qualificationsFormConfig
} from "@app/modules/dashboard/employee/create-employee/employee-profile/qualifications/configs/qualifications-form.config";
import {
  qualificationsTableConfig
} from "@app/modules/dashboard/employee/create-employee/employee-profile/qualifications/configs/qualifications-table.config";

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QualificationsComponent {

  qualificationsFormConfig = qualificationsFormConfig;
  qualificationsTableConfig = qualificationsTableConfig;
}

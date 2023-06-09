import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  groupFunctionDivisionFormConfig
} from "@app/modules/dashboard/company/group-function-division/configs/group-function-division-form.config";

@Component({
  selector: 'app-create-group-function-division',
  templateUrl: './create-group-function-division.component.html',
  styleUrls: ['./create-group-function-division.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateGroupFunctionDivisionComponent {

  protected readonly groupFunctionDivisionFormConfig = groupFunctionDivisionFormConfig;
}

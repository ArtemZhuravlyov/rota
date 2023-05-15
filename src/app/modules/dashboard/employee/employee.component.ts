import { ChangeDetectionStrategy, Component } from '@angular/core';
import { employeesSubMenuConfig } from "./configs/employees-sub-menu-config";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent {

  employeesSubMenuConfig = employeesSubMenuConfig;
}

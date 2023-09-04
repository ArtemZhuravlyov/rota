import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { EmployeeService } from '@core/services/employee/employee.service';
import { employeesListConfig } from '@app/modules/dashboard/employee/configs/employees-list.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-record',
  templateUrl: './employees-record.component.html',
  styleUrls: ['./employees-record.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesRecordComponent {
  protected readonly employeesListConfig = employeesListConfig;

  employeesList$ = this.employeeService.getEmployeesList();

  constructor(private readonly employeeService: EmployeeService) {}

  protected readonly NavigationPaths = NavigationPaths;
}

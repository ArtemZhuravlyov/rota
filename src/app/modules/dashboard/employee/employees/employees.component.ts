import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { ButtonTypeEnum } from '@core/enums/button-type.enum';
import { EmployeeService } from '@core/services/employee/employee.service';
import {
  TableAction,
  TableActionTypes,
} from '@core/types/data-table';
import { PageEvent } from '@angular/material/paginator';
import { employeesListConfig } from '@app/modules/dashboard/employee/configs/employees-list.config';
import { AuthService } from '@core/services/account/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesComponent {
  protected readonly NavigationPaths = NavigationPaths;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly employeesListConfig = employeesListConfig;

  employeesList$ = this.employeeService.getEmployeesList();

  constructor(
    private readonly employeeService: EmployeeService,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  onActionClicked(event: TableAction): void {
    console.log(event, 'EVENT');
    switch (event.action) {
      case TableActionTypes.VIEW:
        this.router.navigate([
          NavigationPaths.DASHBOARD,
          NavigationPaths.EMPLOYEES,
          NavigationPaths.INFO_EMPLOYEE,
        ]);
        break;
    }
  }

  onPageChange({ pageSize, pageIndex }: PageEvent): void {}
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationPaths } from "@core/enums/navigation-paths.enum";
import { ButtonTypeEnum } from "@core/enums/button-type.enum";
import { EmployeeService } from "@core/services/employee/employee.service";
import { TableAction } from "@core/types/data-table";
import { PageEvent } from "@angular/material/paginator";
import { employeesListConfig } from "@app/modules/dashboard/employee/configs/employees-list.config";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesComponent {

  protected readonly NavigationPaths = NavigationPaths;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  protected readonly employeesListConfig = employeesListConfig;

  employeesList$ = this.employeeService.getEmployeesList();

  constructor(private readonly employeeService: EmployeeService) { }

  onActionClicked(event: TableAction): void {
    console.log(event);
  }

  onPageChange(event: PageEvent): void {
    console.log(event);
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ImageUrl} from "@core/enums/image-url";
import {ButtonTypeEnum} from "@core/enums/button-type.enum";
import {EmployeeService} from "@core/services/employee/employee.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateEmployeeComponent {

  imgUrl = ImageUrl.PROFILE;
  ButtonTypeEnum = ButtonTypeEnum;
  onSave = false;
  form!: FormGroup;

  constructor(
    private readonly employeeService: EmployeeService,
    ) {
  }

  personalDetailsForm(event: any): void {
    this.form = event;
  }

  toggleOnSave(): void {
    this.onSave = !this.onSave;
    const formValues = Object.values(this.form.value).reduce((acc: any, el: any) => (acc = {...acc, ...el}), {});
    this.employeeService.createEmployee(formValues).subscribe();
  }
}

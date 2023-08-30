import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ButtonTypeEnum } from '@core/enums/button-type.enum';
import { EmploymentTypeService } from '@core/services/company/employment-type/employment-type.service';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { CustomValidators } from '@shared/utils/custom-validators/custom-validators';
import { ActivatedRoute, Router } from '@angular/router';
import { AppActivatedRoute } from '@core/types/app-route.type';
import { BehaviorSubject, filter, map } from 'rxjs';
import { isNil } from 'lodash';
import { EmployeeTypeRouteData } from '@modules/dashboard/employee/employees-type/employees-type-routing.module';
import { EmploymentTypes } from '@core/types/employment-type.model';
import { createEmployeeTypeFormConfig } from '@modules/dashboard/employee/create-employee-type/configs/create-employee-type-form.config';

@Component({
  selector: 'app-create-employee-enums',
  templateUrl: './create-employee-type.component.html',
  styleUrls: ['./create-employee-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEmployeeTypeComponent implements AfterViewInit {
  private readonly activatedRoute: AppActivatedRoute<EmployeeTypeRouteData> =
    inject(ActivatedRoute);
  private readonly employmentTypeService = inject(
    EmploymentTypeService
  );
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly router = inject(Router);
  employmentType = new BehaviorSubject<EmploymentTypes | null>(null);
  backPathRoute = [
    NavigationPaths.DASHBOARD,
    NavigationPaths.EMPLOYEES,
  ];

  form!: FormGroup<{
    name: FormControl<string>;
    description: FormControl<string>;
  }>;

  isBusy = false;

  protected readonly NavigationPaths = NavigationPaths;
  protected readonly createEmployeeTypeFormConfig =
    createEmployeeTypeFormConfig;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;

  ngAfterViewInit(): void {
    this.initFormFields();
  }

  onSaveClick() {
    const values = this.form.getRawValue();
    this.form.disable();
    if (!isNil(this.employmentType.value)) {
      const { id } = this.employmentType.value;
      this.onEdit({ id, ...values });
    } else {
      this.onCreate(values);
    }
  }

  onCancelClick() {
    this.router.navigate(this.backPathRoute);
  }

  private onCreate(body: { name: string; description: string }) {
    this.isBusy = true;
    this.employmentTypeService
      .creteNewEmploymentType(body)
      .subscribe({
        next: () => {
          this.isBusy = false;
          this.form.enable();
          this.form.reset();
          this.cdr.detectChanges();
        },
        error: () => {
          this.isBusy = false;
          this.form.enable();
          this.cdr.detectChanges();
        },
      });
  }

  private onEdit(body: {
    id: string;
    name: string;
    description: string;
  }) {
    this.isBusy = true;
    this.employmentTypeService.editEmploymentType(body).subscribe({
      next: () => {
        this.isBusy = false;
        const oldEmploymentType = this.employmentType.value!;
        this.form.enable();
        this.updateForm({
          ...oldEmploymentType,
          name: body.name,
          description: body.description,
        });
      },
      error: () => {
        this.isBusy = false;
        this.form.enable();
      },
    });
    this.cdr.detectChanges();
  }

  private initFormFields() {
    this.activatedRoute.data
      .pipe(
        map(data => data.employeeTypeData),
        filter(
          (employeeTypeData): employeeTypeData is EmploymentTypes =>
            !isNil(employeeTypeData)
        )
      )
      .subscribe(employeeTypeData => {
        this.isBusy = false;
        this.updateForm(employeeTypeData);
      });
  }

  private updateForm(employeeType: EmploymentTypes) {
    this.employmentType.next(employeeType);
    const { name, description } = employeeType;

    this.form.patchValue({
      name,
      description,
    });

    this.form.setValidators([
      CustomValidators.compareFieldsValidator({
        name,
        description,
      }),
    ]);

    this.form.updateValueAndValidity();

    this.cdr.detectChanges();
  }
}

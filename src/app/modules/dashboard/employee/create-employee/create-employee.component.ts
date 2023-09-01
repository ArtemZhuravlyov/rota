import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { ImageUrl } from '@core/enums/image-url';
import { EmployeeService } from '@core/services/employee/employee.service';
import { FormGroup } from '@angular/forms';
import { finalize, tap } from 'rxjs';
import { Router } from '@angular/router';
import { CompanyService } from '@core/services/company/company.service';
import { SettingsService } from '@core/services/company/settings/settings.service';
import { AuthService } from '@core/services/account/auth.service';
import { NationalityService } from '@core/services/company/nationality/nationality.service';
import {
  createEmployeeFormConfig,
  isDropdown,
} from '@app/modules/dashboard/employee/create-employee/configs/create-employee-form-config';
import { createEmployeeTypeFormConfig } from '@modules/dashboard/employee/create-employee-type/configs/create-employee-type-form.config';
import { countryTransformUrl } from '@shared/utils/country-transform-url';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEmployeeComponent implements OnInit {
  createEmployeeFormConfig = createEmployeeFormConfig;
  imgUrl = ImageUrl.PROFILE;
  onSave = false;
  form!: FormGroup;

  constructor(
    private readonly employeeService: EmployeeService,
    private readonly router: Router,
    private readonly companyService: CompanyService,
    private readonly settingsService: SettingsService,
    private readonly authService: AuthService,
    private readonly nationalityService: NationalityService
  ) {}

  ngOnInit(): void {
    // this.createEmployeeFormConfig[13].data = this.companyService
    //   .getCountry()
    //   .pipe(
    //     map(countries =>
    //       countries.map(country => ({
    //         displayName: `${country.name} (${country.dialingCode})`,
    //         value: {
    //           dialingCode: country.dialingCode,
    //           countryFlag: country.countryFlag,
    //         },
    //         countryFlag: country.countryFlag,
    //       }))
    //     )
    //   );
    //    return `https://flagsapi.com/${icon}/flat/32.png`

    this.companyService.getCountry().subscribe(data => {
      const field = createEmployeeFormConfig[7];
      const transformData = data.map(({ countryFlag, ...rest }) => ({
        ...rest,
        countryFlag: countryTransformUrl(countryFlag),
      }));
      if (isDropdown(field)) field.config.data = transformData;
    });

    this.settingsService
      .getGender(this.authService.getCurrentUserId())
      .subscribe(data => {
        const field = createEmployeeFormConfig[4];
        if (isDropdown(field)) field.config.data = data;
      });

    this.settingsService
      .getMaritalStatus(this.authService.getCurrentUser().userId)
      .subscribe(data => {
        const field = createEmployeeFormConfig[5];
        if (isDropdown(field)) field.config.data = data;
      });

    // this.nationalityService
    //   .getNationality()
    //   .pipe(
    //     tap(
    //       nationalities =>
    //         (this.createEmployeeFormConfig[8].data =
    //           nationalities.map(res => ({
    //             displayName: res.name,
    //             value: res.id,
    //             icon: res.twoLetterIsoCode,
    //           })))
    //     )
    //   )
    //   .subscribe();
  }

  toggleOnSave(): void {
    console.log(this.form.getRawValue());
    this.onSave = !this.onSave;
    if (false) {
      this.employeeService
        .createEmployee(this.form.getRawValue())
        .pipe(
          tap(res => {
            console.log(res, 'ID');
          }),
          finalize(() => {
            this.router.navigate(['/dashboard/employees']);
          })
        )
        .subscribe();
    }
  }

  protected readonly createEmployeeTypeFormConfig =
    createEmployeeTypeFormConfig;
}

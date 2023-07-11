import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ImageUrl} from "@core/enums/image-url";
import {ButtonTypeEnum} from "@core/enums/button-type.enum";
import {EmployeeService} from "@core/services/employee/employee.service";
import {FormGroup} from "@angular/forms";
import {finalize, map, tap} from "rxjs";
import {Router} from "@angular/router";
import {CompanyService} from "@core/services/company/company.service";
import {SettingsService} from "@core/services/company/settings/settings.service";
import {AuthService} from "@core/services/account/auth.service";
import {NationalityService} from "@core/services/company/nationality/nationality.service";
import {
  createEmployeeFormConfig
} from "@app/modules/dashboard/employee/create-employee/configs/create-employee-form-config";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateEmployeeComponent implements OnInit {

  createEmployeeFormConfig = createEmployeeFormConfig;
  imgUrl = ImageUrl.PROFILE;
  ButtonTypeEnum = ButtonTypeEnum;
  onSave = false;
  form!: FormGroup;

  constructor(
    private readonly employeeService: EmployeeService,
    private readonly router: Router,
    private readonly companyService: CompanyService,
    private readonly settingsService: SettingsService,
    private readonly authService: AuthService,
    private readonly nationalityService: NationalityService
    ) {
  }

  ngOnInit(): void {
    this.createEmployeeFormConfig[13].data = this.companyService.getCountry().pipe(
      map(countries =>
        countries.map(country =>
          ({ displayName: `${country.name} (${country.dialingCode})`, value: {dialingCode: country.dialingCode, countryFlag: country.countryFlag}, countryFlag: country.countryFlag })
        )
      ),
    );

    this.companyService.getCountry().pipe(
      tap(countries =>
        this.createEmployeeFormConfig[9].data = countries.map(country =>
          ({ displayName: country.name, value: country.id, icon: country.countryFlag })
        ),
      )
    ).subscribe();

    this.settingsService.getGender(this.authService.getCurrentUserId()).pipe(
      tap(results =>
        this.createEmployeeFormConfig[4].data = results.map(res =>
          ({ displayName: res.name, value: res.id })
        )
      )
    ).subscribe();

    this.settingsService.getMaritalStatus(this.authService.getCurrentUser().userId).pipe(
      tap(results =>
        this.createEmployeeFormConfig[5].data = results.map(res =>
          ({ displayName: res.name, value: res.id})
        )
      )
    ).subscribe();

    this.nationalityService.getNationality().pipe(
      tap(nationalities =>
        this.createEmployeeFormConfig[8].data = nationalities.map(res =>
          ({ displayName: res.name, value: res.id, icon: res.twoLetterIsoCode})
        )
      )
    ).subscribe();
  }

  toggleOnSave(): void {
    this.onSave = !this.onSave;
    this.employeeService.createEmployee(this.form.getRawValue()).pipe(
      tap(res => {
        console.log(res, 'ID');
      }),
      finalize( () => {
        this.router.navigate(['/dashboard/employees']);
      })
    ).subscribe();
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { filter, from, mergeMap, switchMap, tap } from 'rxjs';
import { CompanyService } from '@core/services/company/company.service';
import {
  employeeInformationFormFields,
  employeeSalaryInfoFormFields,
  employmentDetailsFormFields,
  employmentPeriodFormFields,
} from '@app/modules/dashboard/employee/create-employee/employee-settings/work-information/configs/work-information-form.config';
import { GroupFunctionDivisionService } from '@core/services/company/grou-function-division/group-function-division.service';
import { PositionService } from '@core/services/company/position/position.service';
import { GradeCategoryService } from '@core/services/company/grade-category/grade-category.service';
import { DepartmentService } from '@core/services/company/department/department.service';
import { LocationService } from '@core/services/company/location/location.service';
import { CurrencyService } from '@core/services/company/currency/currency.service';
import { LanguageService } from '@core/services/company/language/language.service';
import { EmploymentTypeService } from '@core/services/company/employment-type/employment-type.service';
import { GradeLevel } from '@core/types/grade-level.interface';
import { TranslateKey } from '../../../../../../../assets/i18n/enums/translate-key.enum';

const PAGE_SIZE = 100;
const PAGE_INDEX = 0;

@Component({
  selector: 'app-work-information',
  templateUrl: './work-information.component.html',
  styleUrls: ['./work-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkInformationComponent implements OnInit {
  protected readonly WORK_INFORMATION = TranslateKey.WORK_INFORMATION;

  employeeInformationFormFields = employeeInformationFormFields;
  employeeSalaryInfoFormFields = employeeSalaryInfoFormFields;
  employmentDetailsFormFields = employmentDetailsFormFields;
  employmentPeriodFormFields = employmentPeriodFormFields;

  form!: FormGroup;

  constructor(
    private readonly languageService: LanguageService,
    private readonly currencyService: CurrencyService,
    private readonly companyService: CompanyService,
    private readonly groupFunctionDivisionService: GroupFunctionDivisionService,
    private readonly positionService: PositionService,
    private readonly gradeCategoryService: GradeCategoryService,
    private readonly departmentService: DepartmentService,
    private readonly locationService: LocationService,
    private readonly employmentTypeService: EmploymentTypeService
  ) {}

  ngOnInit(): void {
    this.languageService
      .getLanguage()
      .pipe(
        tap(
          languages =>
            (this.employmentDetailsFormFields[1].data = languages.map(
              language => ({
                displayName: language.name,
                value: language.id,
                icon: language.flagImageFileName,
              })
            ))
        )
      )
      .subscribe();

    this.currencyService
      .getCurrency()
      .pipe(
        tap(
          currencies =>
            (this.employeeSalaryInfoFormFields[1].data =
              currencies.map(currency => ({
                displayName: currency.name,
                value: currency.id,
                currencyCode: currency.customFormatting,
              })))
        )
      )
      .subscribe();

    this.companyService
      .getCountry()
      .pipe(
        tap(
          countries =>
            (this.employmentDetailsFormFields[0].data = countries.map(
              country => ({
                displayName: country.name,
                value: country.id,
                icon: country.countryFlag,
              })
            ))
        )
      )
      .subscribe();

    this.groupFunctionDivisionService
      .getDivisionsList(PAGE_SIZE, PAGE_INDEX)
      .pipe(
        tap(
          response =>
            (this.employeeInformationFormFields[1].data =
              response.divisions.map(division => ({
                displayName: division.name,
                value: division.id,
              })))
        )
      )
      .subscribe();

    this.positionService
      .getPositionsList(PAGE_SIZE, PAGE_INDEX)
      .pipe(
        tap(
          response =>
            (this.employeeInformationFormFields[2].data =
              response.positions.map(position => ({
                displayName: position.name,
                value: position.id,
              })))
        )
      )
      .subscribe();

    this.gradeCategoryService
      .getGradeCategoriesList(PAGE_SIZE, PAGE_INDEX)
      .pipe(
        tap(
          response =>
            (this.employeeSalaryInfoFormFields[0].data =
              response.gradeCategories.map(gradeCategory => ({
                displayName: gradeCategory.name,
                value: gradeCategory.id,
              })))
        )
      )
      .subscribe();

    this.departmentService
      .getDepartmentList(PAGE_SIZE, PAGE_INDEX)
      .pipe(
        tap(
          response =>
            (this.employeeInformationFormFields[4].data =
              response.departments.map(department => ({
                displayName: department.managerTitle,
                value: department.id,
              })))
        )
      )
      .subscribe();

    this.departmentService
      .getDepartmentList(PAGE_SIZE, PAGE_INDEX)
      .pipe(
        tap(
          response =>
            (this.employeeInformationFormFields[5].data =
              response.departments.map(department => ({
                displayName: department.name,
                value: department.id,
              })))
        )
      )
      .subscribe();

    this.locationService
      .getLocationList(PAGE_SIZE, PAGE_INDEX)
      .pipe(
        tap(
          response =>
            (this.employmentDetailsFormFields[2].data =
              response.locations.map(location => ({
                displayName: location.name,
                value: location.id,
              })))
        )
      )
      .subscribe();

    this.employmentTypeService
      .getEmploymentTypeList(PAGE_SIZE, PAGE_INDEX)
      .pipe(
        tap(
          response =>
            (this.employeeInformationFormFields[3].data =
              response.employmentTypes.map(employmentType => ({
                displayName: employmentType.name,
                value: employmentType.id,
              })))
        )
      )
      .subscribe();

    this.gradeCategoryService
      .getGradeCategoriesList(PAGE_SIZE, PAGE_INDEX)
      .pipe(
        switchMap(res => {
          return from(
            res.gradeCategories.map(category => category.id)
          ).pipe(
            mergeMap(id =>
              this.gradeCategoryService
                .getGradeCategoryLevels(id)
                .pipe(
                  filter(res => res !== null),
                  tap((gradeLevels: GradeLevel[]) => {
                    this.employeeSalaryInfoFormFields[3].data =
                      gradeLevels.map(gradeLevel => ({
                        displayName: gradeLevel.name,
                        value: gradeLevel.id,
                      }));
                  })
                )
            )
          );
        })
      )
      .subscribe();
  }
}

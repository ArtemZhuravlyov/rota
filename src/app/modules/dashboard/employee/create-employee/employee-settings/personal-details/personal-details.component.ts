import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

import {CompanyService} from "@core/services/company/company.service";
import {map, tap} from "rxjs";
import {AuthService} from "@core/services/account/auth.service";
import {
  contactInformationFormFields,
  familyInformationFormFields, identityInformationFormFields,
  personalInformationFormFields
} from "@app/modules/dashboard/employee/create-employee/employee-settings/personal-details/configs/personal-details-form.config";
import {NationalityService} from "@core/services/company/nationality/nationality.service";
import {SettingsService} from "@core/services/company/settings/settings.service";


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalDetailsComponent implements OnInit {
  @Output() formSubmitted: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  personalInformationFormFields = personalInformationFormFields;
  familyInformationFormFields = familyInformationFormFields;
  identityInformationFormFields = identityInformationFormFields;
  contactInformationFormFields = contactInformationFormFields;

  form = new FormGroup({});

  constructor(
    private readonly companyService: CompanyService,
    private readonly authService: AuthService,
    private readonly settingsService: SettingsService,
    private readonly nationalityService: NationalityService,
    ) {
  }

  ngOnInit(): void {
    this.formSubmitted.emit(this.form);

    this.contactInformationFormFields[1].data = this.companyService.getCountry().pipe(
      map(countries =>
        countries.map(country =>
          ({ displayName: `${country.name} (${country.dialingCode})`, value: {dialingCode: country.dialingCode, countryFlag: country.countryFlag}, countryFlag: country.countryFlag })
        )
      ),
    );

    this.companyService.getCountry().pipe(
      tap(countries =>
        this.identityInformationFormFields[2].data = countries.map(country =>
          ({ displayName: country.name, value: country.id, icon: country.countryFlag })
        ),
      )
    ).subscribe();

    this.settingsService.getGender(this.authService.getCurrentUserId()).pipe(
      tap(results =>
        this.personalInformationFormFields[4].data = results.map(res =>
          ({ displayName: res.name, value: res.id })
        )
      )
    ).subscribe();

     this.settingsService.getMaritalStatus(this.authService.getCurrentUser().userId).pipe(
      tap(results =>
        this.familyInformationFormFields[0].data = results.map(res =>
          ({ displayName: res.name, value: res.id})
        )
      )
    ).subscribe();

     this.nationalityService.getNationality().pipe(
      tap(nationalities =>
        this.identityInformationFormFields[1].data = nationalities.map(res =>
          ({ displayName: res.name, value: res.id, icon: res.twoLetterIsoCode})
        )
      )
    ).subscribe();
  }
}

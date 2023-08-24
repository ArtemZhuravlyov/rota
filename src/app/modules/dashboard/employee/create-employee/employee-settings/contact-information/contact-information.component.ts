import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CompanyService } from '@core/services/company/company.service';
import { map, tap } from 'rxjs';
import { AuthService } from '@core/services/account/auth.service';
import {
  emergencyContactFormFields,
  nextOfKinFormFields,
  residentialAddressFormFields,
} from '@app/modules/dashboard/employee/create-employee/employee-settings/contact-information/configs/contact-infotmation-form.config';
import { SettingsService } from '@core/services/company/settings/settings.service';
import { StateRegionService } from '@core/services/company/state-region/state-region.service';
import { TranslateKey } from '../../../../../../../assets/i18n/enums/translate-key.enum';

const PAGE_SIZE = 100;
const PAGE_INDEX = 0;

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactInformationComponent implements OnInit {
  residentialAddressFormFields = residentialAddressFormFields;
  emergencyContactFormFields = emergencyContactFormFields;
  nextOfKinFormFields = nextOfKinFormFields;

  protected readonly CONTACT_INFORMATION =
    TranslateKey.CONTACT_INFORMATION;
  protected readonly RESIDENTIAL_ADDRESS =
    TranslateKey.RESIDENTIAL_ADDRESS;
  protected readonly EMERGENCY_CONTACT =
    TranslateKey.EMERGENCY_CONTACT;
  protected readonly NEXT_OF_KIN = TranslateKey.NEXT_OF_KIN;

  form = new FormGroup({});

  constructor(
    private readonly companyService: CompanyService,
    private readonly authService: AuthService,
    private readonly settingsService: SettingsService,
    private readonly stateRegionService: StateRegionService
  ) {}

  ngOnInit(): void {
    const countryList = this.companyService.getCountry().pipe(
      map(countries =>
        countries.map(country => ({
          displayName: `${country.name} (${country.dialingCode})`,
          value: {
            dialingCode: country.dialingCode,
            countryFlag: country.countryFlag,
          },
          countryFlag: country.countryFlag,
        }))
      )
    );
    this.emergencyContactFormFields[3].data = countryList;
    this.nextOfKinFormFields[4].data = countryList;

    this.companyService
      .getCountry()
      .pipe(
        tap(
          countries =>
            (this.residentialAddressFormFields[2].data =
              countries.map(country => ({
                displayName: country.name,
                value: country.id,
                icon: country.countryFlag,
              })))
        )
      )
      .subscribe();

    this.settingsService
      .getRelationshipType(this.authService.getCurrentUser().userId)
      .pipe(
        tap(
          results =>
            (this.nextOfKinFormFields[2].data = results.map(res => ({
              displayName: res.name,
              value: res.id,
            })))
        )
      )
      .subscribe();

    this.companyService
      .getCountry()
      .pipe(
        tap(
          countries =>
            (this.residentialAddressFormFields[1].data =
              countries.map(country => ({
                displayName: country.twoLetterIsoCode,
                value: country.id,
              })))
        )
      )
      .subscribe();

    this.stateRegionService
      .getStateRegionList(PAGE_SIZE, PAGE_INDEX)
      .pipe(
        tap(states => {
          this.residentialAddressFormFields[1].data =
            states.stateRegions.map(state => ({
              displayName: state.name,
              value: state.id,
            }));
        })
      )
      .subscribe();
  }
}

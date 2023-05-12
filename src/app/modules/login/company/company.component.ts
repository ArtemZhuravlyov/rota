import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormData, FormField } from "../../../core/types/form-builder.model";
import { Validators } from "@angular/forms";
import { ImageUrl } from "../../../core/enums/image-url";
import { CompanyService } from "../../../core/services/company/company.service";
import { map } from "rxjs";
import { CompanyRegister, Country, Industry } from "../../../core/types/company.interface";
import { Router } from "@angular/router";
import { AuthService } from "../../../core/services/account/auth.service";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyComponent {
  title = 'Company';
  subtitle = 'Here we are displaying the comment that been added to the table earlier.';
  logoInformation = 'Slogan of your company goes right underneath the logo, this is just a placeholder text.';
  imgUrl = ImageUrl.COMPANY;

  formFields: FormField[] = [
    {
      key: 'name',
      label: 'Company Name',
      componentType: 'textbox',
      inputType: 'text',
      validators: [Validators.required],
    },
    {
      key: 'address',
      label: 'Address',
      componentType: 'textbox',
      inputType: 'text',
      validators: [Validators.required],
    },
    {
      key: 'countryId',
      label: 'Country',
      componentType: 'dropdown',
      validators: [Validators.required],
    },
    {
      key: 'industryId',
      label: 'Industry',
      componentType: 'dropdown',
      validators: [Validators.required],
    },
  ]

  formResult = {};
  formIsValid = false;

  data: FormData = {
    countryId: this.companyService.country.pipe(
      map((countries: Country[]) =>
        countries.map(country =>
          ({ displayName: country.name, value: country.id })
        )
      )
    ),
    industryId: this.companyService.industry.pipe(
      map((industries: Industry[]) =>
        industries.map(industry =>
          ({ displayName: industry.name, value: industry.id })
        )
      )
    )
  };

  constructor(
    private companyService: CompanyService,
    private route: Router,
    private authService: AuthService,
  ) {
  }

  onSubmit(): void {
    if (this.authService.currentUser)
      this.companyService.registerCompany(this.formResult as CompanyRegister, this.authService.currentUser?.userId)
        .subscribe(() => this.route.navigate(['../home']));
  }
}

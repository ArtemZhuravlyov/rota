import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormField } from "@core/types/form-builder.model";
import { FormGroup, Validators } from "@angular/forms";
import { ImageUrl } from "@core/enums/image-url";
import { CompanyService } from "@core/services/company/company.service";
import { map } from "rxjs";
import { Country, Industry } from "@core/types/company.interface";
import { ActivatedRoute, Router } from "@angular/router";
import { NavigationPaths } from "@core/enums/navigation-paths.enum";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyComponent {
  title = 'COMPANY';
  subtitle = 'COMPANY_CREATE_INFO';
  logoInformation = 'Slogan of your company goes right underneath the logo, this is just a placeholder text.';
  imgUrl = ImageUrl.COMPANY;

  formFields: FormField[] = [
    {
      key: 'name',
      label: 'COMPANY_NAME',
      componentType: 'textbox',
      inputType: 'text',
      validators: [Validators.required],
      placeholder: 'Enter'
    },
    {
      key: 'address',
      label: 'ADDRESS',
      componentType: 'textbox',
      inputType: 'text',
      validators: [Validators.required],
      placeholder: 'Enter'
    },
    {
      key: 'countryId',
      label: 'COUNTRY',
      componentType: 'dropdown',
      validators: [Validators.required],
      data: this.companyService.getCountry().pipe(
        map((countries: Country[]) =>
          countries.map(country =>
            ({ displayName: country.name, value: country.id })
          )
        )
      ),
    },
    {
      key: 'industryId',
      label: 'INDUSTRY',
      componentType: 'dropdown',
      validators: [Validators.required],
      data: this.companyService.getIndustry().pipe(
        map((industries: Industry[]) =>
          industries.map(industry =>
            ({ displayName: industry.name, value: industry.id })
          )
        )
      )
    },
  ];

  form!: FormGroup;
  userId!: string;

  constructor(
    private companyService: CompanyService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.queryParams.subscribe(({ userId }) => this.userId = userId)
  }
  onSubmit(): void {
      this.companyService.registerCompany(this.form.value, this.userId)
        .subscribe(() => this.route.navigate([`../${NavigationPaths.DASHBOARD}`]));
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { CompanyService } from '@core/services/company/company.service';

@Pipe({
  name: 'country'
})
export class CountryPipe implements PipeTransform {

  constructor(private companyService: CompanyService) {}

  transform(countryId: string): Observable<string> {
    return this.companyService.getCountryById(countryId).pipe(
      map(country => country?.name ?? countryId)
    );
  }
}

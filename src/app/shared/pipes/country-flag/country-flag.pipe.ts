import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'country'
})
export class CountryFlagPipe implements PipeTransform {
  transform(icon: string | number, isCountry?: boolean): string {
    return `https://flagsapi.com/${icon}/flat/32.png`
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'country'
})
export class CountryFlagPipe implements PipeTransform {
  transform(countyFlag: string): string {
    return `https://flagsapi.com/${countyFlag}/flat/32.png`
  }
}

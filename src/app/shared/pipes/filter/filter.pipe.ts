import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data: Record<string, any>[], searchValue: string, fieldSearch: string = 'displayName'): Record<string, string>[] {
    if (searchValue.length) {
      return data.filter(v => v[fieldSearch].toLowerCase().includes(searchValue.toLowerCase()));
    }
    return data;
  }
}

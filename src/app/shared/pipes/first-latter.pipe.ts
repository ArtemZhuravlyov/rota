import { Pipe, PipeTransform } from '@angular/core';

/*
 * Cut string and get only first letter
 * Usage:
 *   value | firstLatter:true
 * Example:
 *   {{ "Name" | firstLatter:true }}
 *   formats to: N.
 */
@Pipe({
  name: 'firstLatter',
  standalone: true,
})
export class FirstLatterPipe implements PipeTransform {
  transform(value: any, addDot = false): string {
    try {
      return `${value.slice(0, 1)}${addDot ? '.' : ''}`;
    } catch {
      return value;
    }
  }
}

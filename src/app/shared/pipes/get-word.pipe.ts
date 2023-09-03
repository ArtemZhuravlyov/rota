import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getWord',
  standalone: true,
})
export class GetWordPipe implements PipeTransform {
  transform(
    value: any,
    { index, delimiter = ' ' }: { index: number; delimiter?: string }
  ): string {
    try {
      return value.split(delimiter)[index];
    } catch {
      return value;
    }
  }
}

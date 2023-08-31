import { Pipe, PipeTransform } from '@angular/core';
import {TimerFormatType} from "@core/enums/time-fromat.enum";
import {TimerFormatterUtil} from "@shared/utils/time-formatter";

@Pipe({
  name: 'timerFormat'
})
export class TimerFormatPipe implements PipeTransform {
  transform(value: number, format: TimerFormatType): string {
    return TimerFormatterUtil.format(value, format);
  }
}

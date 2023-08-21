import {TimerFormatType} from "@core/enums/time-fromat.enum";

export class TimerFormatterUtil {
  static readonly FORMATTERS = {
    [TimerFormatType.Hours]: (value: number) => Math.floor(value / 3600),
    [TimerFormatType.Minutes]: (value: number) => Math.floor((value % 3600) / 60),
    [TimerFormatType.Seconds]: (value: number) => value % 60
  };

  static format(value: number, format: TimerFormatType): string {
    const formatter = TimerFormatterUtil.FORMATTERS[format];
    return `${formatter(value)}`;
  }
}

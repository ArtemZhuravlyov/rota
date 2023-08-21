import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimerFormatPipe} from "@shared/pipes/timer-format/timer-format.pipe";


@NgModule({
  declarations: [TimerFormatPipe],
  exports: [TimerFormatPipe],
  imports: [
    CommonModule
  ]
})
export class TimerFormatModule {
}

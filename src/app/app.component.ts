import { Component, inject, OnInit } from '@angular/core';
import { TimerService } from '@core/services/timer/timer.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  private timerService = inject(TimerService);

  ngOnInit(): void {
    this.timerService.init();
  }
}

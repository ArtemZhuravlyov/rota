import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { TimerFormatType } from '@core/enums/time-fromat.enum';
import { TimerFormatModule } from '@shared/pipes/timer-format/timer-format.module';
import { interval, Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ButtonModule } from '@shared/modules/button/button.module';
import { ButtonTypeEnum } from '@core/enums/button-type.enum';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-timer-modal',
  templateUrl: './timer-modal.component.html',
  styleUrls: ['../timer-idle-modal.component.scss'],
  standalone: true,
  imports: [TimerFormatModule, ButtonModule],
})
export class TimerModalComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private dialogRef = inject(MatDialogRef);
  private timer!: Subscription;

  timerValue: number = 300;

  ngOnInit() {
    this.timer = interval(1000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.updateTimer();
      });
  }

  onClose() {
    this.timer.unsubscribe();
    this.dialogRef.close();
  }

  private updateTimer() {
    this.timerValue -= 1;
    if (this.timerValue === 0) this.onClose();
  }

  protected readonly TimerFormatType = TimerFormatType;
  protected readonly ButtonTypeEnum = ButtonTypeEnum;
}

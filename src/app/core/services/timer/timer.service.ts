import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { filter, fromEvent, race } from 'rxjs';
import { TimerModalComponent } from '@shared/modalWindows/timer-idle-modals/timer-modal/timer-modal.component';
import { LoginModalComponent } from '@shared/modalWindows/timer-idle-modals/login-modal/login-modal.component';
import { NavigationEnd, Router } from '@angular/router';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private dialogOpen = false;
  private delay = 60 * 1000;
  private defaultDialogConfig: MatDialogConfig = {
    width: '640px',
    disableClose: true,
  };
  private dialogRef!: MatDialogRef<
    LoginModalComponent | TimerModalComponent
  >;

  constructor(
    private dialog: MatDialog,
    private route: Router
  ) {
    this.closeDialog();
  }

  init() {
    race([
      fromEvent(window, 'load'),
      fromEvent(document, 'mousemove'),
    ])
      .pipe(
        debounceTime(this.delay),
        filter(() => !this.dialogOpen && this.shouldOpenTimerDialog())
      )
      .subscribe(() => {
        this.openTimerDialog();
      });
  }

  private openTimerDialog() {
    this.dialogOpen = true;
    this.dialogRef = this.dialog.open(
      TimerModalComponent,
      this.defaultDialogConfig
    );

    this.dialogRef.afterClosed().subscribe(() => {
      this.dialogOpen = false;
      if (
        this.dialogRef.componentInstance instanceof
          TimerModalComponent &&
        this.dialogRef.componentInstance.timerValue === 0
      )
        this.openLoginDialog();
    });
  }

  private openLoginDialog() {
    this.dialogOpen = true;
    this.dialogRef = this.dialog.open(
      LoginModalComponent,
      this.defaultDialogConfig
    );

    this.dialogRef.afterClosed().subscribe(() => {
      this.dialogOpen = false;
    });
  }

  private closeDialog() {
    this.route.events
      .pipe(
        filter(
          (event): event is NavigationEnd =>
            event instanceof NavigationEnd
        )
      )
      .subscribe(() => {
        if (
          this.dialogRef &&
          this.dialogRef.componentInstance &&
          !this.shouldOpenTimerDialog()
        ) {
          this.dialogRef.close();
        }
      });
  }

  private shouldOpenTimerDialog(): boolean {
    const currentUrl = this.route.url;
    const paths = [
      `/${NavigationPaths.LOGIN}/${NavigationPaths.SIGN_IN}`,
      `/${NavigationPaths.LOGIN}/${NavigationPaths.REGISTRATION}`,
      `/${NavigationPaths.LOGIN}/${NavigationPaths.PASSWORD_RECOVERY}`,
      `/${NavigationPaths.LOGIN}/${NavigationPaths.PASSWORD_RECOVERY_SUCCESS}`,
    ];
    return !paths.includes(currentUrl);
  }
}

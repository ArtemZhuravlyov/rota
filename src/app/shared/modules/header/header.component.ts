import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  OnInit,
} from '@angular/core';
import { SettingsMenuConfig } from '@shared/modules/header/configs/settings-menu-config';
import { PersonMenuConfig } from '@shared/modules/header/configs/person-menu-config';
import { NotificationMenuConfig } from '@shared/modules/header/configs/notification-menu-config';
import { MatDialog } from '@angular/material/dialog';
import { ChangeCompanyModalComponent } from '@shared/modalWindows/change-company-modal/change-company-modal.component';
import { CompanyService } from '@core/services/company/company.service';
import { AuthService } from '@core/services/account/auth.service';
import { tap } from 'rxjs';
import { NavigationMenusConfig } from '@core/types/navigation-menus-config';
import { TranslateKey } from '../../../../assets/i18n/enums/translate-key.enum';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  protected readonly NOTIFICATIONS = TranslateKey.NOTIFICATIONS;
  protected readonly READ_FULL = TranslateKey.READ_FULL;

  public notificationsCount = 0;

  notificationMenuConfig = NotificationMenuConfig;
  settingsMenuConfig = SettingsMenuConfig;
  selectedSettings = 0;
  personMenuConfig = PersonMenuConfig;
  isNotificationsIconClicked = false;
  isSettingsIconClicked = false;
  isPersonIconClicked = false;
  companyName: TranslateKey = TranslateKey.COMPANY;

  public userFullName = '';

  constructor(
    private readonly elementRef: ElementRef,
    private readonly dialog: MatDialog,
    private readonly companyService: CompanyService,
    private readonly authService: AuthService,
    private readonly cdr: ChangeDetectorRef,
    private readonly destroyRef: DestroyRef
  ) {}

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: string) {
    if (!this.elementRef.nativeElement.contains(targetElement)) {
      this.isNotificationsIconClicked = false;
      this.isSettingsIconClicked = false;
      this.isPersonIconClicked = false;
    }
  }

  ngOnInit() {
    this.authService.user$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(user => {
        this.userFullName = user.displayName;
      });
    this.setCurrentCompanyName();
  }

  setCurrentCompanyName(): void {
    this.companyService
      .getCompany(
        this.authService.getCurrentUserId(),
        this.authService.getCompanyId()
      )
      .pipe(
        tap(res => {
          this.companyName = res.name;
          this.cdr.detectChanges();
        })
      )
      .subscribe();
  }

  toggleSettingsSelected(index: number): void {
    this.selectedSettings = index;
  }

  onMenuItemClick(menuItem: NavigationMenusConfig) {
    switch (menuItem.title) {
      case 'LOG_OUT':
        this.authService.clearLocalStorage();
        this.authService.checkUserAuth();
        break;
    }
  }

  onIconClick(icon: string): void {
    switch (icon) {
      case 'notifications':
        this.isNotificationsIconClicked =
          !this.isNotificationsIconClicked;
        break;
      case 'settings':
        this.isSettingsIconClicked = !this.isSettingsIconClicked;
        break;
      case 'person':
        this.isPersonIconClicked = !this.isPersonIconClicked;
        break;
    }
  }

  openChangeCompanyModal(): void {
    this.dialog
      .open(ChangeCompanyModalComponent, {
        panelClass: 'medium-modal',
        backdropClass: 'modal-background',
        disableClose: true,
      })
      .afterClosed()
      .pipe(tap(() => this.setCurrentCompanyName()))
      .subscribe();
  }
}

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ButtonTypeEnum } from "@core/enums/button-type.enum";
import { SettingsMenuConfig } from "@shared/modules/header/configs/settings-menu-config";
import { PersonMenuConfig } from "@shared/modules/header/configs/person-menu-config";
import { NotificationMenuConfig } from "@shared/modules/header/configs/notification-menu-config";
import { MatDialog } from "@angular/material/dialog";
import { ChangeCompanyModalComponent } from "@shared/modalWindows/change-company-modal/change-company-modal.component";
import { CompanyService } from "@core/services/company/company.service";
import { AuthService } from "@core/services/account/auth.service";
import { tap } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit{

  buttonTypeEnum = ButtonTypeEnum;
  notificationMenuConfig = NotificationMenuConfig;
  settingsMenuConfig = SettingsMenuConfig;
  selectedSettings = 0;
  personMenuConfig = PersonMenuConfig;
  isNotificationsIconClicked = false;
  isSettingsIconClicked = false;
  isPersonIconClicked = false;
  companyName = '';
  constructor(
    private readonly elementRef: ElementRef,
    private readonly dialog: MatDialog,
    private readonly companyService: CompanyService,
    private readonly authService: AuthService,
    private readonly cdr: ChangeDetectorRef,
    ) {
  }

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: string) {
    if (!this.elementRef.nativeElement.contains(targetElement)) {
      this.isNotificationsIconClicked = false;
      this.isSettingsIconClicked = false;
      this.isPersonIconClicked = false;
    }
  }

  ngOnInit() {
    this.setCurrentCompanyName();
  }

  setCurrentCompanyName(): void {
    this.companyService.getCompany(this.authService.getCurrentUserId(), this.authService.getCompanyId()).pipe(
      tap( res => {
        this.companyName = res.name;
        this.cdr.detectChanges();
      })
    ).subscribe()
  }

  toggleSettingsSelected(index: number): void {
    this.selectedSettings = index;
  }

  onIconClick(icon: string): void {
    switch (icon) {
      case 'notifications':
        this.isNotificationsIconClicked = !this.isNotificationsIconClicked;
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
      .pipe(
        tap( () => this.setCurrentCompanyName())
      ).subscribe();
  }

}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubMenuComponent {

  isExpanded = true;

  toggleMenu(event: boolean): void {
    this.isExpanded = event;
  }
}

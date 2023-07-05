import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubMenuComponent {
  @Input() isPrinting!: boolean | null;
  isExpanded = true;

  toggleMenu(event: boolean): void {
    this.isExpanded = event;
  }

}

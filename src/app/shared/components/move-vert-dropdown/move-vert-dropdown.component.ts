import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {
  MatMenuModule,
  MenuPositionX,
  MenuPositionY,
} from '@angular/material/menu';

@Component({
  selector: 'app-move-vert-dropdown',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatMenuModule],
  templateUrl: './move-vert-dropdown.component.html',
  styleUrls: ['./move-vert-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoveVertDropdownComponent {
  @Input() xPosition: MenuPositionX = 'after';
  @Input() yPosition: MenuPositionY = 'below';

  isFocus = false;
  toggleFocus() {
    this.isFocus = !this.isFocus;
  }
}

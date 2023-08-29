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
import { ButtonModule } from '@shared/modules/button/button.module';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-filter-dropdown',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    ButtonModule,
    MatButtonModule,
  ],
  templateUrl: './filter-dropdown.component.html',
  styleUrls: ['./filter-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterDropdownComponent {
  @Input() icon!: string;
  @Input() xPosition: MenuPositionX = 'after';
  @Input() yPosition: MenuPositionY = 'below';

  isFocus = false;
  toggleFocus() {
    this.isFocus = !this.isFocus;
  }
}

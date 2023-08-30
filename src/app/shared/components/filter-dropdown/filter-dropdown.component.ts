import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
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
import { SearchInputModule } from '@shared/modules/search-input/search-input.module';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateKey } from '../../../../assets/i18n/enums/translate-key.enum';

@Component({
  selector: 'app-filter-dropdown',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    ButtonModule,
    MatButtonModule,
    SearchInputModule,
    TranslateModule,
  ],
  templateUrl: './filter-dropdown.component.html',
  styleUrls: ['./filter-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterDropdownComponent {
  @Input() columnName!: keyof typeof TranslateKey;
  @Input() icon!: string;
  @Input() xPosition: MenuPositionX = 'after';
  @Input() yPosition: MenuPositionY = 'below';
  @Output() applyClick = new EventEmitter<string>();
  @Output() clearClick = new EventEmitter<void>();

  isFocus = false;
  toggleFocus() {
    this.isFocus = !this.isFocus;
  }
}

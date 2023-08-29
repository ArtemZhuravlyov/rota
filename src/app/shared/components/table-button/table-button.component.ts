import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-table-button',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './table-button.component.html',
  styleUrls: ['./table-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableButtonComponent {
  @Input() icon!: string;
  @Input() showBtn = false;

  @Output() btnClick = new EventEmitter<void>();

  @HostListener('click')
  onClick(): void {
    this.btnClick.emit();
  }
}

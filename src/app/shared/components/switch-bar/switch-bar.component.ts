import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-switch-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch-bar.component.html',
  styleUrls: ['./switch-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchBarComponent {
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();
  onChangeChecked(checked: boolean) {
    this.checked = checked;
    this.checkedChange.emit(this.checked);
  }
}

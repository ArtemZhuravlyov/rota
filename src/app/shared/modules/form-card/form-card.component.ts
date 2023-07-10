import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormCardComponent {
  @Input() customClass: string | null = null;

}

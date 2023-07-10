import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Style } from "@core/types/style-model";

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormCardComponent {
  @Input() styleConfig?: Style;

}

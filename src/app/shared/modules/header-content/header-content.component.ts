import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Style } from "@core/types/style-model";

@Component({
  selector: 'app-header-content',
  templateUrl: './header-content.component.html',
  styleUrls: ['./header-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderContentComponent {
  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() styleConfig: Style = {};
}

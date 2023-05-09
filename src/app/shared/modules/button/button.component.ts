import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() title!: string;
  @Input() colorTheme: ThemePalette = 'primary';
  @Input() icon?: string;
  @Input() isIconButton = false;
  @Input() isFabButton = false;
}

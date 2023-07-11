import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-menu-button',
  templateUrl: './sub-menu-button.component.html',
  styleUrls: ['./sub-menu-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubMenuButtonComponent {

  @Input() title!: string;
  @Input() link!: string;
  @Input() isDisabled: boolean | undefined = false;
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
  @Input() imgUrl!: string;
  @Input() subtitle!: string;
  @Input() title!: string;
  @Input() logoInformation!: string;
  @Input() redirectRoute: string | null = null;
  @Input() redirectText: string = '';
  @Input() isLogoPositionTop = false;
}

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
  @Input() redirectRoute!: string;
  @Input() redirectText!: string;
  @Input() logoInformation!: string;
  @Input() isLogin: boolean = false;
}

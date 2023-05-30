import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImageUrl } from "@core/enums/image-url";
import { NavigationPaths } from "@core/enums/navigation-paths.enum";

@Component({
  selector: 'app-password-recovery-success',
  templateUrl: './password-recovery-success.component.html',
  styleUrls: ['./password-recovery-success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordRecoverySuccessComponent {
  title = 'RESET_LINK_SENT'
  subtitle = 'RESET_LINK_INFO';
  imgUrl = ImageUrl.RECOVERY_PASSWORD_SUCCESS;
  logoInformation  = 'Slogan of your company goes right underneath the logo, this is just a placeholder text.';
  routerLinkToSignIN = ['..', NavigationPaths.SIGN_IN];
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonTypeEnum } from "@core/enums/button-type.enum";

@Component({
  selector: 'app-trusted-device',
  templateUrl: './trusted-device.component.html',
  styleUrls: ['./trusted-device.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrustedDeviceComponent {

  @Input() title: string = 'Windows, Chrome';
  @Input() creationDate: string = '9/16/10, 3:33 PM';
  @Input() browserIcon: string = 'google';

  protected readonly ButtonTypeEnum = ButtonTypeEnum;
}

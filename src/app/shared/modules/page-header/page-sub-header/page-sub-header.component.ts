import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonTypeEnum } from "../../../../core/enums/button-type.enum";

@Component({
  selector: 'app-page-sub-header',
  templateUrl: './page-sub-header.component.html',
  styleUrls: ['./page-sub-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageSubHeaderComponent {

  protected readonly ButtonTypeEnum = ButtonTypeEnum;
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrintService } from '@core/services/print/print.service';
import { engagementSubMenu } from '@app/modules/dashboard/engagement/configs/engagement-sub-menu';

@Component({
  selector: 'app-engagement',
  templateUrl: './engagement.component.html',
  styleUrls: ['./engagement.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EngagementComponent {

  protected readonly menuConfig = engagementSubMenu;
  protected readonly isPrinting$ = this.printService.isPrinting$;
  constructor(private readonly printService: PrintService) {}
}

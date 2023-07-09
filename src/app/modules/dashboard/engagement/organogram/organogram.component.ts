import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OrganogramChartItem } from '@core/types/organogram';
import { OrganogramService } from '@core/services/organogram/organogram.service';

@Component({
  selector: 'app-organogram',
  templateUrl: './organogram.component.html',
  styleUrls: ['./organogram.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganogramComponent {
  orgData$!: Observable<OrganogramChartItem[]>;

  constructor(private organogramService: OrganogramService) {
    this.orgData$ = organogramService.getOrganogram();
  }

}

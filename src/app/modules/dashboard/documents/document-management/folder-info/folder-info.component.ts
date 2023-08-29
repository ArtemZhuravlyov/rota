import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { TableAction } from '@core/types/data-table';
import { PageEvent } from '@angular/material/paginator';
import { documentsListConfig } from '@modules/dashboard/documents/configs/documents-list.config';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder-info',
  templateUrl: './folder-info.component.html',
  styleUrls: ['./folder-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FolderInfoComponent {
  protected readonly NavigationPaths = NavigationPaths;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
    });
  }
  onActionClick($event: TableAction) {}

  onPageChange($event: PageEvent) {}

  protected readonly documentsListConfig = documentsListConfig;
}

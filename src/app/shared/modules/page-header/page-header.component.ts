import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import { Observable } from "rxjs";
import { Breadcrumb } from "@core/types/breadcrumb";
import { BreadcrumbService } from "@core/services/breadcrumb/breadcrumb.service";
import {NavigationPaths} from "@core/enums/navigation-paths.enum";
import {TableActionTypes} from "@core/types/data-table";

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeaderComponent {

  @Input() title!: string;
  @Input() isSubHeaderShowed = true;
  @Input() isBackBtnShowed = false;
  @Input() isPrinting!: boolean | null;
  @Input() additionalButtonsDisabled: boolean = false
  @Output() onActionClicked = new EventEmitter()

  protected readonly NavigationPaths = NavigationPaths;
  protected readonly tableActionTypes = TableActionTypes

  breadcrumbs$: Observable<Breadcrumb[]>;


  constructor(private readonly breadcrumbService: BreadcrumbService) {
    this.breadcrumbs$ = breadcrumbService.breadcrumbs;
  }

  actionClicked(event: typeof this.tableActionTypes[keyof typeof this.tableActionTypes]){
    this.onActionClicked.emit(event)
  }
}

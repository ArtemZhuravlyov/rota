import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from "rxjs";
import { Breadcrumb } from "@core/types/breadcrumb";
import { BreadcrumbService } from "@core/services/breadcrumb/breadcrumb.service";
import {NavigationPaths} from "@core/enums/navigation-paths.enum";

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

  protected readonly NavigationPaths = NavigationPaths;

  breadcrumbs$: Observable<Breadcrumb[]>;

  constructor(private readonly breadcrumbService: BreadcrumbService) {
    this.breadcrumbs$ = breadcrumbService.breadcrumbs;
  }
}

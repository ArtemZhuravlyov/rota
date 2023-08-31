import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Breadcrumb } from '@core/types/breadcrumb';
import { BreadcrumbService } from '@core/services/breadcrumb/breadcrumb.service';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { TableActionTypes } from '@core/types/data-table';
import { TranslateKey } from '../../../../assets/i18n/enums/translate-key.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderComponent {
  @Input({ required: true }) title!: keyof typeof TranslateKey;
  @Input() isBackBtnShowed = false;
  @Input() isPrinting!: boolean | null;
  @Input() backPathRoute: NavigationPaths[] = [NavigationPaths.BACK];

  protected readonly BACK = TranslateKey.BACK;

  protected readonly NavigationPaths = NavigationPaths;
  protected readonly tableActionTypes = TableActionTypes;

  breadcrumbs$: Observable<Breadcrumb[]>;

  constructor(
    private readonly breadcrumbService: BreadcrumbService,
    private readonly router: Router
  ) {
    this.breadcrumbs$ = breadcrumbService.breadcrumbs;
  }

  onBackClick() {
    this.router.navigate(this.backPathRoute);
  }
}

import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Optional, } from '@angular/core';
import {
  _MatPaginatorBase,
  MAT_PAGINATOR_DEFAULT_OPTIONS,
  MatPaginatorDefaultOptions,
  MatPaginatorIntl,
} from '@angular/material/paginator';

import { FormControl } from '@angular/forms';
import { debounceTime, startWith, } from 'rxjs/operators';
import { ButtonTypeEnum } from "@core/enums/button-type.enum";

@Component({
  selector: 'app-custom-paginator',
  templateUrl: './custom-paginator.component.html',
  styleUrls: ['./custom-paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomPaginatorComponent extends _MatPaginatorBase<MatPaginatorDefaultOptions> implements AfterViewInit{

  protected readonly ButtonTypeEnum = ButtonTypeEnum;
  control = new FormControl(0);
  countPages = 8;
  constructor(
    private intl: MatPaginatorIntl,
    private changeDetectorRef: ChangeDetectorRef,
    @Optional() @Inject(MAT_PAGINATOR_DEFAULT_OPTIONS) private defaults?:
      MatPaginatorDefaultOptions,
  ) {
    super(intl, changeDetectorRef, defaults);
  }

  ngAfterViewInit() {
    this.emitPageEvent(0);
    this.control.setValue(1);

    this.control.valueChanges
      .pipe(startWith(1), debounceTime(200))
      .subscribe((res) => {
        let page = +res!;
        if (page > this.getNumberOfPages()) {
          page = this.getNumberOfPages() - 1;
        } else page = page - 1;
        if (page != this.pageIndex) this.emitPageEvent(page);
      });
  }

  emitPageEvent(previousPageIndex: any) {
    this.pageIndex = previousPageIndex;
    this.page.emit({
      previousPageIndex,
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      length: this.length,
    });
    this.changeDetectorRef.detectChanges();
  }
  gotoPage(page: number) {
    this.emitPageEvent(page);
    this.control.setValue(page + 1, { emitEvent: false });
  }

  generateButtons(): string[] {
    const lastPage = this.getNumberOfPages() - 1;

    const b = new Array(
      lastPage < this.countPages ? lastPage + 1 : this.countPages
    ).fill('.');

    if (lastPage < this.countPages) return b.map((_x, i) => '' + i);

    const links0_5 = (this.countPages - 1) / 2;
    let start = this.pageIndex - links0_5 < 0 ? 0 : this.pageIndex - links0_5;
    let end =
      start == 0
        ? this.countPages - 1
        : this.pageIndex + links0_5 > lastPage
          ? lastPage
          : this.pageIndex + links0_5;

    if (end == lastPage) start = end - this.countPages + 1;

    return b.map((_x, i) => {
      return i == 0
        ? '0'
        : i == this.countPages - 1
          ? '' + lastPage
          : (i == 1 && start) || (i == this.countPages - 2 && end != lastPage)
            ? '...'
            : '' + (i + start);
    });

  }

}

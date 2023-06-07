import {
  Component,
  Optional,
  Inject,
  ChangeDetectorRef,
  OnInit,
  Input,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  MatPaginatorDefaultOptions,
  MAT_PAGINATOR_DEFAULT_OPTIONS,
  MatPaginatorIntl,
  _MatPaginatorBase,
} from '@angular/material/paginator';

import { FormControl } from '@angular/forms';
import { fromEvent, Subject } from 'rxjs';
import {
  map,
  startWith,
  takeUntil,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';

export function AutoUnsubscribe(constructor: any) {
  const original = constructor.prototype.ngOnDestroy;

  constructor.prototype.ngOnDestroy = function () {
    this.active.next();
    this.active.complete();
    original &&
    typeof original === 'function' &&
    original.apply(this, arguments);
  };
}

@Component({
  selector: 'app-custom-paginator',
  templateUrl: './custom-paginator.component.html',
  styleUrls: ['./custom-paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomPaginatorComponent extends _MatPaginatorBase<MatPaginatorDefaultOptions> implements AfterViewInit{

  countPages = 8;
  constructor(
    intl: MatPaginatorIntl,
    changeDetectorRef: ChangeDetectorRef,
    @Optional() @Inject(MAT_PAGINATOR_DEFAULT_OPTIONS) defaults?:
      MatPaginatorDefaultOptions,
  ) {
    super(intl, changeDetectorRef, defaults);
  }

  ngAfterViewInit() {
    this.generateButtons()
  }

  generateButtons(): void {
    const lastPage = this.getNumberOfPages();

    console.log(this.length, 'PAGES');
    const b = new Array(
      lastPage < this.countPages ? lastPage + 1 : this.countPages
    ).fill('.');

    console.log(b, 'BUTTONS ARRAY');
  }

}

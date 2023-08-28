import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { TranslateKey } from '../../../../assets/i18n/enums/translate-key.enum';
import { BehaviorSubject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs/operators';
import { isEmpty } from 'lodash';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {
  @Input() styleConfig: { [key: string]: string } | undefined;
  @Input() showClearButton = true;
  @Output() valueChanged = new EventEmitter();

  protected readonly SEARCH = TranslateKey.SEARCH;
  protected readonly CLEAR = TranslateKey.CLEAR;

  private destroyRef = inject(DestroyRef);

  public bs$ = new BehaviorSubject('');

  isFocus = false;

  ngOnInit() {
    this.bs$
      .pipe(takeUntilDestroyed(this.destroyRef), debounceTime(600))
      .subscribe({
        next: value => {
          if (!isEmpty(value)) this.valueChanged.emit(value);
        },
      });
  }
}

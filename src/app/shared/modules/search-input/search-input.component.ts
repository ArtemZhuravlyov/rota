import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent {
  @Input() styleConfig: { [key: string]: string } | undefined;
  @Input() showClearButton = true;
  @Output() valueChanged = new EventEmitter();

  isFocus = false;
}

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { TableActionTypes } from '@core/types/data-table';
import { TranslateKey } from '../../../../../assets/i18n/enums/translate-key.enum';

@Component({
  selector: 'app-page-sub-header',
  templateUrl: './page-sub-header.component.html',
  styleUrls: ['./page-sub-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageSubHeaderComponent {
  @Input() additionalButtonsDisabled = false;
  @Input() isChecked = false;
  @Input() showAnalyticsButton = false;
  @Output() onActionClicked = new EventEmitter();
  @Output() onCheckedChange = new EventEmitter<boolean>();

  protected readonly tableActionTypes = TableActionTypes;
  public readonly SHOW_IN_ACTIVE = TranslateKey.SHOW_IN_ACTIVE;

  buttonAction(
    action: (typeof this.tableActionTypes)[keyof typeof this.tableActionTypes]
  ) {
    this.onActionClicked.emit(action);
  }

  checkedChange(checked: boolean) {
    this.onCheckedChange.emit(checked);
  }
}

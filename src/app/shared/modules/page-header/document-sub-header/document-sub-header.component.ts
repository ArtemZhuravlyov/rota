import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { TableActionTypes } from '@core/types/data-table';

@Component({
  selector: 'app-document-sub-header',
  templateUrl: './document-sub-header.component.html',
  styleUrls: ['./document-sub-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentSubHeaderComponent {
  @Input() additionalButtonsDisabled = false;
  @Output() onActionClicked = new EventEmitter();

  protected readonly tableActionTypes = TableActionTypes;

  buttonAction(
    action: (typeof this.tableActionTypes)[keyof typeof this.tableActionTypes]
  ) {
    this.onActionClicked.emit(action);
  }
}

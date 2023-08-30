import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { TableActionTypes } from '@core/types/data-table';

@Component({
  selector: 'app-folder-sub-header',
  templateUrl: './folder-sub-header.component.html',
  styleUrls: ['./folder-sub-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FolderSubHeaderComponent {
  @Input() additionalButtonsDisabled = false;
  @Output() onActionClicked = new EventEmitter();

  protected readonly tableActionTypes = TableActionTypes;

  buttonAction(
    action: (typeof this.tableActionTypes)[keyof typeof this.tableActionTypes]
  ) {
    this.onActionClicked.emit(action);
  }
}

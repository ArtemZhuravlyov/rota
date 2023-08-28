import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {TableActionTypes} from "@core/types/data-table";

@Component({
  selector: 'app-page-sub-header',
  templateUrl: './page-sub-header.component.html',
  styleUrls: ['./page-sub-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageSubHeaderComponent {
  @Input() additionalButtonsDisabled: boolean = false
  @Output() onActionClicked = new EventEmitter();

  protected readonly tableActionTypes = TableActionTypes

  buttonAction(action: typeof this.tableActionTypes[keyof typeof this.tableActionTypes]){
    this.onActionClicked.emit(action)
  }
}

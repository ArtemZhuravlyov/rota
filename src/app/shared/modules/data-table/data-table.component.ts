import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColumnType, TableAction, TableActionTypes, TableConfig } from '@core/types/data-table';
import { ButtonTypeEnum } from "@core/enums/button-type.enum";


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent implements OnInit {
  @Input({required: true}) tableData!: any[];
  @Input({required: true}) tableConfig!: TableConfig;
  @Input() hasCheckboxColumn = false;
  @Output() actionClicked = new EventEmitter<TableAction>();
  readonly ColumnType = ColumnType;
  readonly ButtonTypeEnum = ButtonTypeEnum;

  defaultActionConfig = [
    { icon: 'visibility', type: TableActionTypes.VIEW },
    { icon: 'edit', type: TableActionTypes.EDIT },
    { icon: 'delete', type: TableActionTypes.DELETE },
  ];

  columns: string[] = [];
  selectedItems = new Set<string>();

  ngOnInit(): void {
    this.columns = this.tableConfig.map(col => col.columnName);
  }

  onAction(action: TableAction): void {
    this.actionClicked.emit(action);
  }

  selectAll(): void {
    if (this.tableData.length === this.selectedItems.size) {
      this.selectedItems.clear();
    } else {
      this.tableData.forEach(item => this.selectedItems.add(item.id));
    }
  }

  addToSelected(id: string): void {
    if (this.selectedItems.has(id)) {
      this.selectedItems.delete(id);
    } else {
      this.selectedItems.add(id);
    }
  }
}

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  ColumnConfig,
  ColumnType,
  TableAction,
  TableActionTypes,
  TableConfig,
} from '@core/types/data-table';
import { PageEvent } from '@angular/material/paginator';
import { FormField } from '@core/types/form-builder.model';
import { FormGroup } from '@angular/forms';
import { TableUtil } from '@shared/utils/tableUtil';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableComponent implements OnInit, AfterViewInit {
  @Input({ required: true }) itemsKey!: string;
  @Input({ required: true }) set data(tableData: any) {
    if (tableData) {
      this.tableData = tableData;
      this.filteredData = tableData[this.itemsKey];
    }
  }
  @Input({ required: true }) tableConfig!: TableConfig;
  @Input() hasCheckboxColumn = false;
  @Input() tableStyle!: string;
  @Input() actionConfig?: any;
  @Input() formConfig!: FormField[];
  @Input() isFormIncluded?: boolean;
  @Input() headerDropdownFilter = true;
  @Input() isPrinting: boolean | null = false;
  @Input() isSorting: boolean | null = false;
  @Input() exporting$ = new BehaviorSubject([]);
  @Output() actionClicked = new EventEmitter<TableAction>();
  @Output() pageChange = new EventEmitter<PageEvent>();
  @Output() selectedItemsIds = new EventEmitter();
  @Output() searchChange = new EventEmitter<string>();
  readonly ColumnType = ColumnType;
  filteredData: any = [];
  tableData: any = [];
  actions: any;
  forms: any = [];
  form!: FormGroup;

  ngAfterViewInit() {
    this.exporting$.subscribe((table: any) => {
      console.log('EXPORTING');
      console.log(table);
      if (table.length) {
        this.exportTable(table);
      }
    });
  }

  exportTable(table: any) {
    TableUtil.exportArrayToExcel(table, 'Table');
  }

  defaultActionConfig = [
    {
      icon: 'eye',
      type: TableActionTypes.VIEW,
      styleConfig: {
        width: '30px',
        height: '30px',
        background: '#FFFFFF',
        border: '1px solid #E4EDF4',
        color: '#91ACC2',
      },
    },
    {
      icon: 'edit',
      type: TableActionTypes.EDIT,
      styleConfig: {
        width: '30px',
        height: '30px',
        background: '#FFFFFF',
        border: '1px solid #E4EDF4',
        color: '#91ACC2',
      },
    },
    {
      icon: 'delete',
      type: TableActionTypes.DELETE,
      styleConfig: {
        width: '30px',
        height: '30px',
        background: '#FFFFFF',
        border: '1px solid #E4EDF4',
        color: '#FF0000',
      },
    },
  ];

  formsStyleConfig = {
    'flex-direction': 'unset',
  };

  gradeLevelsStyleConfig = {
    'max-height:': '35px',
  };
  columns: string[] = [];
  selectedItems = new Map();
  showSearch = false;

  public get configForHiddenCols(): TableConfig {
    return this.tableConfig.filter(obj =>
      obj.hasOwnProperty('hidden')
    );
  }
  constructor(private readonly cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.columns = this.tableConfig.map(col => col.columnName);
    this.setActions();
  }

  toggleSearch(): void {
    this.showSearch = !this.showSearch;
  }

  filterTable(searchText: string, filedToFilter: string): void {
    const dataToFilter = JSON.parse(
      JSON.stringify(this.tableData[this.itemsKey])
    );
    this.filteredData = dataToFilter.filter((obj: any) => {
      return obj[filedToFilter]
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
  }
  onAction(action: TableAction): void {
    this.actionClicked.emit(action);
  }

  onValueSearch(input: string) {
    this.searchChange.emit(input);
  }

  public handleColumnVisibility(config: ColumnConfig): void {
    config.hidden = !config.hidden;
    this.cdr.detectChanges();
  }

  selectAll(): void {
    if (this.filteredData?.length === this.selectedItems.size) {
      this.selectedItems.clear();
      this.selectedItemsIds.emit(this.selectedItems);
    } else {
      this.filteredData.forEach((item: any) =>
        this.selectedItems.set(item.id, item)
      );
      this.selectedItemsIds.emit(this.selectedItems);
    }
  }

  addToSelected(element: any): void {
    if (this.selectedItems.has(element.id)) {
      this.selectedItems.delete(element.id);
      this.selectedItemsIds.emit(this.selectedItems);
    } else {
      this.selectedItems.set(element.id, element);
      this.selectedItemsIds.emit(this.selectedItems);
    }
  }

  setActions(): void {
    this.actions = this.actionConfig ?? this.defaultActionConfig;
  }

  createForm(form: FormGroup) {
    this.forms.push(form);
  }
}

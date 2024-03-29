import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  ColumnConfig,
  ColumnType,
  TableAction,
  TableConfig,
} from '@core/types/data-table';
import { PageEvent } from '@angular/material/paginator';
import { FormField } from '@core/types/form-builder.model';
import { FormGroup } from '@angular/forms';
import { TableUtil } from '@shared/utils/tableUtil';
import { BehaviorSubject } from 'rxjs';
import { NavigationPaths } from '@core/enums/navigation-paths.enum';
import { get, isEmpty, isNumber, toNumber } from 'lodash';
import { ActionButtonName } from '@shared/components/action-button/enums/action-button-name.enum';
import { ActionButton } from '@shared/components/action-button/types/action-button.type';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableComponent implements OnInit, AfterViewInit {
  @Input({ required: true }) itemsKey!: string;
  @Input({ required: true }) set data(tableData: any) {
    if (!isEmpty(tableData)) {
      this.tableData = tableData;
      this.filteredData = tableData[this.itemsKey];
    } else {
      this.tableData = [];
      this.filteredData = [];
    }
  }
  @Input() set actionConfig(actions: ActionButton[]) {
    this.actions = actions ?? this.defaultActionConfig;
  }
  @Input({ required: true }) tableConfig!: TableConfig;
  @Input() hasCheckboxColumn = false;
  @Input() tableStyle!: string;
  @Input() formConfig!: FormField[];
  @Input() isFormIncluded?: boolean;
  @Input() headerDropdownFilter = true;
  @Input() isPrinting: boolean | null = false;
  @Input() isLoading: boolean | null = false;
  @Input() keysForSearchFilter: string[] = [];
  @Input() exporting$ = new BehaviorSubject([]);
  @Output() actionClicked = new EventEmitter<TableAction>();
  @Output() pageChange = new EventEmitter<PageEvent>();
  @Output() selectedItemsIds = new EventEmitter();
  @Output() searchChange = new EventEmitter<string>();
  readonly ColumnType = ColumnType;
  filteredData: any = [];
  tableData: any = [];
  actions: ActionButton[] = [];
  forms: any = [];
  form!: FormGroup;
  protected readonly NavigationPaths = NavigationPaths;
  searchInput = '';

  private destroyRef = inject(DestroyRef);

  ngAfterViewInit() {
    this.exporting$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((table: any) => {
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

  defaultActionConfig: ActionButtonName[] = [
    ActionButtonName.VIEW_DETAILS,
    ActionButtonName.DELETE,
    ActionButtonName.APPLY,
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
    return this.tableConfig.filter(
      obj =>
        get(obj, 'hiddable', true) &&
        obj.columnName !== 'EMPTY' &&
        obj.columnName !== 'ACTIONS'
    );
  }
  constructor(private readonly cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.columns = this.tableConfig.map(col => col.columnName);
  }

  toggleSearch(): void {
    this.showSearch = !this.showSearch;
  }

  filterTable(searchText: string, filedToFilter: string): void {
    this.searchInput = searchText;
    const dataToFilter = this.tableData[this.itemsKey];

    this.filteredData = dataToFilter.filter((obj: any) => {
      if (isNumber(obj[filedToFilter])) {
        return obj[filedToFilter] === toNumber(searchText);
      } else {
        return obj[filedToFilter]
          .toLowerCase()
          .includes(searchText.toLowerCase());
      }
    });
  }

  resetFilterTable(): void {
    this.searchInput = '';
    this.filteredData = this.tableData[this.itemsKey];
  }
  onAction(action: TableAction): void {
    console.log('onAction');
    this.actionClicked.emit(action);
  }

  onValueSearch(searchText: string) {
    this.searchInput = searchText;
    const dataToFilter = this.tableData[this.itemsKey];
    this.filteredData = dataToFilter.filter((obj: any) =>
      this.keysForSearchFilter.some(param =>
        obj[param].toLowerCase().includes(searchText.toLowerCase())
      )
    );
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

  createForm(form: FormGroup) {
    this.forms.push(form);
  }

  protected readonly ActionButtonName = ActionButtonName;
}

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ColumnType, TableAction, TableActionTypes, TableConfig } from '@core/types/data-table';
import { ButtonTypeEnum } from "@core/enums/button-type.enum";
import { PageEvent } from "@angular/material/paginator";
import {FormField} from "@core/types/form-builder.model";
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent implements OnInit {
  @Input({required: true}) itemsKey!: string;
  @Input({required: true}) set data(tableData: any) {
    if(tableData) {
      this.tableData = tableData;
      this.filteredData = tableData[this.itemsKey];
    }
  };
  @Input({required: true}) tableConfig!: TableConfig;
  @Input() hasCheckboxColumn = false;
  @Input() tableStyle!: string;
  @Input() actionConfig?: any;
  @Input() formConfig!: FormField[];
  @Input() isFormIncluded?: boolean;
  @Input() headerDropdownFilter: boolean = true;
  @Input() isPrinting: boolean | null = false;
  @Output() actionClicked = new EventEmitter<TableAction>();
  @Output() pageChange = new EventEmitter<PageEvent>();
  @Output() selectedItemsIds = new EventEmitter()
  readonly ColumnType = ColumnType;
  readonly ButtonTypeEnum = ButtonTypeEnum;
  filteredData: any = [];
  tableData: any = [];
  actions: any;
  forms: any = [];
  form!: FormGroup;

  defaultActionConfig = [
    { icon: 'eye', type: TableActionTypes.VIEW, styleConfig: {
      'width': '30px',
      'height': '30px',
      'background': '#FFFFFF',
      'border': '1px solid #E4EDF4',
      'color': '#91ACC2'
    } },
    { icon: 'edit', type: TableActionTypes.EDIT, styleConfig: {
      'width': '30px',
      'height': '30px',
      'background': '#FFFFFF',
      'border': '1px solid #E4EDF4',
      'color': '#91ACC2'} },
    { icon: 'delete', type: TableActionTypes.DELETE, styleConfig: {
      'width': '30px',
      'height': '30px',
      'background': '#FFFFFF',
      'border': '1px solid #E4EDF4',
      'color': '#FF0000'} },
  ];

  formsStyleConfig = {
    'flex-direction': 'unset'
  }

  gradeLevelsStyleConfig = {
    'max-height:': '35px'
  }
  columns: string[] = [];
  selectedItems = new Map;
  showSearch = false;

  get configForHiddenCols(): TableConfig {
    return this.tableConfig.filter( obj => obj.hasOwnProperty('hidden'))
  }
  constructor(private readonly cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.columns = this.tableConfig.map(col => col.columnName);
    this.setActions();
  }

  toggleSearch(): void {
    this.showSearch = !this.showSearch;
  }

  filterTable(searchText: string, filedToFilter: string): void {
    const dataToFilter = JSON.parse(JSON.stringify(this.tableData[this.itemsKey]))
    this.filteredData = dataToFilter.filter((obj: any) => obj[filedToFilter].toLowerCase().includes(searchText.toLowerCase()))
  }
  onAction(action: TableAction): void {
    this.actionClicked.emit(action);
  }

  hideColumn(event: any, i: number): void {
    this.configForHiddenCols.forEach( (obj, index) => {
        if(i === index) {
          obj.hidden = !obj.hidden;
          this.cdr.detectChanges();
        }
    })
  }

  selectAll(): void {
    if (this.filteredData?.length === this.selectedItems.size) {
      this.selectedItems.clear()
      this.selectedItemsIds.emit(this.selectedItems)
    } else {
      this.filteredData.forEach((item: any) => this.selectedItems.set(item.id, item));
      this.selectedItemsIds.emit(this.selectedItems)
    }
  }

  addToSelected(element: any): void {
    if (this.selectedItems.has(element.id)) {
      this.selectedItems.delete(element.id);
      this.selectedItemsIds.emit(this.selectedItems)
    } else {
      this.selectedItems.set(element.id, element);
      this.selectedItemsIds.emit(this.selectedItems)
    }
  }

  setActions(): void {
    this.actions = this.actionConfig ?? this.defaultActionConfig;
  }

  createForm(form: FormGroup){
    this.forms.push(form);
  }


}

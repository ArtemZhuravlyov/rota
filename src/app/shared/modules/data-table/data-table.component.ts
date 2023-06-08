import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { ColumnType, TableAction, TableActionTypes, TableConfig } from '@core/types/data-table';
import { ButtonTypeEnum } from "@core/enums/button-type.enum";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { tap } from "rxjs";
import { CustomPaginatorComponent } from "@shared/modules/data-table/custom-paginator/custom-paginator.component";


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent implements OnInit {
  @Input({required: true}) set data(tableData: any) {
    if(tableData) {
      this.tableData = tableData;
      this.filteredData = tableData[this.itemsKey];
      this.cdr.detectChanges();
      this.paginator.page.pipe(
        tap( res => {
          this.pageChange.emit(res);
        }),
      ).subscribe()
    }
  };
  @Input({required: true}) tableConfig!: TableConfig;
  @Input({required: true}) itemsKey!: string;
  @Input() hasCheckboxColumn = false;
  @Output() actionClicked = new EventEmitter<TableAction>();
  @Output() pageChange = new EventEmitter<PageEvent>();
  readonly ColumnType = ColumnType;
  readonly ButtonTypeEnum = ButtonTypeEnum;
  filteredData: any = [];
  tableData: any = [];

  @ViewChild(CustomPaginatorComponent, { static: false }) paginator!: MatPaginator;

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
  columns: string[] = [];
  selectedItems = new Set<string>();
  showSearch = false;

  get configForHiddenCols(): TableConfig {
    return this.tableConfig.filter( obj => obj.hasOwnProperty('hidden'))
  }
  constructor(private readonly cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.columns = this.tableConfig.map(col => col.columnName);
  }

  // ngAfterViewInit(): void {
  //   this.paginator.page.pipe(
  //     tap( res => {
  //       this.pageChange.emit(res);
  //     }),
  //   ).subscribe()
  // }

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
    if (this.filteredData.length === this.selectedItems.size) {
      this.selectedItems.clear();
    } else {
      this.filteredData.forEach( (item: any) => this.selectedItems.add(item.id));
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

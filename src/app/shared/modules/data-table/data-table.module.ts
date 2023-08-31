import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import { MaterialModule } from '../material.module';
import { TranslateModule } from '@ngx-translate/core';
import { CountryModule } from '@shared/pipes/country/country.module';
import { ButtonModule } from '@shared/modules/button/button.module';
import { DropdownMenuModule } from '@shared/modules/dropdown-menu/dropdown-menu.module';
import { CustomPaginatorComponent } from './custom-paginator/custom-paginator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchInputModule } from '@shared/modules/search-input/search-input.module';
import { FormBuilderModule } from '@shared/modules/form-builder/form-builder.module';
import { FilterDropdownComponent } from '@shared/components/filter-dropdown/filter-dropdown.component';
import { MoveVertDropdownComponent } from '@shared/components/move-vert-dropdown/move-vert-dropdown.component';
import { TableButtonComponent } from '@shared/components/table-button/table-button.component';
import { SimplebarAngularModule } from 'simplebar-angular';
import { ActionButtonComponent } from '@shared/components/action-button/action-button.component';

@NgModule({
  declarations: [DataTableComponent, CustomPaginatorComponent],
  exports: [DataTableComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
    CountryModule,
    ButtonModule,
    DropdownMenuModule,
    FormsModule,
    ReactiveFormsModule,
    SearchInputModule,
    FormBuilderModule,
    FilterDropdownComponent,
    MoveVertDropdownComponent,
    TableButtonComponent,
    SimplebarAngularModule,
    ActionButtonComponent,
  ],
})
export class DataTableModule {}
